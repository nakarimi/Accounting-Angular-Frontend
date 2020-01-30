import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyComponent, AddCompanyDialog } from './company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

export const CompanyRoutes: Routes = [{
  path: '',
  component: CompanyComponent
}];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    RouterModule.forChild(CompanyRoutes)
  ],
  entryComponents: [
    AddCompanyDialog,
  ],
  declarations: [
    CompanyComponent,
    AddCompanyDialog
    // ModalComponent,
  ]
})
export class CompanyModule {}
