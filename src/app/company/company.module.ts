import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompanyComponent, DialogOverviewExampleDialogComponent } from './company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    RouterModule.forChild(CompanyRoutes)
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    CompanyComponent,
    DialogOverviewExampleDialogComponent
  ]
})
export class CompanyModule {}
