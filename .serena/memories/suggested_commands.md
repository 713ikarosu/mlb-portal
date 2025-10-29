# 開発コマンド一覧

## 基本開発コマンド
- `yarn dev`: 開発サーバー起動
- `yarn build`: プロダクションビルド
- `yarn start`: プロダクションサーバー起動

## コード品質管理
- `yarn lint`: Biomeでのリンティング
- `yarn lint:fix`: Biomeでのリンティング（自動修正）
- `yarn format`: Biomeでのフォーマット
- `yarn check`: Biomeでのリンティング・フォーマット（自動修正）
- `yarn type-check`: TypeScriptの型チェック

## データベース関連
- `prisma generate`: Prismaクライアント生成（postinstallで自動実行）
- `prisma db seed`: データベースシード実行
- `prisma studio`: Prisma Studio起動

## Git関連
- lefthook設定済み（pre-commitフックでcheckとtype-checkが自動実行）

## システムコマンド（Darwin）
- `ls`: ファイル・ディレクトリ一覧
- `cd`: ディレクトリ移動
- `grep`: 文字列検索
- `find`: ファイル検索
- `git`: Gitコマンド