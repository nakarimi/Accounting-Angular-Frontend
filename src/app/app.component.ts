import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'accountingAng';
  perm = ["GUEST"];

  constructor(
    private cookieService: CookieService,
    private api: ApiService,
    public permServ: NgxPermissionsService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.api.loadAll('cuser').subscribe(
      result => {
        if (result[0].is_superuser) {
          this.perm = ["ADMIN"];
        }
        else{
          this.perm = ["EDITOR"];
        }
        this.permServ.loadPermissions(this.perm);
      }
    );
  }

  logoutUser() {
    this.cookieService.delete('auth-token');
    console.log('Logout Successfully!');
  }
}
