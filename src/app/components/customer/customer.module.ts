import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent, AddDialog, EditDialog } from './customer.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


export const CustomerRoutes: Routes = [{
  path: '',
  component: CustomerComponent
}];

@NgModule({
  declarations: [
    CustomerComponent,
    AddDialog,
    EditDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  entryComponents: [
    AddDialog,
    EditDialog,
  ]
})
export class CustomerModule { }
