import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { MaterialModule } from '../../material-module';
import { NgxPermissionsModule } from 'ngx-permissions';


export const routes: Routes = [{
  path: '',
  component: TransactionComponent
}];

@NgModule({
  declarations: [
    TransactionComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    NgxPermissionsModule
  ]
})
export class TransactionModule { }
