import { Component, OnInit, Inject, Output, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { find, findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // Define all the variable
  @Output() accounts: any

  // Define all the variable
  displayedColumns: string[] = ['label', 'owner', 'balance', 'status', 'desc', 'file', 'id'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.loadAccounts();
    
  }


  loadAccounts() {
    this.apiService.loadAll('acnt').subscribe(
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
      if (result) {
        this.updateTable(data, result);
      }
    });
  }

  // Delete Item From Server.
  delete(row) {
    if (confirm('Are sure to delete?')) {
      this.apiService.delete(row.id, 'acnt').subscribe(
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

  addToTable(data) {
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
  isFormValid: boolean = true;
  isNewFile: boolean = false;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  accountFC = new FormGroup({
    label: new FormControl(''),
    owner: new FormControl(''),
    balance: new FormControl(''),
    currency: new FormControl(''),
    desc: new FormControl(''),
    status: new FormControl(''),
    file: new FormControl(Validators.required),
  });
  fields = ['label', 'owner', 'balance', 'currency', 'desc', 'status', 'file'];

  onChangeFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type == 'image/jpeg' || file.type == 'image/png') {
        this.accountFC.get('file').setValue(file);
        this.isFormValid = true;
        this.isNewFile = true;
      } else {
        this.isFormValid = false;
        this.isNewFile = false;
      }
      
    }
  }

  createAcc() {
    let formData = this.formFieldData();
    
    this.apiService.create(formData, 'acnt').subscribe(
      (res) => {
        console.log(res);
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  formFieldData() {
    let formData = new FormData();
    this.fields.forEach(element => {
      if (element == "file") {
        if (this.isNewFile) {
          formData.append(element, this.accountFC.get(element).value);
        }
      }
      else {
        formData.append(element, this.accountFC.get(element).value);
      }
    });
    return formData;
  }

}

export interface DialogData { }
@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
})
export class EditDialog implements OnInit{
  
  editData : any;
  isFormValid: boolean = true;
  isNewFile: boolean = false;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  accountFC = new FormGroup({
    label: new FormControl(''),
    owner: new FormControl(''),
    balance: new FormControl(''),
    currency: new FormControl(''),
    desc: new FormControl(''),
    status: new FormControl(''),
    file: new FormControl(Validators.required),
  });
  fields = ['label', 'owner', 'balance', 'currency', 'desc', 'status', 'file'];

  ngOnInit(){

    // Assign Dialog data to new variable.
    // Because it return error when trying to get data.
    this.editData = this.data;
    this.accountFC.setValue({
      label: this.editData.label,
      owner: this.editData.owner,
      currency: this.editData.currency,
      balance: this.editData.balance,
      desc: this.editData.desc,
      status: this.editData.status,
      file: this.editData.file,
    });
    
  }

  onUpdateFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      
      if (file.type == 'image/jpeg' || file.type == 'image/png') {
        this.isFormValid = true;
        this.isNewFile = true;
        this.accountFC.get('file').setValue(file);
      } else {
        this.isFormValid = false;
        this.isNewFile = false;
      }

    }
  }

  updateAcc(data) {
    let formData = this.formFieldData();
    console.log(formData);
    
    this.apiService.update(data.id, formData, 'acnt').subscribe(
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
        // this.apiService.apiRespErrors(error)
      }
    );
  }
  removeFile(data) {

  }
  formFieldData() {
    let formData = new FormData();
    this.fields.forEach(element => {
      if (element == "file") {
        
        if (this.isNewFile) {
          formData.append(element, this.accountFC.get(element).value);
        }
      }
      else {
        formData.append(element, this.accountFC.get(element).value);
      }
    });
    return formData;
  }
}