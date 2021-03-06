import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent, AddDialog, EditDialog,  } from './account.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';


export const AccountRoutes: Routes = [{
  path: '',
  component: AccountComponent
}];

@NgModule({
  declarations: [
    AccountComponent,
    AddDialog,
    EditDialog,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ChartistModule,
    ChartsModule,
    RouterModule.forChild(AccountRoutes)
  ],
  entryComponents: [
    AddDialog,
    EditDialog,
  ],
  exports: [],
  bootstrap: []
})
export class AccountModule { }
