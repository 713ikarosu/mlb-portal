# 日本人MLBファン向けポータルサイト - 仕様書

## プロジェクト概要

MLB（メジャーリーグベースボール）の情報を日本人向けに発信するポータルサイト。
MLBの基本情報から、最新情報・日本人選手情報などを日本人ファンに分かりやすく提供する。

## 技術スタック

- **フロントエンド**: Next.js 14 (App Router), TypeScript
- **スタイリング**: TailwindCSS, daisyUI
- **データベース**: PostgreSQL
- **ORM**: Prisma
- **開発ツール**: Biome (linter/formatter), Lefthook (Git hooks)
- **テスト**: Vitest
- **デプロイ**: Vercel
- **アイコン**: FontAwesome

## データベース設計

### Word モデル
```prisma
model Word {
  id          String   @id @default(dbgenerated("uuid_generate_v4()")) @db.Uuid
  word        String
  description String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  originLinks RelatedLink[] @relation()
  linkedFrom  RelatedLink[] @relation("LinkedWords")
}
```

### RelatedLink モデル
```prisma
model RelatedLink {
  id           Int    @id @default(autoincrement())
  originWord   Word   @relation(fields: [originWordId], references: [id])
  originWordId String @db.Uuid
  linkedWord   Word   @relation("LinkedWords", fields: [linkedWordId], references: [id])
  linkedWordId String @db.Uuid

  @@index([originWordId])
  @@index([linkedWordId])
}
```

## 開発フェーズ

### フェーズ1: MLB用語解説機能（現在実装中）

#### ✅ 完了済み機能
- 基本インフラ設定
- データベース設計
- 管理画面UI
- 用語検索機能の基盤

#### 🚧 実装中機能
- 単語データのCRUD機能
- 検索機能の実装
- Markdown対応での説明文表示
- 関連語句のリンク機能

#### 📋 主要コンポーネント
- `WordsTable`: 管理画面での単語一覧表示
- `WordsSearchCard`: 検索結果表示用カード
- `WordUpdateForm`: 単語編集フォーム
- 基本UIコンポーネント（Heading, IconButton, Text等）

### フェーズ2: コンテンツ充実

#### 日本人MLB選手データベース
- **選手プロフィール**
  - 基本情報（名前、年齢、出身地、ポジション）
  - 経歴（プロ入り、MLB移籍歴）
  - 写真・画像
- **成績データ**
  - シーズン別成績
  - 通算成績
  - 主要記録・タイトル
- **最新情報**
  - 所属チーム
  - 契約状況
  - 怪我・故障情報

#### MLB球団情報
- **基本情報**
  - 球団名（英語/日本語）
  - 本拠地
  - 設立年
  - リーグ・地区
- **ビジュアル要素**
  - チームロゴ
  - チームカラー
  - 球場写真
- **歴史・文化**
  - 球団の歴史
  - 有名選手
  - 優勝歴
- **ユーザー機能**
  - お気に入り球団登録
  - 通知設定

### フェーズ3: リアルタイム情報

#### 試合速報機能
- **API連携**
  - MLB公式API または ESPN API
  - リアルタイムスコア取得
  - 試合スケジュール
- **日本人選手フォーカス**
  - 出場予定・結果
  - 打席結果・投球内容
  - 成績更新
- **試合情報表示**
  - スコアボード
  - イニング別スコア
  - 主要プレイ

#### ニュース機能
- **外部連携**
  - RSS/APIによるニュース取得
  - 日本語メディアとの連携
- **カテゴリ分類**
  - 日本人選手
  - 球団別
  - トレード・移籍
  - 試合結果

### フェーズ4: ユーザー機能

#### 認証・会員機能
- **ユーザー登録**
  - メール認証
  - プロフィール設定
- **ログイン機能**
  - 通常ログイン
  - ソーシャルログイン（Google, Twitter等）

#### パーソナライゼーション
- **お気に入り機能**
  - 選手フォロー
  - 球団フォロー
  - 用語ブックマーク
- **通知機能**
  - 試合開始通知
  - 選手成績アップデート
  - ニュース通知
- **カスタマイズ**
  - ダッシュボード設定
  - 表示項目選択

#### コミュニティ機能
- **コメント・レビュー**
  - 記事コメント
  - 選手評価
  - 試合感想
- **評価システム**
  - いいね機能
  - 評価ランキング

### フェーズ5: 高度な機能

#### 統計・分析ツール
- **データ可視化**
  - 成績グラフ
  - 比較チャート
  - トレンド分析
- **予測機能**
  - 成績予想
  - 順位予測
- **カスタム統計**
  - ユーザー定義指標
  - フィルタリング機能

#### ソーシャル機能
- **ユーザー投稿**
  - 試合予想
  - 分析記事
  - 写真投稿
- **投票・アンケート**
  - MVP予想
  - ベストプレイ投票
- **コミュニティ**
  - フォーラム機能
  - ユーザーグループ

## 技術的考慮事項

### SEO対策
- **メタデータ管理**
  - 動的メタタグ生成
  - OGP設定
  - 構造化データ
- **サイトマップ**
  - 自動生成
  - 検索エンジン登録
- **パフォーマンス**
  - Core Web Vitals最適化
  - 画像最適化
  - キャッシュ戦略

### アクセシビリティ
- **WCAG 2.1 AA準拠**
  - キーボードナビゲーション
  - スクリーンリーダー対応
  - 色のコントラスト
- **多言語対応**
  - 日本語/英語切り替え
  - 国際化（i18n）

### パフォーマンス
- **画像最適化**
  - Next.js Image コンポーネント
  - WebP対応
  - 遅延読み込み
- **データ取得最適化**
  - SWR/React Query
  - ISR（Incremental Static Regeneration）
  - エッジキャッシュ

### セキュリティ
- **認証・認可**
  - JWT トークン
  - CSRF保護
  - XSS対策
- **データ保護**
  - 個人情報暗号化
  - GDPR対応（必要に応じて）

## 運用・保守

### モニタリング
- **エラー監視**
  - Sentry等のエラートラッキング
  - ログ集約
- **パフォーマンス監視**
  - Vercel Analytics
  - Core Web Vitals
- **ユーザー行動分析**
  - Google Analytics
  - ヒートマップ

### データ管理
- **バックアップ戦略**
  - 定期バックアップ
  - 復旧手順
- **データ移行**
  - Prisma Migrate
  - シードデータ管理

## 今後の拡張可能性

### モバイルアプリ
- React Native
- Progressive Web App (PWA)

### AI機能
- 試合予測AI
- 記事自動生成
- チャットボット

### API提供
- 外部開発者向けAPI
- Webhook機能
- データエクスポート

---

*最終更新: 2025年8月15日*