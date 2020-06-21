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
import { ToastService } from './shared/toast/toast-service';
import { MatDialogRef } from '@angular/material';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private apiService: ApiService,
    private toast: ToastService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        let hRMsg = '';
        // this.dialogRef.close()
        
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
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            // window.alert(errorMessage);
          }
          for (var key in error.error) {
            hRMsg = error.error[key];
          }
          
          this.toast.show('Something wrong, please try again!', { classname: 'bg-danger text-light', delay: 5000});
          return throwError(errorMessage);
        }
      ),
    )
  }
}