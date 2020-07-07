import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastService } from '../../shared/toast/toast-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  bills;
  selectedCurr;
  vendors = [];
  invoices;
  customers = [];
  accounts = [];
  formStatus = true;
  availableAmount = 0;
  maxAmount = 0;
  payType = ['Income', 'Expense'];
  // Define all the variable
  displayedColumns: string[] = ['label', 'account', 'amount', 'type', 'ref_bill', 'ref_inv', 'id'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;
  

  // paymentFC = this._formBuilder.group({
  //   account: new FormControl('', Validators.required),
  //   label: new FormControl('', Validators.required),
  //   type: new FormControl('', Validators.required),
  //   amount: new FormControl('', [Validators.min(0), Validators.required]),
  //   ref_bill: new FormControl(''),
  //   ref_inv: new FormControl(''),
  // }, { validator: this.checkAmount })

  paymentFC = new FormGroup({
    account: new FormControl('', Validators.required),
    label: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.min(0), Validators.required]),
    ref_bill: new FormControl(''),
    ref_inv: new FormControl(''),
  });
  billInvAmpunt = 0;
  editData;
  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loadPayments();
    this.loadBills();
    this.loadInvoices();
    this.loadAccounts();
  }

  loadPayments() {
    this.apiService.loadAll('pay').subscribe(
      result => {
        this.dataSource.data = result;
        this.dataSource.sort = this.msort;
      },
      error => {
        console.log(error);
      }
    );
  }

  loadAccounts() {
    this.apiService.loadAll('acnt').subscribe(
      result => {
        this.accounts = result;
        console.log(this.accounts);
        
      },
      error => {
        console.log(error);
      }
    );
  }

  loadInvoices() {
    this.apiService.loadAll('inv').subscribe(
      result => {
        this.invoices = result;
        this.apiService.loadAll('csmr').subscribe(
          result => {
            result.forEach(element => {
              this.customers[element.id] = element; 
            });
            console.log(this.customers);
            
          },
        )
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelectAccount(data){
    let acc = this.accounts.filter(x => x.id == data.value)[0];
    this.selectedCurr = acc.currency;    
    // this.availableAmount = +2000;
  }
  onSelectBill(data){
    // this.maxAmount = +1000;
    // if (this.maxAmount > this.availableAmount) {
    //   alert('Choose valueable account!');
    // }    
  }
  onSetAmount(data){
    const AMOUNT = data.target.value;
    // if (AMOUNT > this.maxAmount) {
    //   alert('Set Valid Amount!');
    //   this.formStatus = false;
    // }else{
    //   this.formStatus = true;
    // }
  }

  onResetForm(){
    this.editData = null;
    this.payType = ['Income', 'Expense'];
    this.paymentFC.reset();
  }

  loadBills() {
    this.apiService.loadAll('bil').subscribe(
      result => {
        this.bills = result;
        this.apiService.loadAll('vdr').subscribe(
          result => {
            result.forEach(element => {
              this.vendors[element.id] = element;
            });
            console.log(this.vendors);
            
          },
        )
      },
      error => {
        console.log(error);
      }
    );
  }

  refrence = 'Bill Refrence'
  activeEdit(data){
    this.editData = data;
    this.payType = [data.type]
    this.paymentFC.setValue({
      label: data.label,
      account: data.account,
      amount: data.amount,
      type: data.type,
      ref_bill: data.ref_bill,
      ref_inv: data.ref_inv,
    });
    let acc = this.accounts.filter(x => x.id == data.account)[0];
    this.selectedCurr = acc.currency;
  }

  onSelectType(data){
    let defaultData = this.paymentFC.value;  
    this.paymentFC.setValue({
      type: defaultData.type,
      label: defaultData.label,
      account: defaultData.account,
      amount: 0,
      ref_bill: null,
      ref_inv: null,
    });
  }
  paymentOperation(data) {
    this.paymentFC.value.currency = this.selectedCurr;

    if (data && data.id) {

      this.apiService.update(data.id, this.paymentFC.value, 'pay').subscribe(
        (result: any) => {
          if (result.error) {
            console.log(result.error);
          }
          else {
            this.updateTable(data, result);
            this.toast.show('Payment updated successfully!',
              { classname: 'bg-success text-light', delay: 5000 }
            );            
          }
        },
      );
    }
    else {
      this.apiService.create(this.paymentFC.value, 'pay').subscribe(
        (result: any) => {
          if (result.error) {
            console.log(result.error);
          }
          else {
            this.addToTable(result);
            this.toast.show('New payment created successfully!',
              { classname: 'bg-success text-light', delay: 5000 }
            );
          }
        },
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
}
