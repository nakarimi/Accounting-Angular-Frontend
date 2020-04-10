import { Component, OnInit, Inject, Output, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatSort, MatPaginator } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { find, findIndex, startWith, switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { merge, Observable, of as observableOf } from 'rxjs';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements AfterViewInit {
  // Define all the variable
  displayedColumns: string[] = ['label', 'owner', 'phone', 'email', 'id'];
  exampleDatabase: ExampleHttpDatabase | null;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Output() customers: any

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private _httpClient: HttpClient,
  ) { }

  ngAfterViewInit() {
    this.apiService.loadAll('csmr').subscribe(
      result => {
        this.customers = result;
      },
      error => {
        this.apiService.refreshToken();
        // this.loadCustomers();
      }
    );
    // this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       return this.exampleDatabase!.getRepoIssues(
    //         this.sort.active, this.sort.direction, this.paginator.pageIndex);
    //     }),
    //     map(data => {
    //       // Flip flag to show that loading has finished.
    //       // this.isLoadingResults = false;
    //       // this.isRateLimitReached = false;
    //       this.resultsLength = data.total_count;

    //       return data.items;
    //     }),
    //     catchError(() => {
    //       // this.isLoadingResults = false;
    //       // // Catch if the GitHub API has reached its rate limit. Return empty data.
    //       // this.isRateLimitReached = true;
    //       return observableOf([]);
    //     })
    //   ).subscribe(data => this.customers = data);
  }

    // this.loadCustomers();
  // }



  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  // loadCustomers() {
  //   this.apiService.loadAll('csmr').subscribe(
  //     result => {
  //       this.customers = result;
  //     },
  //     error => {
  //       this.apiService.refreshToken();
  //       this.loadCustomers();
  //     }
  //   );
  // }
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



// =======================

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) { }

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}