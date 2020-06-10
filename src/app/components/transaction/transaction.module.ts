import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { MaterialModule } from '../../material-module';


export const routes: Routes = [{
  path: '',
  component: TransactionComponent
}];

@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class TransactionModule { }
