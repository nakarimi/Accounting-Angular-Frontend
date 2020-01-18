import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8000/';
  headers = new HttpHeaders({
    'Content-type': 'application/json',
  });

  constructor(
    private httpClient: HttpClient,
  ) { }

  getToken(authData) {
    const body = JSON.stringify(authData);
    const token = this.httpClient.post(`${this.apiUrl}auth/`, body, {headers: this.headers});
    return token;
  }

  registerUser(authData) {
    const body = JSON.stringify(authData);
    const user = this.httpClient.post(`${this.apiUrl}api/users/`, body, {headers: this.headers});
    return user;
  }

}
