import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UploadService } from '../../upload.service';


/**
 * @title Table with sorting
 */

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
	DJANGO_SERVER = 'http://127.0.0.1:8000'
	// form: FormGroup;
	response;
	fileUrl;

	constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

	fields = ['label', 'file', 'owner', 'balance', 'currency', 'desc', 'status'];
	form = new FormGroup({
		label: new FormControl(''),
		owner: new FormControl(''),
		balance: new FormControl(''),
		currency: new FormControl(''),
		desc: new FormControl(''),
		status: new FormControl(''),
		file: new FormControl(''),
	});
	ngOnInit() {
	}

	onChangeFile(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];			
			this.form.get('file').setValue(file);
		}
	}

	onSubmit() {
		const formData = new FormData();
		this.fields.forEach(element => {
			formData.append(element, this.form.get(element).value);
		});
		this.uploadService.upload(formData).subscribe(
			(res) => {
				this.response = res;
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
