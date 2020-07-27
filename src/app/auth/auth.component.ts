import { Component, OnInit, Input, Output, EventEmitter, Directive, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastService } from '../shared/toast/toast-service';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() loginAction = true;
  message:any = '';
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  resetPassForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(8),
    Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
    ]),
  });

  forgotPassForm = new FormGroup({
    email: new FormControl('', Validators.email)
  });
  resetToken;

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private toast: ToastService

  ) { }

  ngOnInit() {
    // this.apiService.test().subscribe();
    // if (this.cookieService.check('auth-token')) {
    //   this.router.navigate(['/dashboard']);
    // }
  }

  authentication() {
    if (this.loginAction) {
      this.getTokenSubscriber();
    }
  }

  getTokenSubscriber() {
  this.message = '';
    this.apiService.getToken(this.authForm.value).subscribe(
      (result: TokenObj) => {
        if (result["access"] != 'undefined') {
          var date = new Date();
          // Set expiration time for the cookie.
          date.setTime(date.getTime() + 6000 * 1000);
          this.cookieService.set("auth-token", result["access"], date);
          date.setTime(date.getTime() + 60000 * 1000);
          this.cookieService.set("refresh-token", result["refresh"], date);  
          this._snackBar.openFromComponent(SnakComponent, {
            duration: 2000,
          });

          // this.message = {text: 'Logged In Successfully!', type: 'accent'};
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 2000);
        }
      },
      error => {
        let msg = '';
        if (error.error['password']) {
          msg = "Password: " + error.error['password'];
        }
        else if (error.error['username']) {
          msg = "Username: " + error.error['username'];          
        }
        
        this.message = {text: msg, type: 'danger'};
      }
    );
  }

  loginActionToggle() {
    if (this.loginAction) {
      this.loginAction = false;
    } else {
      this.loginAction = true;
    }
  }

  forgotPassword(){
    let data = this.forgotPassForm.value;

    let sendToken = this.http.post(`${environment.serverUrl}password-reset/` , data);
    sendToken.subscribe(
      result => {        
        let req = this.http.get<any>(`${environment.serverUrl}users/reset-token?email=` + data.email);
        req.subscribe(
          result => {
            this.resetToken = result;
          },
        ) 
      },
    ) 
  }

  resetforgotPassword(){
    let sendToken = this.http.post(`${environment.serverUrl}password-reset/confirm/`,
      {token: this.resetToken, password: this.resetPassForm.value.password});
    sendToken.subscribe(
      result => {
        this.loginAction = true;
        this.toast.show("Password changed, please login!", { classname: 'bg-success text-light', delay: 5000 });
      })

  }
}

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {
  private _autofocus;
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this._autofocus || typeof this._autofocus === "undefined")
      this.el.nativeElement.focus();      //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
  }

  @Input() set autofocus(condition: boolean) {
    this._autofocus = condition != false;
  }
}

@Component({
  selector: 'snack-bar-component-login',
  template: '<span>Logged in successfully!</span>',
  styles:[`
    span{
      style: white;
    }`
  ]
})
export class SnakComponent { }