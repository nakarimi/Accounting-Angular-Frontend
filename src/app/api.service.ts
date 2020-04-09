import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
      private httpClient: HttpClient,
      private cookieService: CookieService,
    ) {}
    
  apiUrl = "http://localhost:8000/";  

  getToken(authData) {
    const body = JSON.stringify(authData);
    const token = this.httpClient.post(`${this.apiUrl}api/token/`, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    });
    return token;
  }

  registerUser(authData) {
    const body = JSON.stringify(authData);
    const user = this.httpClient.post(`${this.apiUrl}api/users/`, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    });
    return user;
  }

  // Get all companies from backend.
  loadAll(entity) {
    const data = this.httpClient.get(`${this.apiUrl + entity}/`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      })
    });
    return data;
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
    console.log(data);
    
    const resp = this.httpClient.put(`${this.apiUrl + type}/${id}/`, data, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      }),
    });
    return resp;
  }

  // Delete item based on content type.
  create(data, type) {
    const resp = this.httpClient.post(`${this.apiUrl + type}/`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      }),
    });
    return resp;
  }

  refreshToken() {
    var formdata = { "refresh": this.cookieService.get('refresh-token')};    
    this.httpClient.post(`${this.apiUrl}api/token/refresh/`, formdata, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).subscribe(
      result => {
        // Update the access token again.
        var date = new Date();
        date.setTime(date.getTime() + 600 * 1000);
        this.cookieService.set("auth-token", result["access"], date);
      },
      error => {
        console.log(error);
      }
    );

  }
}
