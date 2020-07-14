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
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class BillComponent implements AfterViewInit {

  // Define all the variable
  displayedColumns: string[] = [
    'bill_number',
    'vendor',
    'total_price',
    'balance',
    'due_date',
    'status',
    'id'
  ];

      // Define all the variable
  readableColumns = {
    bill_number: 'Bill Number',
    vendor: 'Vendor',
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
  vendors:any = [];
  editData;
  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;

  @Output() bills: any

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private toast: ToastService,
  ) { }

  ngAfterViewInit() {
    this.loadBills();
    this.apiService.loadAll('vdr').subscribe(
      result => {
        this.vendors = result;        
      }
    );
  }
  bilItems = [];
  loading = true;

  assigning(data){
    this.bilItems = data;
  }
  loadItems(elm){
    this.loading = true;
    this.bilItems = [];
    this.apiService.retrive('bitm', elm.id).subscribe(
      result => {
        this.assigning(result);
        this.loading = false;
      }
    );
    return elm; 
  }
  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  loadBills() {
    this.apiService.loadAll('bil').subscribe(
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
        vendor: this.vendors,
        type: type
      },
    });
    if (data) {
      this.apiService.loadAll('pay').subscribe(
        result => {                    
          if (result.filter(x => x.ref_bill == data.id).length > 0) {
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
        if (result.filter(x => x.ref_bill == row.id).length > 0) {
          this.toast.show("Delete not allowed for this item!\nThis Item has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
        } else {
          if (confirm('Are sure to delete?')) {
            this.apiService.delete(row.id, 'bil').subscribe(
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
    this.toast.show("Bill deleted successfully!\nID: " + row.bill_number, { classname: 'bg-success text-light', delay: 5000 });

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
  findVendor(id) {
    return this.vendors.filter(x => x.id == id)[0];
  }

}


export interface DialogData { }

@Component({
  selector: 'cu-dialog',
  templateUrl: 'cu-dialog.html',
  styleUrls: ['./bill.component.css'],

})
export class CuDialog implements OnInit{

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dData: DialogData,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar

  ) { }

  billFC = new FormGroup({
    bill_number: new FormControl('', Validators.required),
    vendor: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    total_price: new FormControl(0),
    balance: new FormControl(0),
    due_date: new FormControl('', Validators.required),
    status: new FormControl(0, Validators.required),
  });
  
  entity:any = this.dData;
  vendor: any = this.entity.vendor;
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
  bill = this.entity.mainData;
  bilNumber = '';
  billItems: any = [];
  editData;
  message;
  itemSource = new MatTableDataSource(this.billItems);
  bilItmTC = ['label', 'price', 'quantity', 'total', 'desc', 'id'];
  readableInvItmTC = {
    label: 'Label',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    desc: 'Description',
  };

  bilTotalPrice = 0;

  ngOnInit() {
    console.log(this.entity);
    // Assign Dialog data to new variable.
    // Because it return error when trying to get data.
    if (this.entity.mainData) {
      this.editData = this.entity.mainData;
      this.loadItems(this.editData);
      this.bilNumber = this.editData.bill_number;
      this.billFC.setValue({
        bill_number: this.editData.bill_number,
        vendor: this.editData.vendor,
        currency: this.editData.currency,
        total_price: this.editData.total_price,
        balance: this.editData.balance,
        due_date: this.editData.due_date,
        status: this.editData.status,
      });

      this.billFC.controls['bill_number'].disable();
      this.billFC.controls['total_price'].disable();
      this.billFC.controls['balance'].disable();
    }
    else{
      this.getLastInvNum();  
    }

  }
  
  checkTotal(){
    this.itemsFC.value.total = this.total = Number(this.itemsFC.value.price * this.itemsFC.value.quantity);    
  }

  loading = true;

  assigning(data) {
    this.billItems = data;
    this.calTotal();
    
    this.itemSource = new MatTableDataSource(this.billItems);
  }

  calTotal(){
    let count = 0;
    this.billItems.forEach(element => {
      count += element.total;
    });
    this.bilTotalPrice = count;
  }

  loadItems(elm) {
    this.loading = true;
    this.billItems = [];
    this.apiService.retrive('bitm', elm.id).subscribe(
      result => {
        this.assigning(result);
        this.loading = false;
      }
    );
    return elm;
  }


  bilOperation(data){
    this.billFC.value.bill_number = this.bilNumber;

    if (data) {
    console.log('update');
    
      this.apiService.update(data.id, this.billFC.value, 'bil').subscribe(
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
      this.apiService.create(this.billFC.value, 'bil').subscribe(
        (result: any) => {
          if (result.error) {
            console.log(result.error);
          }
          else {
            this.bill = result;
          }
        },
      );
    }
    
  }

  getLastInvNum() {    
    this.apiService.loadAll('last_bil').subscribe(
      result => {
        this.bilNumber = 'Bill-' + result.bill;
        this.billFC.controls['bill_number'].disable();
        this.billFC.controls['total_price'].disable();
        this.billFC.controls['balance'].disable();
      }
    );
  }

  createItem(){
    this.errors = null;
    this.itemsFC.value.bill = this.bill.id;

    this.apiService.create(this.itemsFC.value, 'bitm').subscribe(
      (result: any) => {
        if (result.error) {
          this.errors = result.error;          
        }
        else {
          this.billItems.push(result);
          console.log(this.billItems);
          
          this.calTotal();
          this.itemSource = new MatTableDataSource(this.billItems);          
          this.itemsFC.reset();
        }
      },
    );
  }
  removeItem(data){
    if (confirm('Are sure to delete?')) {
      this.apiService.delete(data.id, 'bitm').subscribe(
        result => {
          this.billItems = this.billItems.filter(item => item !== data);
          this.itemSource = new MatTableDataSource(this.billItems);
          this._snackBar.openFromComponent(SnakComponent, {
            duration: 2000,
          });
          this.calTotal();
        }
      );
    }
  }

  finishBill(bil){
    this.calTotal();
    this.billFC.value.total_price = this.bilTotalPrice;
    this.billFC.value.balance = this.bilTotalPrice;
    this.billFC.value.status = 1;    
    this.bilOperation(bil);
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