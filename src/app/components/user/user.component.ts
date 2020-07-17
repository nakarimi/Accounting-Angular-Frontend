import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef } from '@angular/material';
import { ToastService } from '../../shared/toast/toast-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // Define all the variable
  displayedColumns: string[] = ['username', 'email', 'first_name', 'last_name', 'is_active', 'date_joined', 'last_login', 'is_superuser'];

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
    public toast: ToastService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.checkPerm();
  }

  checkPerm() {
    this.apiService.loadAll('cuser').subscribe(
      result => {
        if (result[0].is_superuser) {
          this.loadUsers();
        }
        else {
          this.router.navigate(['/dashboard']);
          this.toast.show("Permission denied!", { classname: 'bg-danger text-light', delay: 5000 });
        }
      })
  }


  loadUsers() {
    this.apiService.loadAll('users').subscribe(
      (result: any) => {
        this.dataSource.data = result;
        this.dataSource.sort = this.msort;
        
      },
      error => {
        console.log(error);
      }
    );
  }

  switchSuperUser(data) {
    let msg;
    if (data.is_superuser) {
      msg = "Are you sure to revoke Superuser?"
    }
    else{
      msg = "Are you sure to make Superuser?"
    }
    if (confirm(msg)) {
      this.apiService.parUpdate(data.id, { 'is_superuser': !data.is_superuser}, 'users').subscribe(
        result => {
          this.toast.show('User updated successfully!',
            { classname: 'bg-info text-light', delay: 2500 }
          );
          this.updateTable(data, result);
        },
        error => {
          console.log(error);
        }
      );
    }
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
  openAddDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      maxWidth: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Do nothing on cancel and if it return value update table.
      if (result) {
        this.addToTable(result);
      }
    });
  }

}


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
})
export class AddUserComponent implements OnInit {

  regForm = this._formBuilder.group({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    conf_password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    first_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    is_superuser: new FormControl('',),
  }, { validator: [this.checkPasswords] });


  constructor(
    private apiService: ApiService,
    public toast: ToastService,
    public router: Router,
    public dialogRef: MatDialogRef<any>,
    private _formBuilder: FormBuilder,

    // @Inject(MAT_DIALOG_DATA) public dData: DialogData,
  ) { }

  ngOnInit() {
  }
  authentication() {
    this.apiService.registerUser(this.regForm.value).subscribe(
      result => {
        this.dialogRef.close(result);
      },
      error => console.error(error.name)
    );
  }

  checkPasswords(group: FormGroup) {

    let pass = group.controls.password;
    let confirmPass = group.controls.conf_password;
    return confirmPass.setErrors(
      pass.value !== confirmPass.value ? { notEquivalent: true } : null
    );
  }
  checkUsername() {
    let username = this.regForm.controls.username;
    let v = true;
    if(username.errors){
      v = !(username.errors.required || username.errors.maxlength || username.errors.minlength);
    }
    if (username.value && v) {

      let r = this.findThisUserData('username', username.value);
      return username.setErrors(
        r ? { custom: true } : null
      );
    }
    
  }

  checkEmail() {
    let email = this.regForm.controls.email;

    let v = true;
    if (email.errors) {
      v = !(email.errors.required || email.errors.email);
    }
    if (email.value && v) {

      let r = this.findThisUserData('email', email.value);
      return email.setErrors(
        r ? { custom: true } : null
      );

    }
  }

  findThisUserData(field, value){
    console.log(value);
    console.log(field);
    
    return true;
  }
}