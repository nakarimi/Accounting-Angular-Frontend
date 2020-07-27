import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxPermissionsService } from 'ngx-permissions';
import { ToastService } from '../../../shared/toast/toast-service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit{
  apiUrl = environment.serverUrl;
  matcher = new MyErrorStateMatcher();
  passChange = false;
  perm;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private api: ApiService,
    public dialog: MatDialog,
    private permServ: NgxPermissionsService
  ) { }

  logOutUser() {
    this.cookieService.delete('auth-token');
    this.cookieService.delete('refresh-token');
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    if (!this.cookieService.check('refresh-token')) {
      this.router.navigate(['/login']);
    }
    else{
      this.api.loadAll('cuser').subscribe(
        result => {
          if (result[0].is_superuser) {
            this.perm = ["ADMIN"];
          }
          else {
            this.perm = ["EDITOR"];
          }
          this.permServ.loadPermissions(this.perm);
        })
    }
  }
  goToUserProfile(data) {
    this.passChange = data;

    const dialogRef = this.dialog.open(ProfileDialog, {
      data: {
        mainData: [],
        customer: [],
        type: data
      },
      maxHeight: '70vh',
      maxWidth: '600px',
    });
    
  }
}

export interface DialogData { }

@Component({
  selector: 'profile-dialog',
  templateUrl: 'profile.component.html',
})
export class ProfileDialog implements OnInit {
  perm = ["GUEST"];

  apiUrl = environment.serverUrl;
  matchPass:boolean = true;
  constructor(
    private api: ApiService,
    private http: HttpClient,
    private cookie: CookieService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public dData: DialogData,
    private _formBuilder: FormBuilder,
    public permServ: NgxPermissionsService,
    private toast: ToastService,
    private router: Router,
  ) { }

  profileFC = this._formBuilder.group({
    username: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
    email: ['', [Validators.email, Validators.required]],
    first_name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
    oldpassword: ['',],
    password: ['',],
    confirmPassword: ['',],
  }); 
  chPassFC = this._formBuilder.group({
    username: ['',],
    email: ['',],
    first_name: ['',],
    last_name: ['',],
    oldpassword: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(8),
      Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
    ]],
    confirmPassword: ['', [Validators.required]],
  }, { validator: this.checkPasswords });

  editData;
  ngOnInit() {
    this.api.loadAll('cuser').subscribe(
      result => {
        console.log(result);
        
        if (result[0].is_superuser) {
          this.perm = ["ADMIN"];
        }
        else {
          this.perm = ["EDITOR"];
        }
        this.permServ.loadPermissions(this.perm);

        this.profileFC.setValue({
          username: result[0].username,
          email: result[0].email,
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          oldpassword: null,
          password: null,
          confirmPassword: null,
        })
        this.chPassFC.setValue({
          username: result[0].username,
          email: result[0].email,
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          oldpassword: null,
          password: null,
          confirmPassword: null,
        })
        
      },
      error => {
        this.dialogRef.close(error);
      }
    );
  }

  profileOperation() {
    let data:any;
    let tmp:any = this.dData;
    if(tmp.type){
      data = this.chPassFC.value;
    } else {
      data = this.profileFC.value;
    }    
    if (data) {
      let req = this.http.post(`${this.apiUrl}users/update/`, data, {
        headers: new HttpHeaders({
          "Authorization": "Bearer " + this.cookie.get('auth-token'),
        }),
      });
  
      req.subscribe(
        result => {
          this.toast.show("User updated.", { classname: 'bg-success text-light', delay: 5000 });
          let dialog:any = this.dData;
          if (dialog.type) {
            this.cookie.delete('auth-token');
            this.router.navigate(['/login']);
          }
          this.dialogRef.close();
        },
      )      
    }
  }
  checkPasswords(group: FormGroup){
    
    let pass = group.controls.password;
    let confirmPass = group.controls.confirmPassword;
    return confirmPass.setErrors(
      pass.value !== confirmPass.value ? { notEquivalent: true } : null
    );
  }

}