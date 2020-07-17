import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { MatPaginator, MatSort } from '@angular/material';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';



@Injectable({
  providedIn: "root"
})
export class ApiService {
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(
      private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    // private sp: SpinnerComponent,
    ) {}
    
  apiUrl = environment.serverUrl;

  getToken(authData) {
    const body = JSON.stringify(authData);
    const token = this.httpClient.post(`${this.apiUrl}token/`, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    });
    return token;
  }

  registerUser(authData) {
    const body = JSON.stringify(authData);
    let h;
    h = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      })
    }
    const user = this.httpClient.post(`${this.apiUrl}users/`, body, h);
    return user;
  }

  // Get all companies from backend.
  loadAll(entity, sort = '', order= '', page = '') {
    const requestUrl = `${this.apiUrl}${entity}/`;
    let h;
    h = {
      headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      })
    }
    return this.httpClient.get<any>(requestUrl, h);
  }
  // Delete item based on content type.
  delete(id, type) {
    const resp = this.httpClient.delete(`${this.apiUrl}${type}/${id}/`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      }),
      'responseType': 'text'
    });
    return resp;
  }
  // Delete item based on content type.
  update(id, data, type) {

    return this.httpClient.put(`${this.apiUrl + type}/${id}/`, data, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      }),
    });
  }

  parUpdate(id, data, type) {

    return this.httpClient.patch(`${this.apiUrl + type}/${id}/`, data, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      }),
    });
  }

  // Delete item based on content type.
  create(data, type) {    

    return this.httpClient.post(`${this.apiUrl + type}/`, data, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      }),
    });
  }

  retrive(entity, id){
    const requestUrl = `${this.apiUrl}${entity}?entity_id=${id}`;
    return this.httpClient.get<any>(requestUrl);
  }

  refreshToken() {
    var formdata = { "refresh": this.cookieService.get('refresh-token')};    
    const respData = this.httpClient.post(`${this.apiUrl}token/refresh/`, formdata, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
    respData.subscribe(
      result => {
        // Update the access token again.
        var date = new Date();
        date.setTime(date.getTime() + 600 * 1000);
        this.cookieService.set("auth-token", result["access"], date);
      },
      error => {
        this.router.navigate(['/login']);
      }
    );
    return respData;
  }

}
