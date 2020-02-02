import { Component, OnInit, Inject, Input } from '@angular/core';
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
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  companyFormControl = new FormGroup({
    com_name: new FormControl(''),
    com_owner: new FormControl(''),
    com_phone: new FormControl(''),
    com_address: new FormControl(''),
    com_email: new FormControl(''),
    com_status: new FormControl(''),
  });
  CreateCompany(): void {
    
    this.apiService.createItem(this.companyFormControl.value, 'company').subscribe(
      result => {
        this.dialogRef.close();
      },
      error => {
        this.dialogRef.close();
        this.apiService.apiRespErrors(error)
      }
    );
  }


}
@Component({
  selector: 'company-tabs-dialog',
  templateUrl: 'company.tabs.html',
})
export class CompanyTabDialog {
  @Input() tabAction = true;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<CompanyTabDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  tabChanged(data): void{
    this.tabAction = data.tab.textLabel;
    
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
        this.dialogRef.close();
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
  openCompanyDialog() {
    const dialogRef = this.dialog.open(AddCompanyDialog, {
      data: { name: 'austin' },
    });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  openTabDialog(data) {
    const dialogRef = this.dialog.open(CompanyTabDialog, {
      data: data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



