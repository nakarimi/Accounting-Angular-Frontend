import { Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvComponent } from '../inv/inv.component';

export const InvoiceRoutes: Routes = [
  {
    path: '',
    component: InvoiceComponent
  },
  {
    path: 'all',
    component: InvComponent
  }
];
