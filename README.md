# corp-portal-360-poc

法人顧客向けポータルUIのPOC。営業向け360°ビューをローカル環境で確認できる。

## 主な機能
- 360°ダッシュボード（契約・請求・使用量・案件・問い合わせ）
- 顧客一覧/詳細（ナビゲーションから切り替え可能）
- 簡易レコメンド（未入金フォロー等）

## 確認方法
1. `index.html` をWebブラウザで開くだけ
2. サーバー不要で静的HTMLとして動作

## データ
- `data/*.json` にダミーデータ
- 顧客セレクターから異なる顧客データを確認可能

## ディレクトリ構成
```
/
├─ index.html     # メインHTMLファイル
├─ css/           # スタイルシート
│  └─ style.css
├─ js/            # JavaScriptファイル
│  └─ script.js
└─ data/          # ダミーデータ（JSON）
   ├─ customers.json
   ├─ contracts.json
   ├─ billings.json
   ├─ usages.json
   ├─ opportunities.json
   └─ tickets.json
```

## 注意事項
- POC用途のみ
- 機微情報は含まれていません
- 実データではなくすべてダミーデータを使用