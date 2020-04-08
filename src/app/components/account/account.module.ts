import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent, AddDialog, EditDialog } from './account.component';
import { MaterialModule } from '../../material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


export const AccountRoutes: Routes = [{
  path: '',
  component: AccountComponent
}];

@NgModule({
  declarations: [
    AccountComponent,
    AddDialog,
    EditDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AccountRoutes)
  ],
  entryComponents: [
    AddDialog,
    EditDialog,
  ]
})
export class AccountModule { }
