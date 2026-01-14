import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideSettings,
  lucideMenu,
  lucideChevronLeft,
  lucideChevronRight,
} from '@ng-icons/lucide';

export interface SidebarConfigItem {
  label: string;
  route: string;
  icon: string;
}

export interface SidebarConfig {
  title: string;
  items: SidebarConfigItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIcon],
  viewProviders: [
    provideIcons({ lucideMenu, lucideSettings, lucideChevronLeft, lucideChevronRight }),
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  // 接收外部設定
  configGroup = input<SidebarConfig[]>();
  // 接收開關狀態 (重要！)
  isOpen = input.required<boolean>();
  // 輸出的事件
  sidebarToggle = output<void>();
  settingToggle = output<void>();

  /**
   * 側邊欄選單按鈕點擊事件
   */
  handleMenuClick() {
    this.sidebarToggle.emit();
  }
  /**
   * 設定按鈕點擊事件
   */
  handleSettingsClick() {
    this.settingToggle.emit();
  }
}
