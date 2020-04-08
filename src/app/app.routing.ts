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
      }
    ]
  }
];
