import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent implements OnInit{
  apiUrl = environment.serverUrl;

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private api: ApiService,

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
  }

  goToUserProfile(){
    console.log('lkdsjfldskjfdsljfdslk');
    
    return this.api.loadAll('cuser').subscribe(
      result => {
        console.log(result);
        
      },
    );
  }
}
