import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  bills;
  vendors = [];
  invoices;
  customers = [];
  accounts = [];
  formStatus = true;
  availableAmount = 0;
  maxAmount = 0;
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

  paymentFC = new FormGroup({
    account: new FormControl('', Validators.required),
    label: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    ref_bill: new FormControl(''),
    ref_inv: new FormControl(''),
  });

  editData;
  constructor(
    private apiService: ApiService,

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
    this.availableAmount = 2000;
  }
  onSelectBill(data){
    this.maxAmount = 1000;
    if (this.maxAmount > this.availableAmount) {
      alert('Choose valueable account!');
    }    
  }
  onSetAmount(data){
    const AMOUNT = data.target.value;
    if (AMOUNT > this.maxAmount) {
      alert('Set Valid Amount!');
      this.formStatus = false;
    }else{
      this.formStatus = true;
    }
  }

  onResetForm(){
    this.editData = null;
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
    this.paymentFC.setValue({
      label: data.label,
      account: data.account,
      amount: data.amount,
      type: data.type,
      ref_bill: data.ref_bill,
      ref_inv: data.ref_inv,
    });

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
    if (data && data.id) {

      this.apiService.update(data.id, this.paymentFC.value, 'pay').subscribe(
        (result: any) => {
          if (result.error) {
            console.log(result.error);
          }
          else {
            console.log(result);
            
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
            console.log(result);
          }
        },
      );
    }

  }
}
