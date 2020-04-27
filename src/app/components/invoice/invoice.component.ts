import { Component, OnInit, Inject, Output, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements AfterViewInit {

  // Define all the variable
  displayedColumns: string[] = [
    'inv_number',
    'items',
    'customer',
    'total_price',
    'balance',
    'due_date',
    'status',
    'id'
  ];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  
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
      // maxHeight: '80%',
      // maxWidth: '80%',
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
      data: data,
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
export class AddDialog {

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
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

  create(){
    console.log(this.invoiceFC.value);
    
    this.apiService.create(this.invoiceFC.value, 'inv').subscribe(
      (result: any) => {
        if (result.error) {
          console.log(result.error);
        }
        else {
          this.dialogRef.close(result);
        }
      },
      error => {
        // this.dialogRef.close();
      }
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData
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

  ngOnInit(){

    // Assign Dialog data to new variable.
    // Because it return error when trying to get data.
    this.editData = this.data;
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
