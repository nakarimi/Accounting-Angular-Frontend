import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accountingAng';

  constructor(
    private cookieService: CookieService,
  ) { }

  logoutUser() {
    this.cookieService.delete('auth-token');
    console.log('Logout Successfully!');
  }
}
