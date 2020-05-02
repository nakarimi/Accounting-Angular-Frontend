import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private apiService: ApiService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          
          if (error.status == 401) {            
            this.apiService.refreshToken().subscribe(
              result => {
                return next.handle(request)

                // Update the access token again.
                // var date = new Date();
                // date.setTime(date.getTime() + 600 * 1000);
                // this.cookieService.set("auth-token", result["access"], date);
              },
              error => {
                console.log(error);
              }
            );
          }
          else{
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            // window.alert(errorMessage);
          }
          return throwError(errorMessage);
        }
      ),
    )
  }
}