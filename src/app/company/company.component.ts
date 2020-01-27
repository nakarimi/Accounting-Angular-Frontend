import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './company.tabs.html',
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  companyFormControl = new FormGroup({
    com_name: new FormControl(''),
    com_owner: new FormControl(''),
    com_phone: new FormControl(''),
    com_address: new FormControl(''),
    com_email: new FormControl(''),
    com_status: new FormControl(''),
  });

  UpdateCompany(data): void {
    this.apiService.updateItem(data, 'company').subscribe(
      result => {
        this.dialogRef.close();
      },
      error => {
        this.dialogRef.close();
        this.apiService.apiRespErrors(error)
      }
    );

    
  }

  deleteSelectedItem(id): void {

    this.apiService.deleteItem(id, 'company').subscribe(
      result => {
        console.log(result);

      },
      error => {
        console.log(error);
      }
    );
  }
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  apiUrl = "http://localhost:8000/";

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private router: Router,
  ) { }
  companies: any

  ngOnInit() {
    this.apiService.companyList().subscribe(
      result => {
        this.companies = result;
        console.log(this.companies);
        
      },
      error => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '80%',
      height: '80vh',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

