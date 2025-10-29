# コードスタイル・規約

## Biome設定
- **インデント**: スペース2個
- **行幅**: 120文字
- **セミコロン**: 必須
- **import整理**: 有効

## TypeScript規約
- 型定義必須（noEmitでの型チェック実行）
- 未使用変数はエラー
- 未宣言変数はエラー

## React規約
- React Hooksはトップレベルで使用
- App Routerパターンを使用
- server-onlyパッケージでサーバーサイド限定コードを明示

## ファイル構成規約
- コンポーネント: `app/_components/` 配下
- 管理機能: `app/(admin)/` 配下（ルートグループ）
- 共通ライブラリ: `lib/` 配下
- データベース関連: `lib/prisma/` 配下
- フォーム関連: `lib/form/` 配下

## 命名規約
- コンポーネント: PascalCase
- ファイル名: kebab-case（特にNext.js App Router）
- 変数・関数: camelCase