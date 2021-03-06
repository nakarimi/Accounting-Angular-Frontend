import { Component, OnInit, Inject, Output, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements AfterViewInit {
  filterCul = 'all';
  // Define all the variable
  displayedColumns: string[] = ['label', 'owner', 'phone', 'email', 'status', 'id'];
  filterColumns: string[] = ['label', 'owner', 'phone', 'email'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  
  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;

  @Output() customers: any

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngAfterViewInit() {
    this.loadCustomers();
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  loadCustomers() {
    this.apiService.loadAll('csmr').subscribe(
      (result: any) => {
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
      this.apiService.delete(row.id, 'csmr').subscribe(
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
    if (this.filterCul == 'all') {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    else{
      this.dataSource.filterPredicate = function(data:any, filter):boolean {
        filter = JSON.parse(filter);
        let term = filter[0];
        let key = filter[1];
        return data[key].toString().toLowerCase().includes(term);
      }
      this.dataSource.filter = JSON.stringify([filterValue.trim().toLowerCase(), this.filterCul]);
    }
  }

  filterCulChange(data){
    this.filterCul = data.value;
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

  customerFC = new FormGroup({
    label: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    owner: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    phone: new FormControl('', [Validators.required,
    Validators.pattern(/^(?=\D*\d).{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl(''),
  });

  create(){
    console.log(this.customerFC.value);
    
    this.apiService.create(this.customerFC.value, 'csmr').subscribe(
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

  customerFC = new FormGroup({
    label: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    owner: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    phone: new FormControl('', [Validators.required,
    Validators.pattern(/^(?=\D*\d).{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl(''),
  });

  ngOnInit(){

    // Assign Dialog data to new variable.
    // Because it return error when trying to get data.
    this.editData = this.data;
      
    this.customerFC.setValue({
      label: this.editData.label,
      owner: this.editData.owner,
      phone: this.editData.phone,
      email: this.editData.email,
      status: this.editData.status,
    });
    
  }
  update(data) {
    
    this.apiService.update(data.id, this.customerFC.value, 'csmr').subscribe(
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
