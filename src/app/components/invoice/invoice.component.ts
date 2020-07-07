import { Component, OnInit, Inject, Output, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSort, MatPaginator, MatTableDataSource, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { disableDebugTools } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastService } from '../../shared/toast/toast-service';

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
    'id'
  ];

      // Define all the variable
  readableColumns = {
    inv_number: 'Invoice Number',
    customer: 'Customer',
    total_price: 'Total Price',
    balance: 'Balance',
    due_date: 'Due Date',
    status: 'Status',
    id: 'Action'
  };
  displayedItemColumns: string[] = [
    'label',
    'price',
    'quantity',
    'total',
    'created_at',
    'desc',
    // 'id'
  ];
  readableItemColumns ={
    label: 'Label',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    created_at: 'Created At',
    desc: 'Description',
  };

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  customers: any;
  editData;
  deleteNotAllow: Boolean;
  payments = [];
  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;

  @Output() invoices: any

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private toast: ToastService,

  ) { }

  ngAfterViewInit() {
    this.loadInvoices();
    this.apiService.loadAll('csmr').subscribe(
      result => {
        this.customers = result;        
      }
    );
  }
  invItems = [];
  loading = true;

  assigning(data){
    this.invItems = data;
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

  openDialog(data, type = 'a') {
    const dialogRef = this.dialog.open(CuDialog, {
      data: {
        mainData: data, 
        customer: this.customers,
        type: type
      },
    });
    if (data) {
      this.apiService.loadAll('pay').subscribe(
        result => {
          this.payments = result;
          if (result.filter(x => x.ref_inv == data.id).length > 0) {
            dialogRef.close();
            this.toast.show("Edit not allowed for this item!\nThis Item has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
          }
        },
      );
    }

    dialogRef.afterClosed().subscribe(result => {
      // Do nothing on cancel and if it return value update table.
      if (result) {
        if (type == 'a') {
          this.addToTable(result);
        }else{
          this.updateTable(data, result);
        }
      }
    });
  }
  
  // Delete Item From Server.
  delete(row){
    this.apiService.loadAll('pay').subscribe(
      result => {
        this.payments = result;
        console.log(result.filter(x => x.ref_inv == row.id));
        
        if (result.filter(x => x.ref_inv == row.id).length > 0) {
          this.toast.show("Delete not allowed for this item!\nThis Item has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
        }else{
          if (confirm('Are sure to delete?')) {
            this.apiService.delete(row.id, 'inv').subscribe(
              result => {
                this.deleteUI(row);
              }
            );      
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // Delete Item From UI
  deleteUI(row) {
    this.tableData = this.dataSource.data;
    let index: number = this.tableData.findIndex(data => data === row);
    this.tableData.splice(index, 1);
    this.dataSource = new MatTableDataSource<any>(this.tableData);
    this.dataSource.sort = this.msort;
    this.toast.show("Invoice deleted successfully!\nID: " + row.inv_number, { classname: 'bg-success text-light', delay: 5000 });

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
    this.tableData = this.tableData.filter(item => item.id != oldRow.id);
        
    // Add update row.
    this.tableData.push(newRow);    
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
  selector: 'cu-dialog',
  templateUrl: 'cu-dialog.html',
  styleUrls: ['./invoice.component.css'],

})
export class CuDialog implements OnInit{

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dData: DialogData,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar

  ) { }

  invoiceFC = new FormGroup({
    inv_number: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    total_price: new FormControl(0),
    balance: new FormControl(0),
    due_date: new FormControl('', Validators.required),
    status: new FormControl(0, Validators.required),
  });

  entity:any = this.dData;
  customer: any = this.entity.customer;
  type = this.entity.type;
  isPreview = false;
  isLinear = true;
  errors;
  itemsFC = this._formBuilder.group({
    label: ['', ],
    price: ['', ],
    quantity: ['', ],
    total: ['', ],
    desc: ['', ],
  });
  total: number;
  invoice = this.entity.mainData;
  invNumber = '';
  invoiceItems: any = [];
  editData;
  message;
  itemSource = new MatTableDataSource(this.invoiceItems);
  invItmTC = ['label', 'price', 'quantity', 'total', 'desc', 'id'];
  readableInvItmTC = {
    label: 'Label',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    desc: 'Description',
  };

  invTotalPrice = 0;
  invBalance = 0;
  ngOnInit() {

    // Assign Dialog data to new variable.
    // Because it return error when trying to get data.
    if (this.entity.mainData) {
      this.editData = this.entity.mainData;
      this.loadItems(this.editData);
      this.invNumber = this.editData.inv_number;
      this.invoiceFC.setValue({
        inv_number: this.editData.inv_number,
        customer: this.editData.customer,
        currency: this.editData.currency,
        total_price: this.editData.total_price,
        balance: this.editData.balance,
        due_date: this.editData.due_date,
        status: this.editData.status,
      });

      this.invoiceFC.controls['inv_number'].disable();
      this.invoiceFC.controls['total_price'].disable();
      this.invoiceFC.controls['balance'].disable();
    }
    else{
      this.getLastInvNum();  
    }

  }
  
  checkTotal(){
    this.itemsFC.value.total = this.total = +Number(this.itemsFC.value.price * this.itemsFC.value.quantity);    
  }

  loading = true;

  assigning(data) {
    this.invoiceItems = data;
    this.calTotal();
    
    this.itemSource = new MatTableDataSource(this.invoiceItems);
  }

  calTotal(){
    let count = 0;
    this.invoiceItems.forEach(element => {
      count += element.total;
    });
    this.invTotalPrice = count;
    this.invBalance = count;
  }

  loadItems(elm) {
    this.loading = true;
    this.invoiceItems = [];
    this.apiService.retrive('itm', elm.id).subscribe(
      result => {
        this.assigning(result);
        this.loading = false;
      }
    );
    return elm;
  }


  invOperation(data){
    this.invoiceFC.value.inv_number = this.invNumber;

    if (data) {
    console.log('update');
    
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
    else{
      this.apiService.create(this.invoiceFC.value, 'inv').subscribe(
        (result: any) => {
          if (result.error) {
            console.log(result.error);
          }
          else {
            this.invoice = result;
          }
        },
      );
    }
    
  }

  getLastInvNum() {    
    this.apiService.loadAll('last_inv').subscribe(
      result => {
        this.invNumber = 'Invoice-' + result.invoice;
        this.invoiceFC.controls['inv_number'].disable();
        this.invoiceFC.controls['total_price'].disable();
        this.invoiceFC.controls['balance'].disable();
      }
    );
  }

  createItem(){
    this.errors = [];
    this.itemsFC.value.invoice = this.invoice.id;

    this.apiService.create(this.itemsFC.value, 'itm').subscribe(
      (result: any) => {
        if (result.error) {
          this.errors = result.error;          
        }
        else {
          this.invoiceItems.push(result);
          this.calTotal();
          this.itemSource = new MatTableDataSource(this.invoiceItems);          
          this.itemsFC.reset();
        }
      },
    );
  }
  removeItem(data){
    if (confirm('Are sure to delete?')) {
      this.apiService.delete(data.id, 'itm').subscribe(
        result => {
          this.invoiceItems = this.invoiceItems.filter(item => item !== data);
          this.itemSource = new MatTableDataSource(this.invoiceItems);
          this._snackBar.openFromComponent(SnakComponent, {
            duration: 2000,
          });

        }
      );
    }
  }

  finishInvoice(inv){
    this.calTotal();
    this.invoiceFC.value.total_price = this.invTotalPrice;
    this.invoiceFC.value.balance = this.invTotalPrice;
    this.invoiceFC.value.status = 1;    
    this.invOperation(inv);
  }
}

@Component({
  selector: 'snack-bar-component-login',
  template: '<span>Item Deleted Successfully!</span>',
  styles: [`
    span{
      style: green;
    }`
  ]
})
export class SnakComponent { }