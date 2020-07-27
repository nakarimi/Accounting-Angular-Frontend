import { Component, OnInit, Output, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ApiService } from '../../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  // Define all the variable
  displayedColumns: string[] = ['first_name', 'last_name', 'phone', 'email', 'posistion', 'id'];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  // Build the table data source based on table data.
  tableData: any = [];
  dataSource = new MatTableDataSource(this.tableData);

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;

  @Output() members: any

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.loadMembers();
  }
  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  loadMembers() {
    this.apiService.loadAll('memb').subscribe(
      (result: any) => {
        this.dataSource.data = result;
        this.dataSource.sort = this.msort;
      },
      error => {
        console.log(error);
      }
    );
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialog, {
      maxWidth: '500px',
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
      maxWidth: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateTable(data, result);
      }
    });
  }

  // Delete Item From Server.
  delete(row) {
    if (confirm('Are sure to delete?')) {
      this.apiService.delete(row.id, 'memb').subscribe(
        result => {
          this.deleteUI(row);
        }
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
    this.tableData = this.tableData.filter(item => item.id != oldRow.id);

    // Add update row.
    this.tableData.push(newRow);
    this.dataSource = new MatTableDataSource<any>(this.tableData);
    this.dataSource.sort = this.msort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  memberFC = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    phone: new FormControl('', [Validators.required, 
      Validators.pattern(/^(?=\D*\d).{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    posistion: new FormControl('', Validators.required),
  });

  create() {
    this.apiService.create(this.memberFC.value, 'memb').subscribe(
      (result: any) => {
        if (result.error) {
          console.log(result.error);
        }
        else {
          this.dialogRef.close(result);
        }
      },
      error => {
        // this.dialogRef.close();
      }
    );

  }
}

export interface DialogData { }
@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
})

export class EditDialog implements OnInit {

  editData: any
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  memberFC = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    phone: new FormControl('', [Validators.required,
    Validators.pattern(/^(?=\D*\d).{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    posistion: new FormControl('', Validators.required),
  });


  ngOnInit() {

    // Assign Dialog data to new variable.
    // Because it return error when trying to get data.
    this.editData = this.data;

    this.memberFC.setValue({
      first_name: this.editData.first_name,
      last_name: this.editData.last_name,
      phone: this.editData.phone,
      email: this.editData.email,
      posistion: this.editData.posistion,
    });

  }
  update(data) {

    this.apiService.update(data.id, this.memberFC.value, 'memb').subscribe(
      (result: any) => {
        if (result.error) {
          console.log(result.error);
        }
        else {
          this.dialogRef.close(result);
        }
      },
      error => {
        // this.dialogRef.close();
      }
    );

  }
}