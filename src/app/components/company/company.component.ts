import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';


export interface DialogData {}

@Component({
  selector: 'add-company-dialog',
  templateUrl: 'add-company-dialog.html',
})
export class AddCompanyDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
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
  openCompanyDialog() {
    const dialogRef = this.dialog.open(AddCompanyDialog, {
      data: { name: 'austin' },
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}



