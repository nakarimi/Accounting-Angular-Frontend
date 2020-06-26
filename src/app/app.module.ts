
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS , HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent, ProfileDialog } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthModule } from './auth/auth.module';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { TransactionComponent } from './components/transaction/transaction.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserComponent } from './components/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './shared/toast/toasts-container.component';
import { NgbdToastGlobalModule } from './shared/toast/toast-global.module';
import { NgbdToastGlobal } from './shared/toast/toast-global.component';
import { AccountModule } from './components/account/account.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'}
];
@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    NgbdToastGlobal,
    ToastsContainer,
    ProfileDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    AuthModule, 
    RouterModule.forRoot(AppRoutes),
    RouterModule.forRoot(routes),
    NgbModule,
    NgbdToastGlobalModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ProfileDialog,
  ]
})
export class AppModule {}
