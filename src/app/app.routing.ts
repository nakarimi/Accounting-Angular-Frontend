import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./components/account/account.module')
          .then(m => m.AccountModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./components/customer/customer.module')
          .then(m => m.CustomerModule)
      },
      {
        path: 'vendor',
        loadChildren: () => import('./components/vendor/vendor.module')
          .then(m => m.VendorModule)
      },
      {
        path: 'invoice',
        loadChildren: () => import('./components/invoice/invoice.module')
          .then(m => m.InvoiceModule)
      },
      {
        path: 'bill',
        loadChildren: () => import('./components/bill/bill.module')
          .then(m => m.BillModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('./components/payment/payment.module')
          .then(m => m.PaymentModule)
      },
      {
        path: 'trans',
        loadChildren: () => import('./components/transaction/transaction.module')
          .then(m => m.TransactionModule)
      },
    ]
  }
];
