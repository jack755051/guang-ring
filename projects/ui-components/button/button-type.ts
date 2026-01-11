// button.type.ts

export type GrButtonIconPosition = 'left' | 'right';

// 簡化 Icon 定義，通常傳入 string (icon name) 即可，不需要包成物件
export type GrIconName = string;

export type GrIntent = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export type GrVariant = 'filled' | 'outline' | 'soft' | 'ghost' | 'glass' | 'neon';

export type GrSize = 'sm' | 'md' | 'lg' | 'xl';

export type GrHtmlType = 'button' | 'submit' | 'reset';
