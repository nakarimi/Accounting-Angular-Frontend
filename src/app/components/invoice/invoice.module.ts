import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent, AddDialog, EditDialog } from './invoice.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


export const InvoiceRoutes: Routes = [{
  path: '',
  component: InvoiceComponent
}];

@NgModule({
  declarations: [
    InvoiceComponent,
    AddDialog,
    EditDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(InvoiceRoutes)
  ],
  entryComponents: [
    AddDialog,
    EditDialog,
  ]
})
export class InvoiceModule { }
