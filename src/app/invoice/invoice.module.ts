import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvComponent } from '../inv/inv.component';
import { InvoiceRoutes } from './invoice.routing';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(InvoiceRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class InvoiceModule { }
