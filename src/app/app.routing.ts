import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: 'dashboard',
        // component: DashboardComponent,
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
      {
        path: 'user',
        loadChildren: () => import('./components/user/user.module')
          .then(m => m.UserModule)
      },
      {
        path: 'members',
        loadChildren: () => import('./components/members/members.module')
          .then(m => m.MembersModule)
      },

    ]
  }
];
