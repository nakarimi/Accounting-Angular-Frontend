import { Component, OnInit, Inject, Output, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { find, findIndex } from 'rxjs/operators';
import { ToastService } from '../../shared/toast/toast-service';
import { ChartOptions } from 'ng-chartist';
import { Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { TransactionComponent } from '../transaction/transaction.component';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  serverDomain = environment.serverDomain;
  filterCul = 'all';
  // Define all the variable
  @Output() accounts: any

  // Define all the variable
  displayedColumns: string[] = ['label', 'owner', 'balance', 'status', 'desc', 'file', 'id'];
  filterColumns: string[] = ['label', 'owner', 'balance', 'desc'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;

  // Pie
  singleDataSet = [];
  labels = [];
  singleDataSetAf = [];
  labelsAf = [];
  owners:any;
  public pieChartOptions: ChartOptions = {
    // responsive: true,
  };
  public pieChartColors: Array<any> = [{
    backgroundColor: ["#FFCC99", "#FFCC66", "#CC9999", "#CC99CC", "#CCFF00", "#FF66FF", "#FF66CC", "#CC3300", "#CC3333", "#CCFFCC", "#CCFFFF", "#FF9999", "#FF9966", "#CC6633", "#CC6666", "#FFFF66", "#FFFF33", "#FFFF00", "#CCCC99", "#CCCCCC", "#FF33FF", "#FF33CC", "#FF3300", "#CC0000", "#CC00CC", "#CC00FF", "#FF0033" ],
  }];
  public pieChartLabels: Label[] = this.labels;
  public pieChartData: SingleDataSet = this.singleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPercentage = true;
  public pieChartPlugins = [];


  public pieChartAfOptions: ChartOptions = {
    // responsive: true,
  };
  public pieChartAfColors: Array<any> = [{
    backgroundColor: ["#009999", "#339900", "#339999", "#330000", "#009966", "#CCCCCC", "#33CC66", "#FF33CC", "#FF3300", "#CC0000", "#CC00CC", "#CC00FF", "#FF0033"],
  }];
  public pieChartAfLabels: Label[] = this.labelsAf;
  public pieChartAfData: SingleDataSet = this.singleDataSetAf;
  public pieChartAfType: ChartType = 'pie';
  public pieChartAfLegend = true;
  public pieChartAfPlugins = [];
  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private toast: ToastService,
    private router: Router
  ) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.loadMembers();
    this.checkPerm();
  }

  checkPerm() {
    this.apiService.loadAll('cuser').subscribe(
      result => {
        if (result[0].is_superuser) {
          this.loadAccounts();
        }
        else {
          this.router.navigate(['/dashboard']);
          this.toast.show("Permission denied!", { classname: 'bg-danger text-light', delay: 5000 });
        }
      })
  }

  loadAccounts() {
    this.apiService.loadAll('acnt').subscribe(
      (result: any) => {
        result.forEach(e => {
          e.owner = this.findOwnerName(e.owner);
          
          this.addToTable(e);
          if (e.currency == "USD") {
            this.labels.push(e.label);
            this.singleDataSet.push(e.balance);
          }
          else{
            this.labelsAf.push(e.label);
            this.singleDataSetAf.push(e.balance);

          }
        });
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
    this.apiService.loadAll('pay').subscribe(
      result => {
        let pays: any = result;
        if (pays.filter(x => x.account == row.id).length > 0) {
          this.toast.show("Delete not allowed for this Account!\nThis Account has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
        }
        else{
          if (confirm('Are sure to delete?')) {
            this.apiService.delete(row.id, 'acnt').subscribe(
              result => {
                this.deleteUI(row);
                this.toast.show('Account deleted successfully!',
                  { classname: 'bg-warning text-light', delay: 5000 }	
                );
              }
            );
          }
        }
      }
    )
  }
  loadMembers() {
    this.apiService.loadAll('memb').subscribe(
      (result: any) => {
        this.owners = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  findOwnerName(owner){
    let o = this.owners.filter(x => x.id == owner)[0];
    if (o) {
      return o.first_name +' '+ o.last_name;
    }
    else{
      return '';
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
    if (this.filterCul == 'all') {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    else{
      this.dataSource.filterPredicate = function(data:any, filter):boolean {
        filter = JSON.parse(filter);
        let term = filter[0];
        let key = filter[1];
        console.log(data[key]);
        
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
  isFormValid: boolean = true;
  isNewFile: boolean = false;
  apiErr;
  owners;
  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.loadMembers();
  }
  loadMembers() {
    this.apiService.loadAll('memb').subscribe(
      (result: any) => {
        this.owners = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  accountFC = new FormGroup({
    label: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
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
      (result: any) => {
        if (result.error) {
        }
        else {
          this.toast.show('New account created successfully!',
            { classname: 'bg-success text-light', delay: 5000 }
          );
          this.dialogRef.close(result);
        }
        
      },
      (err) => {
        this.apiErr = err.error;
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

  apiErr;
  owners;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { 
    this.loadMembers();
  }
  loadMembers() {
    this.apiService.loadAll('memb').subscribe(
      (result: any) => {
        this.owners = result;
      },
      error => {
        console.log(error);
      }
    );
  }
  accountFC = new FormGroup({
    label: new FormControl(''),
    owner: new FormControl(''),
    balance: new FormControl({ value: '', disabled: true }),
    currency: new FormControl({ value: '', disabled: true }),
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
          console.log(result);
          
          this.apiErr = result.error;
        }
        else {
          this.dialogRef.close(result);
        }
      },
      error => {
        if(error.status == 400){
          this.apiErr = error.error;
        }
        if (error.status == 401) {
          this.dialogRef.close();
        }
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

