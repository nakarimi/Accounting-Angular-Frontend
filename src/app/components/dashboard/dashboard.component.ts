import { Component } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { ApiService } from '../../api.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
	files: FileList;
	constructor(
		private apiService: ApiService,
		public matDialog: MatDialog
	){}
	selectFile(event) {
		this.files = event.target.files;
		console.log(this.files);
		
	}
	uploadFile() {
		
		let file: File = this.files[0];
		let formData: FormData = new FormData();
		formData.append('attachment', file, file.name);
		console.log(formData);
		
	}
}
