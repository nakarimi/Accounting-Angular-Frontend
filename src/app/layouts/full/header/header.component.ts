import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit{

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  logOutUser() {
    this.cookieService.delete('auth-token');
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    if (!this.cookieService.check('auth-token')) {
      this.router.navigate(['/login']);
    }
  }
}
