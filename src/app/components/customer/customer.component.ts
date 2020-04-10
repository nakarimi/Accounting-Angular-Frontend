import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { find, findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // Define all the variable
  @Output() customers: any

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,

  ) { }

  ngOnInit() {
    this.loadCustomers();
  }
  loadCustomers() {
    this.apiService.loadAll('csmr').subscribe(
      result => {
        this.customers = result;
      },
      error => {
        this.apiService.refreshToken();
        this.loadCustomers();
      }
    );
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialog, {
      // maxHeight: '80%',
      // maxWidth: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openEditDialog(data) { 
    
    const dialogRef = this.dialog.open(EditDialog, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  delete(id){
    if (confirm('Are sure to delete?')) {
      this.apiService.delete(id, 'csmr').subscribe(
        result => {}
      );      
    }
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
    label: new FormControl(''),
    owner: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    status: new FormControl(''),
  });

  create(){
    console.log(this.customerFC.value);
    
    this.apiService.create(this.customerFC.value, 'csmr').subscribe(
      result => {
        this.dialogRef.close(result);
        console.log(result);

      },
      error => {
        // this.dialogRef.close();
        // this.apiService.apiRespErrors(error)
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
    label: new FormControl(''),
    owner: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
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
      result => {
        this.dialogRef.close(result);
      },
      error => {
        // this.dialogRef.close();
        // this.apiService.apiRespErrors(error)
      }
    );

  }
}