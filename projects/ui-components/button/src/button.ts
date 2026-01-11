import { Component, computed, input } from '@angular/core';
import { GrHtmlType, GrButtonIcon } from '../button.type';
import { GrIntent, GrSize, GrVariant } from '../../types';
import { GrInternalIconDisplay, GrInternalSpinner } from './button-internal';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[gr-button], a[gr-button]',
  standalone: true,
  imports: [GrInternalSpinner, GrInternalIconDisplay],
  templateUrl: './button.html',
  styleUrl: './button.css',
  host: {
    '[class]': 'classes()',
    /**
     * 原本的寫法 (會導致 <a> 報錯)： '[disabled]': 'disabled() || loading()',
     **/
    '[attr.disabled]': '(disabled() || loading()) ? true : null',
    // 讓被停用的連結無法透過 Tab 鍵選中 (A11y)
    '[attr.tabindex]': '(disabled() || loading()) ? -1 : null',
    '[attr.type]': 'htmlType()',
  },
})
export class Button {
  // ----- 外觀 ------
  variant = input<GrVariant>('filled');
  intent = input<GrIntent>('primary');
  size = input<GrSize>('md');
  // ----- 狀態 ------
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  block = input<boolean>(false);
  // ----- 功能 ------
  htmlType = input<GrHtmlType>('button');
  icon = input<GrButtonIcon | undefined | null>(undefined);

  // --- 計算最終 Tailwind Classes ---
  // 使用 computed，當 input 變動時自動重新計算 class 字串
  classes = computed(() => {
    const base =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed';

    // 根據 Variant 和 Intent 決定顏色 (這裡簡化示範)
    const variantClass = this.getVariantClass(this.variant(), this.intent());

    // 根據 Size 決定 Padding 和 Font
    const sizeMap: Record<GrSize, string> = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-5 py-2.5 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-xl',
      xl: 'px-8 py-4 text-xl rounded-2xl',
    };

    // 處理 Block
    const blockClass = this.block() ? 'w-full flex' : '';

    return `${base} ${variantClass} ${sizeMap[this.size()]} ${blockClass}`;
  });

  private getVariantClass(v: GrVariant, i: GrIntent): string {
    // 這裡實作你複雜的 Tailwind 邏輯，例如 'neon' + 'success'
    // 為了版面整潔，暫時回傳簡單字串
    if (v === 'neon') return 'shadow-[0_0_10px_currentColor] border border-current';
    return 'bg-blue-600 text-white hover:bg-blue-700';
  }
}
