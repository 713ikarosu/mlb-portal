# MLB Portal プロジェクト概要

## プロジェクトの目的
MLB（メジャーリーグベースボール）の情報を日本人向けに発信するWebサイト。主にMLB用語解説など、初心者向けにMLB情報を発信する。単語情報をMarkdownで入稿・編集・削除できる管理ツールも兼ねる。

## 技術スタック
- **フロントエンド**: Next.js (App Router), TypeScript, React 18
- **スタイリング**: TailwindCSS, daisyUI
- **データベース**: PostgreSQL with Prisma ORM
- **バリデーション**: Zod, Conform
- **リンティング・フォーマッティング**: Biome
- **Git Hooks**: lefthook
- **デプロイ**: Vercel
- **その他**: FontAwesome, SWR, react-markdown

## データベース構造
- **Word**: MLB用語の単語情報 (id, word, description, createdAt, updatedAt)
- **RelatedLink**: 単語間の関連リンク情報

## プロジェクト構造
- `app/`: Next.js App Router のメインディレクトリ
  - `words/`: 単語関連のページ
  - `_components/`: 共通コンポーネント
  - `(admin)/`: 管理機能
- `lib/`: 共通ライブラリ (form, prisma)
- `prisma/`: データベーススキーマとシード
- `public/`: 静的ファイル