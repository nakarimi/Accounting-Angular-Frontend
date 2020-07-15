import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Output() accounts: any
  payments;
  // Define all the variable
  displayedColumns: string[] = ['type', 'account', 'amount', 'payment', 'created_at'];

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

  ) { }

  ngOnInit() {
    this.loadAccounts();
  }

  loadTransactions() {
    this.apiService.loadAll('trs').subscribe(
      (result: any) => {
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
        this.loadPayments();
      },
    );
  }

  loadPayments() {
    this.apiService.loadAll('pay').subscribe(
      result => {
        this.payments = result;
        this.loadTransactions();
      },
    );
  }

  findAccount(acid){
    return this.accounts.filter(x => x.id == acid)[0];
  }

  findPay(payid){
    return this.payments.filter(x => x.id == payid)[0].label;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    
  }
}
