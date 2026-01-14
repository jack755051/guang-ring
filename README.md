# 🛸 Guan Ring Design System

> A high-performance Angular UI library powered by Tailwind CSS and Lucide Icons. Features secondary entry points architecture for optimal tree-shaking and a tech-inspired design system.

**中文簡介：**
專為 Angular 打造的科技感 UI 組件庫。深度整合 Tailwind CSS 與 Lucide Icons，採用 Secondary Entry Points 架構確保極致 Tree-shaking 效能，提供模組化、原子設計與完整的 Type Safety 開發體驗。

---

## ✨ Features (特色功能)

- 🎯 **Secondary Entry Points** - 每個組件獨立打包，極致 Tree-shaking 優化
- 🎨 **Tailwind CSS v4** - 現代化設計權杖系統，內建科技感主題
- 🔷 **Lucide Icons** - 輕量、現代化的圖示庫整合
- 📦 **Monorepo Architecture** - Angular Workspace 架構，開發與展示分離
- 🔒 **Type Safety** - 完整 TypeScript 支援
- ⚡ **Angular 21** - 基於最新 Angular 版本構建
- 🧪 **Vitest** - 快速的單元測試框架

---

## 📦 Available Components (可用組件)

| Component | Import Path            | Status       |
| --------- | ---------------------- | ------------ |
| Button    | `@guan-ring/ui/button` | ✅ Available |
| Input     | `@guan-ring/ui/input`  | ✅ Available |

> 更多組件持續開發中... More components coming soon...

---

## 🚀 Quick Start (快速開始)

### Prerequisites (前置需求)

- Node.js >= 18.x
- npm >= 10.x

### Installation (安裝)

```bash
# Clone the repository
git clone <your-repo-url>
cd guan-ring

# Install dependencies
npm install
```

### Development Workflow (開發流程)

#### 1. Start the Demo App (啟動展示應用)

這是你的開發沙盒，支援 Hot Reload：

```bash
npm start
# 或
ng serve design-system-docs
```

訪問 `http://localhost:4200` 查看組件展示。

#### 2. Build the Library (構建組件庫)

將組件庫打包為 NPM 套件格式：

```bash
npm run build
# 或
ng build ui-components
```

打包產物位於 `dist/ui-components/`。

#### 3. Run Tests (執行測試)

```bash
npm test
```

#### 4. Code Quality (程式碼品質)

執行 ESLint 檢查：

```bash
npm run lint
```

自動修復 ESLint 問題：

```bash
npm run lint:fix
```

檢查 Prettier 格式：

```bash
npm run format:check
```

自動格式化程式碼：

```bash
npm run format
```

---

## 📂 Project Structure (專案結構)

本專案採用 Angular Workspace (Monorepo) 架構，確保「組件庫」與「文件展示」的開發環境分離。

```
.
├── projects/
│   ├── ui-components/          # 核心組件庫 (Library)
│   │   ├── ng-package.json     # 核心打包配置
│   │   ├── button/             # [Atom] Button Component (Secondary Entry Point)
│   │   ├── input/              # [Atom] Input Component (Secondary Entry Point)
│   │   └── src/                # 全域公用基礎 (Core/Utils)
│   │
│   └── design-system-docs/     # 展示與文件應用 (Demo App)
│       └── src/app/            # 測試組件的實驗室
│
├── tailwind.config.js          # 核心設計權杖 (Design Tokens)
└── package.json                # 專案依賴與腳本
```

---

## 🛠 Core Architecture (核心架構)

### 1. Secondary Entry Points (子入口)

為了優化 Tree-shaking 效能，每個組件皆為獨立子入口。

**Usage (使用方式):**

```typescript
import { ButtonComponent } from '@guan-ring/ui/button';
import { InputComponent } from '@guan-ring/ui/input';
```

**Benefit (優勢):**
使用者僅需加載使用的組件，大幅減少 Bundle Size。

### 2. Design Tokens with Tailwind

所有樣式標準定義於根目錄的 `tailwind.config.js`。

- **Theming**: 內建 `tech-primary` 等科技感語意色彩
- **Consistency**: 確保 Library 與 Demo App 視覺高度統一

### 3. Icon System

整合 Lucide Icons (透過 @ng-icons)，提供現代化且輕量的圖示支援。

```typescript
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown } from '@ng-icons/lucide';
```

---

## 🤝 Contributing (貢獻指南)

歡迎貢獻！請遵循以下步驟：

1. Fork 本專案
2. 創建你的 Feature Branch (`git checkout -b feature/amazing-feature`)
3. 提交你的變更 (`git commit -m 'Add some amazing feature'`)
4. 推送到 Branch (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

### Code Style

- 使用 Prettier 格式化程式碼 (已配置於 `package.json`)
- 遵循 Angular Style Guide
- 所有組件必須包含單元測試

---

## 📝 License (授權)

© 2026 Guan Ring Design System. All rights reserved.

---

## 🔗 Tech Stack (技術棧)

- **Angular**: ^21.0.0
- **Tailwind CSS**: ^4.1.12
- **TypeScript**: ~5.9.2
- **Vitest**: ^4.0.8
- **@ng-icons/lucide**: ^33.0.0
- **ng-packagr**: ^21.0.0

---

Built with ❤️ for modern Angular applications
