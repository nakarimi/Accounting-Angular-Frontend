import { Component, OnInit, Input, Output, EventEmitter, Directive, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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

  regForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    
    // this.apiService.test().subscribe();
    // if (this.cookieService.check('auth-token')) {
    //   this.router.navigate(['/dashboard']);
    // }
  }

  authentication() {
    if (!this.loginAction) {
      this.apiService.registerUser(this.regForm.value).subscribe(
        result => {
          this.getTokenSubscriber();
        },
        error => console.error(error.name)
      );
    } else {
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
    console.log(this.loginAction);
    if (this.loginAction) {
      this.loginAction = false;
    } else {
      this.loginAction = true;
    }
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