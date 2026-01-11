import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { GrButtonIcon } from '../button.type';

// --- 1. 獨立的 Spinner 組件 ---
@Component({
  selector: 'gr-internal-spinner',
  standalone: true,
  template: `
    <svg
      class="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
  `,
  // styles 屬性可以直接省略不寫
})
export class GrInternalSpinner {}

// --- 2. 整合的 Icon 顯示組件 ---
@Component({
  selector: 'gr-internal-icon-display',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  template: `
    @if (iconData().type === 'lucide') {
      <ng-icon
        [name]="iconData().value"
        class="text-current text-lg flex items-center pointer-events-none"
        [class]="extraClass()"
      ></ng-icon>
    } @else {
      <img
        [src]="iconData().value"
        alt="icon"
        class="h-4 w-4 object-contain pointer-events-none"
        [class]="extraClass()"
      />
    }
  `,
  // ✨ Pro Tip: 使用 host 綁定 Tailwind 的 'contents' class
  // 這樣這個組件標籤就不會影響 Flexbox 排版，取代了原本 CSS 的 display: contents
  host: {
    class: 'contents',
  },
})
export class GrInternalIconDisplay {
  iconData = input.required<GrButtonIcon>();
  extraClass = input<string>('');
}
