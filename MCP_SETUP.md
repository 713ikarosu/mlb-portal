# MCP Server Setup

このプロジェクトには以下のMCPサーバーが設定されています：

## 設定済みサーバー

### 1. Brave Search MCP Server
- **機能**: Brave検索エンジンを使用したWeb検索
- **パッケージ**: `@modelcontextprotocol/server-everything`
- **API Key**: 設定済み

### 2. Serena MCP Server
- **機能**: セマンティックコード検索・編集、IDE機能
- **リポジトリ**: `https://github.com/oraios/serena`
- **API Key**: 不要（無料・オープンソース）

## セットアップ手順

1. 必要なパッケージをインストール:
   ```bash
   # Brave Search MCP Server
   npm install -g @modelcontextprotocol/server-everything
   
   # uvインストール（Serena用）
   curl -LsSf https://astral.sh/uv/install.sh | sh
   source ~/.local/bin/env
   ```

2. API Keyの設定:
   - Brave Search API Key: 設定済み
   - Serena: API Key不要

## 設定ファイル

- **MCP設定**: `.clauderc`
- **環境変数テンプレート**: `.env.local.example`

## 使用方法

Claude Codeで以下のようなタスクが可能になります：

- **Web検索**（Brave Search）
- **セマンティックコード分析**（Serena）
- **コード検索・編集**（Serena）
- **IDE機能**（Serena）

**Serenaの特徴:**
- Python、Java、TypeScript直接サポート
- Ruby、Go、C#間接サポート  
- Language Server Protocolベース
- 大規模コードベース対応
- 無料・オープンソース

設定後、Claude Codeを再起動してMCPサーバーを有効化してください。