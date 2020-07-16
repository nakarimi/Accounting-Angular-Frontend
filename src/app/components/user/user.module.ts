import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent, AddUserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const UserRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },  
];

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    RouterModule.forChild(UserRoutes)
  ],
  entryComponents:[
    AddUserComponent
  ]
})
export class UserModule { }
