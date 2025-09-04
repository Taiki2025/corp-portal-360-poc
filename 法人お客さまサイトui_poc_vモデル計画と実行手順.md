# 目的
電力会社の法人向けお客さまサイトUIを、営業が使いやすい360°ビュー中心でPOC構築する。Vモデルで工程を明確化し、ローカル実行でWebブラウザ確認を可能にする。

---
# Vモデル工程（左：定義/設計 → 右：テスト/検証）
| 左側工程 | 成果物 | 右側工程 | 成果物 |
|---|---|---|---|
| 1. 事業要件定義 | 目的/KPI、対象業務、制約（ローカル実行、非機微データ） | 7. 受入テスト | 受入結果、KPIトレース、是正一覧 |
| 2. ユーザー要件定義 | ペルソナ（法人営業）、ユースケース、NFR（性能/セキュリティ） | 6. システムテスト | E2Eシナリオ、NFR検証結果 |
| 3. 機能要件定義 | 画面一覧、機能一覧、データ項目、API一覧 | 5. 結合テスト | API⇔UI連携確認、異常系 |
| 4. 基本/詳細設計 | 画面設計、情報設計、UIルール、API I/F仕様、データモデル | 4'. 単体テスト | コンポーネント/関数のUT結果 |

---
# 360°ビュー要件（営業向け）
**目的**: 法人顧客の現況を1画面で俯瞰し、次アクションを即決。

**主要ウィジェット**
- ① 顧客概要（企業属性、拠点、担当者）
- ② 契約・料金（契約メニュー、契約電力、請求・入金ステータス）
- ③ 使用量/料金トレンド（30日・12か月）
- ④ 商談・案件（進捗、売上見込、次アクション）
- ⑤ 問い合わせ/障害・工事履歴（重要度、対応状況）
- ⑥ タスク/リマインド
- ⑦ 推奨アクション（簡易ルール：例「未入金あり→入金フォロー」）

---
# 画面一覧と概要
1. ダッシュボード（360°ビュー：上記ウィジェットをカード配置）
2. 顧客一覧（検索/絞込/タグ）
3. 顧客詳細（タブ：概要/契約/使用量/請求/案件/問い合わせ）
4. 案件ボード（かんばん型）
5. 問い合わせ一覧（フィルタ/状態遷移）

**UIルール（POC）**
- レイアウト：3カラム可変グリッド、カード高さ自動
- 一貫要素：パンくず、ページ内検索、表シンプルソート
- 状態色：情報/警告/重要（ブルー/オレンジ/レッド）

---
# 技術構成（POC/ローカル）
- Frontend: React + Vite, TypeScript, Tailwind CSS
- UI: shadcn/ui, lucide-react（アイコン）
- Chart: Recharts
- Backend（モック）: json-server または FastAPI（任意）
- テスト: Vitest + Testing Library（UT）、Playwright（E2E）

---
# リポジトリ構成（例）
```
corp-portal-360-poc/
  ├─ app/                  # React（Vite）
  │   ├─ src/
  │   │   ├─ components/  # Card, Table, Charts
  │   │   ├─ pages/       # Dashboard, CustomerList, CustomerDetail
  │   │   ├─ hooks/
  │   │   ├─ lib/         # api.ts, types.ts, utils
  │   │   └─ tests/
  │   └─ index.html
  ├─ mock/
  │   ├─ data/            # JSON形式のダミーデータ（顧客、契約、請求、使用量など）
  │   │   └─ customers.json
  │   ├─ js/              # JS形式のダミーデータ（export defaultでモジュール化）
  │   │   └─ customers.js
  │   └─ routes.json      # エイリアス（/api/...）
  └─ README.md            # プロジェクト概要、セットアップ手順
```

---
# ダミーデータ管理
- `mock/data/` : 大規模データや静的サンプル（JSON）
- `mock/js/` : 少量データやコード内直接利用用（export default形式）
- HTMLやReactコードに直接埋め込まず、importまたはAPIモック経由で利用する。

---
# README.md記述例
```markdown
# 法人お客さまサイトUI POC

本リポジトリは、法人顧客向けポータルサイトのUIを検証するためのPOCです。営業担当者が利用しやすい360度ビューをWebブラウザで確認できます。

## 特徴
- 顧客概要、契約・料金、使用量、案件、問い合わせを一元表示
- ダミーデータをJSON/JSファイルとして分離し、軽量に管理
- React + Vite + TailwindによるモダンUI構築
- json-serverを用いたモックAPIでローカル実行可能

## セットアップ
```bash
npm install
npm run dev
```

別ターミナルでモックAPIを起動してください:
```bash
cd mock
json-server --watch data/customers.json --port 5174 --delay 300
```

## フォルダ構成
- `app/` : フロントエンド実装
- `mock/data/` : JSON形式ダミーデータ
- `mock/js/` : JS形式ダミーデータ
- `mock/routes.json` : APIエイリアス設定

## 注意
- POC目的のため実データは使用せず、すべてダミーデータを利用
- 機微情報は含まれません
```

---
# 次アクション
- ダミーデータ分離用の`mock/data`と`mock/js`を作成
- README.mdの初期版を配置
- 開発者が直感的に利用できるようにセットアップコマンドとフォルダ説明を必ず追記



---
# データ分離方針（軽量化）
HTML/JSバンドルを小さく保つため、ダミーデータは別ファイルに分離。

## 推奨レイヤ
- **/public/data/**: 静的JSON（ビルドに含めず配信のみ）
- **/src/js/**: APIラッパとデータ取得関数（最小）

## ディレクトリ構成（更新）
```
corp-portal-360-poc/
  ├─ app/
  │   ├─ public/
  │   │   └─ data/
  │   │       ├─ customers.json
  │   │       ├─ contracts.json
  │   │       ├─ billings.json
  │   │       ├─ usages.json
  │   │       ├─ opportunities.json
  │   │       └─ tickets.json
  │   └─ src/
  │       ├─ js/
  │       │   ├─ api.ts           # fetchJSON, 型ガード
  │       │   └─ repo.ts          # 画面用の取得関数
  │       ├─ lib/types.ts
  │       ├─ components/
  │       └─ pages/
  └─ README.md
```

## サンプルJSON（最小）
`app/public/data/customers.json`
```json
[
  {
    "id": "C-001",
    "name": "九州テック",
    "industry": "製造",
    "size": "大",
    "owner": "山田",
    "tags": ["高圧"],
    "contractIds": ["K-1100-001"],
    "billingIds": ["B-2025-07"],
    "usageIds": ["U-2025-07"],
    "opportunityIds": ["O-RE-001"],
    "ticketIds": ["T-001"]
  }
]
```

`app/public/data/contracts.json`
```json
[
  {"id":"K-1100-001","customerId":"C-001","menu":"高圧電力A","kW":500,"status":"有効","start":"2024-04-01"}
]
```

## 取得コード（/src/js）
`api.ts`
```ts
export async function fetchJSON<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
  return (await res.json()) as T;
}
```

`repo.ts`
```ts
import { fetchJSON } from "./api";
import type { Customer, Contract, Billing, Usage, Opportunity, Ticket } from "../lib/types";

const base = "/data"; // Viteはpublic配下をルート直下で配信

export const loadCustomers = () => fetchJSON<Customer[]>(`${base}/customers.json`);
export const loadContracts = () => fetchJSON<Contract[]>(`${base}/contracts.json`);
export const loadBillings = () => fetchJSON<Billing[]>(`${base}/billings.json`);
export const loadUsages = () => fetchJSON<Usage[]>(`${base}/usages.json`);
export const loadOpps = () => fetchJSON<Opportunity[]>(`${base}/opportunities.json`);
export const loadTickets = () => fetchJSON<Ticket[]>(`${base}/tickets.json`);
```

`lib/types.ts`
```ts
export type ID = string;
export interface Customer { id: ID; name: string; industry?: string; size?: string; owner?: string; tags?: string[]; contractIds?: ID[]; billingIds?: ID[]; usageIds?: ID[]; opportunityIds?: ID[]; ticketIds?: ID[] }
export interface Contract { id: ID; customerId: ID; menu: string; kW: number; status: string; start: string }
export interface Billing { id: ID; customerId?: ID; month: string; amount: number; due: string; status: string }
export interface Usage { id: ID; customerId?: ID; month: string; kWh: number }
export interface Opportunity { id: ID; customerId?: ID; name: string; amount: number; stage: string; due?: string; next?: string }
export interface Ticket { id: ID; customerId?: ID; type: string; priority: string; status: string; opened: string }
```

## 画面側利用例
```ts
import { useEffect, useState } from "react";
import { loadCustomers } from "../js/repo";
import type { Customer } from "../lib/types";

export default function CustomerList() {
  const [data, setData] = useState<Customer[]>([]);
  useEffect(() => { loadCustomers().then(setData).catch(console.error); }, []);
  return <ul>{data.map(c => <li key={c.id}>{c.name}</li>)}</ul>;
}
```

## ビルドサイズ対策（POC）
- 大きい配列はJSONに保持。JSに埋め込まない。
- 必要ページでのみ取得。初期表示は顧客一覧のみ。
- 12か月の使用量は対象顧客表示時に遅延取得。

---
# README.md 雛形（自動生成用テンプレート）
`README.md` に貼り付ける内容。
```md
# corp-portal-360-poc

法人顧客向けポータルUIのPOC。営業向け360°ビューをローカル環境で確認できる。

## 主な機能
- 360°ダッシュボード（契約・請求・使用量・案件・問い合わせ）
- 顧客一覧/詳細
- 簡易レコメンド（未入金フォロー等）

## 技術スタック
- React + Vite + TypeScript, Tailwind
- Recharts（グラフ）
- 静的JSON（/public/data）

## セットアップ
```bash
npm i
npm run dev
# ブラウザで http://localhost:5173 を開く
```

## データ
- `app/public/data/*.json` にダミーデータ。
- 変更後はブラウザのリロードで反映。

## ディレクトリ
```
app/
  public/data  # 静的JSON
  src/js       # 取得関数
  src/lib      # 型
  src/pages    # 画面
```

## ライセンス
POC用途のみ。
```

---
# 追加スクリプト
`package.json`
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

# 備考
- 既存のjson-server構成が必要な場合は併存可。ただし静的JSONで十分。
- 将来API化する際は`repo.ts`をAPI呼び出しに差し替え。

