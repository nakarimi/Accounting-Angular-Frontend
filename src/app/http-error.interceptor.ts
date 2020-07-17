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
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {        
        let errorMessage = '';
        let hRMsg = '';        
        if (error.status == 400) {
          if(error.error){
            error.error.password.forEach(element => {
              hRMsg = element;
              console.log(element);
              
            });
          }
        }
        else if (error.status == 401) {
          if (request.method == "GET") {
            this.router.navigate(['/login']);
            hRMsg = 'Session expired, please login!';
          }else{
            hRMsg = 'Unauthorized, use valid username and password!';
          }
       
          // this.apiService.refreshToken().subscribe(
          //   result => {
          //     // return next.handle()

          //     // Update the access token again.
          //     // var date = new Date();
          //     // date.setTime(date.getTime() + 600 * 1000);
          //     // this.cookieService.set("auth-token", result["access"], date);
          //     },
          //     error => {
          //       console.log(error);
          //     }
          //   );
        } 
        else if (error.status == 403) {
          this.router.navigate(['/login']);
          hRMsg = 'Session expired, please login!';
        } 
        else if (error.status == 0) {            
          hRMsg = 'Server down, try later!';
        }
        else if (error.status != 200){
            if (error){
                if (error.error instanceof ErrorEvent) {
                  errorMessage = `Error: ${error.error.message}`;
                  console.log(errorMessage);
                  
                } 
              if (error.error) {
                  // server-side error
                  // error.error.forEach(element => {
                  //   console.log(element);
                    
                  // });
                  errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
                  console.log(errorMessage);
                }
                hRMsg = 'Something wrong, please try again!';
              }
          }
        // this.toast.remove;
          this.toast.show(hRMsg, { classname: 'bg-danger text-light', delay: 5000 });
          return throwError(error);
        }
      ),
    )
  }
}