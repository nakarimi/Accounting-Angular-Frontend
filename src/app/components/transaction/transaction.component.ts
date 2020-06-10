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

  // Define all the variable
  displayedColumns: string[] = ['label', 'account', 'amount', 'payment'];

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
    this.loadInvoices();
  }

  loadInvoices() {
    this.apiService.loadAll('trs').subscribe(
      result => {
        this.dataSource.data = result;
        this.dataSource.sort = this.msort;
      },
      error => {
        console.log(error);
      }
    );
  }

}
