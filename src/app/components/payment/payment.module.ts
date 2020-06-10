import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { MaterialModule } from '../../material-module';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


export const routes: Routes = [
  {
    path: '',
    component: PaymentComponent,
  },
  {
    path: 'add',
    component: AddComponent
  },

];

@NgModule({
  declarations: [
    PaymentComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentModule { }
