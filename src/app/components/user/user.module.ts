import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material-module';


export const UserRoutes: Routes = [{
  path: '',
  component: UserComponent
}];

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
