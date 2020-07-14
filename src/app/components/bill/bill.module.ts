import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BillComponent, CuDialog, SnakComponent } from './bill.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


export const BillRoutes: Routes = [{
  path: '',
  component: BillComponent
}];

@NgModule({
  declarations: [
    BillComponent,
    CuDialog,
    SnakComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(BillRoutes)
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
export class BillModule { }
