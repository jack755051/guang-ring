// button.type.ts

export type GrIconPosition = 'left' | 'right';

// 簡化 Icon 定義，通常傳入 string (icon name) 即可，不需要包成物件
export type GrIconName = string;

export type GrHtmlType = 'button' | 'submit' | 'reset';

export type GrIconType = 'lucide' | 'image';

export interface GrButtonIcon {
  type: GrIconType;
  value: string; // 如果是 lucide 傳入 icon name (e.g., 'settings')，如果是 image 傳入 url
  position: GrIconPosition;
  class?: string; // 允許傳入額外的客製化 class
}
