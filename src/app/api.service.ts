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

  constructor(
      private httpClient: HttpClient,
      private cookieService: CookieService,
    ) {}
    
  apiUrl = "http://localhost:8000/";
  
  setApiHeader() {
    const accessToken = this.cookieService.get('auth-token');
    let headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": "Bearer " + accessToken,
    });
    return headers;
  }  
  getToken(authData) {
    const body = JSON.stringify(authData);
    const token = this.httpClient.post(`${this.apiUrl}api/token/`, body, {
      headers: this.setApiHeader()
    });
    return token;
  }

  registerUser(authData) {
    const body = JSON.stringify(authData);
    const user = this.httpClient.post(`${this.apiUrl}api/users/`, body, {
      headers: this.setApiHeader()
    });
    return user;
  }

  // Get all companies from backend.
  companyList() {
    const companies = this.httpClient.get(`${this.apiUrl}company/`, {
      headers: this.setApiHeader()
    });
    return companies;
  }
  // Delete item based on content type.
  deleteItem(id, type) {
    const resp = this.httpClient.delete(`${this.apiUrl}${type}/${id}/`, {
      headers: this.setApiHeader()
    });
    return resp;
  }

  test() {
    // const user = this.httpClient.get(`${this.apiUrl}api/test`, {
    //   headers: this.headers
    // });
    
    console.log("This is tested");
    // return user;
  }
}
