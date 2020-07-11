import { NgModule } from '@angular/core';
// import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// FullCalendarModule.registerPlugins([ // register FullCalendar plugins
//   dayGridPlugin,
//   interactionPlugin
// ]);


@NgModule({
  imports: [
    CommonModule,
    // FullCalendarModule,
    MaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
    
  ],
  declarations: [
    DashboardComponent,
  ],
  entryComponents: []
})
export class DashboardModule {}
