import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent, SnakComponent } from './auth.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '../material-module';

const routes: Routes = [
  {path: 'login', component: AuthComponent}
];

@NgModule({
  declarations: [AuthComponent, SnakComponent],
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
  ], 
  entryComponents:[
    SnakComponent
  ]
})
export class AuthModule { }
