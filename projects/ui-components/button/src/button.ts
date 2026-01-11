import { Component, input } from '@angular/core';
import { GrButtonIconPosition, GrHtmlType, GrIntent, GrSize, GrVariant } from '../button-type';

@Component({
  selector: 'button[gr-button]',
  imports: [],
  templateUrl: './button.html',
  standalone: true,
  styleUrl: './button.css',
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
  icon = input<string | undefined>(undefined);
  // ----- 圖示 ------
  iconPos = input<GrButtonIconPosition>('left');
}
