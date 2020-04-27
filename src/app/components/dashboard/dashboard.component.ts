import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
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
	form: FormGroup;
	response;
	imageURL;

	constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

	ngOnInit() {
		this.form = this.formBuilder.group({
			profile: ['']
		});
	}

	onChange(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.form.get('profile').setValue(file);
		}
	}

	onSubmit() {
		const formData = new FormData();
		formData.append('file', this.form.get('profile').value);

		this.uploadService.upload(formData).subscribe(
			(res) => {
				this.response = res;
				this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
				console.log(res);
				console.log(this.imageURL);
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
