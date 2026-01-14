import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { provideIcons } from '@ng-icons/core';
import { lucideLayoutDashboard, lucideMousePointer2, lucideType } from '@ng-icons/lucide';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  viewProviders: [provideIcons({ lucideLayoutDashboard, lucideMousePointer2, lucideType })],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private navService = inject(NavigationService);

  sidebarMenu = this.navService.menuItems;

  // manage sidebar state here if needed
  isSidebarOpen = signal(true);

  onSidebarToggle() {
    this.isSidebarOpen.update((v) => !v);
  }

  onSettingToggle() {
    console.log('Open Settings Modal...');
  }
}
