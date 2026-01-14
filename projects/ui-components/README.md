🛸 Guan Ring Design System
這是一個基於 Angular Workspace 與 Tailwind CSS 構建的現代化組件庫。採用原子設計（Atomic Design）思維與子入口（Secondary Entry Points）架構，旨在提供極致的效能與開發體驗。

📂 專案結構
Plaintext

.
├── projects/
│ ├── ui-components/ # 組件庫核心 (Library)
│ │ ├── ng-package.json # 核心打包配置
│ │ ├── src/ # 全域公用基礎 (Core/Utils)
│ │ └── button/ # 子組件入口 (Secondary Entry Point)
│ │ ├── ng-package.json # 子入口配置
│ │ ├── public-api.ts # 暴露給外部的介面
│ │ └── src/ # 組件源碼 (TS/HTML/SCSS)
│ │
│ └── design-system-docs/ # 展示與文件應用 (Demo App)
│ └── src/app/ # 測試組件的實驗室
│
├── tailwind.config.js # 核心設計權杖 (Design Tokens)
└── package.json # 專案依賴與腳本
🛠 核心架構設計

1. 子入口 (Secondary Entry Points)
   為了優化 Tree-shaking 效能，每個組件皆為獨立子入口。

用法： import { Button } from '@guan-ring/ui/button';

好處： 使用者僅需加載使用的組件，避免全量引入造成的打包體積過大。

2. 設計權杖 (Design Tokens)
   所有樣式標準定義於根目錄的 tailwind.config.js。

配色系統： 內建 tech-primary 等科技感語意色彩。

一致性： 透過 Tailwind class 確保全專案（Library & Docs）視覺高度統一。

3. 自動化版本控制
   Commit 規範： 採用 Conventional Commits (feat, fix)。

版本發佈： 透過 GitHub Actions 監聽 Push 動作，自動執行測試、構建並同步發佈至 NPM。

🚀快速開始
Bash

# 安裝依賴

npm install

# 啟動開發展示文件 (Demo App)

ng serve design-system-docs

# 構建組件庫

ng build ui-components

---

### 建立組件方法

- 在ui-component中建立新的組件，以button為例

```javascript=
  # 建立資料夾
  mkdir -p projects/ui-components/button
```

```javascript=
  # 生成套件
  ng g c input --project=ui-components --path=projects/ui-components/button/src --export --flat
```
