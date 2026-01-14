import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'button-demo',
        loadComponent: () => import('./pages/button-page/button-page').then((m) => m.ButtonPage),
      },
    ],
  },
];
