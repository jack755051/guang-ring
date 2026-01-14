// projects/design-system-docs/src/app/configs/menu.config.ts
import { SidebarConfig } from '../layouts/main-layout/sidebar/sidebar';

export const MENU_CONFIG: SidebarConfig[] = [
  {
    title: 'Components',
    items: [
      {
        label: 'Button',
        route: '/button',
        icon: 'lucideMousePointer2',
      },
      {
        label: 'Input',
        route: '/input',
        icon: 'lucideType',
      },
    ],
  },
  {
    title: 'System',
    items: [
      {
        label: 'Dashboard',
        route: '/dashboard',
        icon: 'lucideLayoutDashboard',
      },
    ],
  },
];
