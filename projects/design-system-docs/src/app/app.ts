import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 引入組件
import { Button } from '@guan-ring/ui/button';
// 引入型別
import { GrButtonIcon } from '@guan-ring/ui/button';
// 引入icon相關的功能
import { provideIcons } from '@ng-icons/core';
import { lucideSettings, lucideUser, lucideLoader2 } from '@ng-icons/lucide';

@Component({
  selector: 'gr-root',
  standalone: true,
  imports: [RouterOutlet, Button],
  // 註冊你想在這個 App 裡使用的 Icon
  viewProviders: [provideIcons({ lucideSettings, lucideUser, lucideLoader2 })],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // 模擬 Loading 狀態
  isLoading = signal(false);

  // 定義一個 Lucide Icon
  settingIcon: GrButtonIcon = {
    type: 'lucide',
    value: 'settings', // 這名字必須對應上面 provideIcons 裡的名稱 (去掉了 lucide 前綴)
    position: 'left',
  };

  // 定義一個 Image Icon
  googleIcon: GrButtonIcon = {
    type: 'image',
    value: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
    position: 'left',
    class: 'w-5 h-5', // 客製化大小
  };

  toggleLoading() {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 2000);
  }

  protected readonly title = signal('design-system-docs');
}
