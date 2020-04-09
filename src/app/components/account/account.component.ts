import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { find, findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // Define all the variable
  @Output() accounts: any

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
        this.accounts = result;
      },
      error => {
        this.apiService.refreshToken();
        this.loadAccounts();
      }
    );
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialog, {
      data: { name: 'austin' },
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
            
      console.log(this.accounts.find(3200));
    });
  }

  delete(id){
    if (confirm('Are sure to delete?')) {
      this.apiService.delete(id, 'acnt').subscribe(
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

  accountFC = new FormGroup({
    label: new FormControl(''),
    owner: new FormControl(''),
    balance: new FormControl(''),
    currency: new FormControl(''),
    desc: new FormControl(''),
    status: new FormControl(''),
  });

  createAcc(){
    console.log(this.accountFC.value);
    
    this.apiService.create(this.accountFC.value, 'acnt').subscribe(
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

  accountFC = new FormGroup({
    label: new FormControl(''),
    owner: new FormControl(''),
    balance: new FormControl(''),
    currency: new FormControl(''),
    desc: new FormControl(''),
    status: new FormControl(''),
  });
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
    });
    
  }
  updateAcc(data) {
    this.apiService.update(data.id, this.accountFC.value, 'acnt').subscribe(
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