import { Component, OnInit, Inject, Output, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { disableDebugTools } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class InvoiceComponent implements AfterViewInit {

  // Define all the variable
  displayedColumns: string[] = [
    'inv_number',
    'customer',
    'total_price',
    'balance',
    'due_date',
    'status',
  ];

  displayedItemColumns: string[] = [
    'label',
    'price',
    'quantity',
    'total',
    'created_at',
    'desc',
  ];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  customers: any;
  items: any;
  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;

  @Output() invoices: any

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngAfterViewInit() {
    this.loadInvoices();
    this.apiService.loadAll('csmr').subscribe(
      result => {
        this.customers = result;        
      }
    );
    this.apiService.loadAll('item').subscribe(
      result => {
        this.items = result;
      }
    );
  }
  invItems = [];
  loading = true;

  assigning(data){
    this.invItems = data;
    console.log(this.invItems);  
  }
  loadItems(elm){
    this.loading = true;
    this.invItems = [];
    this.apiService.retrive('itm', elm.id).subscribe(
      result => {
        this.assigning(result);
        this.loading = false;
      }
    );
    return elm; 
  }
  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  loadInvoices() {
    this.apiService.loadAll('inv').subscribe(
      result => {
        this.dataSource.data = result;
        this.dataSource.sort = this.msort;
      },
      error => {
        console.log(error);
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialog, {
      data: {
        customer: this.customers,
        item: this.items
      },
      // maxHeight: '500px',
      // maxWidth: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Do nothing on cancel and if it return value update table.
      if (result) {
        this.addToTable(result);
      }
    });
  }
  
  // Update handling Serverside and client side.
  openEditDialog(data) { 
    
    const dialogRef = this.dialog.open(EditDialog, {
      data: {
        mainData: data, 
        customer: this.customers,
        item: this.items
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.updateTable(data, result);
      }
    });
  }

  // Delete Item From Server.
  delete(row){
    if (confirm('Are sure to delete?')) {
      this.apiService.delete(row.id, 'inv').subscribe(
        result => {
          this.deleteUI(row);
        }
      );      
    }
  }

  // Delete Item From UI
  deleteUI(row) {
    this.tableData = this.dataSource.data;
    let index: number = this.tableData.findIndex(data => data === row);
    this.tableData.splice(index, 1);
    this.dataSource = new MatTableDataSource<any>(this.tableData);
    this.dataSource.sort = this.msort;
  }

  addToTable(data){
    this.tableData = this.dataSource.data;
    this.dataSource.data = this.tableData.push(data);
    this.dataSource = new MatTableDataSource<any>(this.tableData);
    this.dataSource.sort = this.msort;
  }

  updateTable(oldRow, newRow) {
    this.tableData = this.dataSource.data;
    // Remove the old data from table.
    let index: number = this.tableData.findIndex(data => data === oldRow);
    this.tableData.splice(index, 1);
    // Add update row.
    this.dataSource.data = this.tableData.push(newRow);
    this.dataSource = new MatTableDataSource<any>(this.tableData);
    this.dataSource.sort = this.msort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


export interface DialogData { }

@Component({
  selector: 'add-dialog',
  templateUrl: 'add-dialog.html',
})
export class AddDialog implements OnInit{

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dData: DialogData,
    private _formBuilder: FormBuilder
  ) { }

  invoiceFC = new FormGroup({
    inv_number: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    total_price: new FormControl(0, Validators.required),
    balance: new FormControl(0, Validators.required),
    due_date: new FormControl('', Validators.required),
    // status: new FormControl(''),
  });

  entity:any = this.dData;
  customer: any = this.entity.customer;
  items: any = this.entity.item;
  isPreview = false;
  isLinear = true;
  itemsFC = this._formBuilder.group({
    label: ['', Validators.required],
    price: ['', Validators.required],
    quantity: [1, Validators.required],
    total: ['', Validators.required],
    desc: ['', ],
  });
  total: number;
  invoice;
  invNumber = '';
  invoiceItems: any = [];
  
  ngOnInit(){
    this.getLastInvNum();  
  }
  
  checkTotal(){
    this.itemsFC.value.total = this.total = this.itemsFC.value.price * this.itemsFC.value.quantity;    
  }
  create(){
    this.invoiceFC.value.inv_number = this.invNumber;

    this.apiService.create(this.invoiceFC.value, 'inv').subscribe(
      (result: any) => {
        if (result.error) {
          console.log(result.error);
        }
        else {
          this.invoice = result;
        }
      },
      error => {
        // this.dialogRef.close();
      }
    );
    
  }

  getLastInvNum() {    
    this.apiService.loadAll('last_inv').subscribe(
      result => {
        this.invNumber = 'Invoice-' + result.invoice;
        this.invoiceFC.controls['inv_number'].disable();
      }
    );
  }

  createItem(){
    this.itemsFC.value.invoice = this.invoice.id;

    this.apiService.create(this.itemsFC.value, 'itm').subscribe(
      (result: any) => {
        if (result.error) {
          console.log(result.error);
        }
        else {
          this.invoiceItems.push(result);
          this.itemsFC.reset();
        }
      },
    );
  }
  update(data) {
    this.invoiceFC.value.inv_number = this.invNumber;
    
    this.apiService.update(data.id, this.invoiceFC.value, 'inv').subscribe(
      (result: any) => {
        if (result.error) {
          console.log(result.error);
        }
        else {
          this.dialogRef.close(result);
        }
      },
    );

  }
}

export interface DialogData { }
@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
})

export class EditDialog implements OnInit{
  
  editData : any
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dData: DialogData
  ) { }

  invoiceFC = new FormGroup({
    inv_number: new FormControl(''),
    items: new FormControl(''),
    customer: new FormControl(''),
    currency: new FormControl(''),
    total_price: new FormControl(''),
    balance: new FormControl(''),
    due_date: new FormControl(''),
    status: new FormControl(''),
  });
  entity: any = this.dData;
  customer: any = this.entity.customer;
  newInv;

  ngOnInit(){

    // Assign Dialog data to new variable.
    // Because it return error when trying to get data.
    this.editData = this.entity.mainData;
    this.invoiceFC.setValue({
      inv_number: this.editData.inv_number,
      items: this.editData.items,
      customer: this.editData.customer,
      currency: this.editData.currency,
      total_price: this.editData.total_price,
      balance: this.editData.balance,
      due_date: this.editData.due_date,
      status: this.editData.status,
    });
    
  }
  update(data) {
    console.log(data);
    
    this.apiService.update(data.id, this.invoiceFC.value, 'inv').subscribe(
      (result: any) => {
        if (result.error){
          console.log(result.error);
        }
        else{
          this.dialogRef.close(result);
        }        
      },
      error => {
        // this.dialogRef.close();
      }
    );

  }
}
