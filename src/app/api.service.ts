import { Injectable, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { MatPaginator, MatSort } from '@angular/material';
import { merge, throwError } from 'rxjs';
import { startWith, switchMap, map, catchError, retry } from 'rxjs/operators';
// import { SpinnerComponent } from './shared/spinner.component';



@Injectable({
  providedIn: "root"
})
export class ApiService {
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(
      private httpClient: HttpClient,
    private cookieService: CookieService,
    // private sp: SpinnerComponent,
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
  loadAll(entity, sort = '', order= '', page = '') {
      const href = 'http://localhost:8000';
      const requestUrl = `${href}/${entity}`;

      return this.httpClient.get<any>(requestUrl);

    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // return merge()
    //   .pipe(
    //     startWith({}),
    //     switchMap( data => {
    //       // this.isLoadingResults = true;
    //       return this.httpClient.get<any>(requestUrl);
    //     }),
    //     map(data => {
    //       // Flip flag to show that loading has finished.
    //       // this.isLoadingResults = false;
    //       // this.isRateLimitReached = false;
    //       // this.resultsLength = data.total_count;

    //       // return data.items;
    //       return data;
    //     }),
    //     catchError(data => {
    //       // this.isLoadingResults = false;
    //       // // Catch if the GitHub API has reached its rate limit. Return empty data.
    //       // this.isRateLimitReached = true;
    //       console.log(data);
          
    //       return data;
    //     })
    //   );


    // const data = this.httpClient.get(`${this.apiUrl + entity}/`, {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer " + this.cookieService.get('auth-token'),
    //   })
    // });
    // return data;
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

  // Delete item based on content type.
  create(data, type) {    

    return this.httpClient.post(`${this.apiUrl + type}/`, data, {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + this.cookieService.get('auth-token'),
      }),
    });
  }

  refreshToken() {
    var formdata = { "refresh": this.cookieService.get('refresh-token')};    
    const respData = this.httpClient.post(`${this.apiUrl}api/token/refresh/`, formdata, {
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
        console.log(error);
      }
    );
    return respData;
  }

}
