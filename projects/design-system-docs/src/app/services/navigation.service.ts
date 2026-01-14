import { Injectable, signal } from '@angular/core';
import { SidebarConfig } from '../layouts/main-layout/sidebar/sidebar';
import { MENU_CONFIG } from '../configs/menu.config';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  menuItems = signal<SidebarConfig[]>(MENU_CONFIG);
}
