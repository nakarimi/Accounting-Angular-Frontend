import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent, AddDialog, EditDialog } from './members.component';
import { MaterialModule } from '../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const routes: Routes = [{
  path: '',
  component: MembersComponent
}];


@NgModule({
  declarations: [
    MembersComponent,
    AddDialog,
    EditDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddDialog,
    EditDialog,
  ]
})

export class MembersModule { }
