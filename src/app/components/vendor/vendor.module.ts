import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent, AddDialog, EditDialog } from './vendor.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


export const VendorRoutes: Routes = [{
  path: '',
  component: VendorComponent
}];

@NgModule({
  declarations: [
    VendorComponent,
    AddDialog,
    EditDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(VendorRoutes)
  ],
  entryComponents: [
    AddDialog,
    EditDialog,
  ]
})
export class VendorModule { }
