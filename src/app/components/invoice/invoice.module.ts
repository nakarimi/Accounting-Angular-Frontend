import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent, CuDialog, SnakComponent } from './invoice.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


export const InvoiceRoutes: Routes = [{
  path: '',
  component: InvoiceComponent
}];

@NgModule({
  declarations: [
    InvoiceComponent,
    CuDialog,
    SnakComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(InvoiceRoutes)
  ],
  entryComponents: [
    CuDialog,
    SnakComponent
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ]
})
export class InvoiceModule { }
