import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      // 按鈕頁面
      {
        path: 'button-demo',
        loadComponent: () => import('./pages/button-page/button-page').then((m) => m.ButtonPage),
      },
      {
        path: 'input-demo',
        loadComponent: () => import('./pages/input-page/input-page').then((m) => m.InputPage),
      },
      {
        path: 'dashboard-demo',
        loadComponent: () =>
          import('./pages/dashboard-page/dashboard-page').then((m) => m.DashboardPage),
      },
    ],
  },
];
