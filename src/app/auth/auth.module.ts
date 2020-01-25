import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '../material-module';

const routes: Routes = [
  {path: 'login', component: AuthComponent}
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    FlexLayoutModule 
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    CookieService
  ]
})
export class AuthModule { }
