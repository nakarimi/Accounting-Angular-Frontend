import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
  message: any;
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit() {
    const tokenOfUser = this.cookieService.get('auth-token');
    
    if (tokenOfUser) {
      this.router.navigate(['/dashboard']);
    }
  }

  authentication() {
    if (!this.loginAction) {
      this.apiService.registerUser(this.authForm.value).subscribe(
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
    this.apiService.getToken(this.authForm.value).subscribe(
      (result: TokenObj) => {
        this.cookieService.set('auth-token', result.token);
        this.message = {text: 'Logged In Successfully! ' + result.token, type: 'success'};
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
      }, 1000);
      },
      error => {
        this.message = {text: error.message, type: 'danger'};
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
