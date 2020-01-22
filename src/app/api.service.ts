import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  // apiUrl = 'http://localhost:8000/';
  // headers = new HttpHeaders({
  //   'Content-type': 'application/json',
  // });

  apiUrl = "http://localhost:8000/";
  accessToken = this.cookieService.get('auth-token');
  headers = new HttpHeaders({
    "Content-type": "application/json",
    "Authorization": "Bearer " + this.accessToken,
  });

  constructor(
      private httpClient: HttpClient,
      private cookieService: CookieService,
    ) {}

  getToken(authData) {
    const body = JSON.stringify(authData);
    const token = this.httpClient.post(`${this.apiUrl}api/token/`, body, {
      headers: this.headers
    });
    return token;
  }

  registerUser(authData) {
    const body = JSON.stringify(authData);
    const user = this.httpClient.post(`${this.apiUrl}api/users/`, body, {
      headers: this.headers
    });
    return user;
  }
  test() {
    const user = this.httpClient.get(`${this.apiUrl}api/test`, {
      headers: this.headers
    });
    
    console.log(user);
    return user;
  }
}
