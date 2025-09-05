// 静的データ
const customers = [
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
  },
  {
    "id": "C-002",
    "name": "北海道物流",
    "industry": "物流",
    "size": "中",
    "owner": "鈴木",
    "tags": ["高圧", "複数拠点"],
    "contractIds": ["K-1100-002"],
    "billingIds": ["B-2025-07-002"],
    "usageIds": ["U-2025-07-002"],
    "opportunityIds": ["O-RE-002"],
    "ticketIds": ["T-002"]
  },
  {
    "id": "C-003",
    "name": "東京データセンター",
    "industry": "IT",
    "size": "大",
    "owner": "佐藤",
    "tags": ["特別高圧", "重要顧客"],
    "contractIds": ["K-1100-003"],
    "billingIds": ["B-2025-07-003"],
    "usageIds": ["U-2025-07-003"],
    "opportunityIds": ["O-RE-003"],
    "ticketIds": ["T-003"]
  },
  {
    "id": "C-004",
    "name": "大阪食品",
    "industry": "食品",
    "size": "中",
    "owner": "田中",
    "tags": ["高圧", "省エネ推進"],
    "contractIds": ["K-1100-004"],
    "billingIds": ["B-2025-07-004"],
    "usageIds": ["U-2025-07-004"],
    "opportunityIds": ["O-RE-004"],
    "ticketIds": ["T-004"]
  },
  {
    "id": "C-005",
    "name": "名古屋自動車",
    "industry": "自動車",
    "size": "大",
    "owner": "伊藤",
    "tags": ["特別高圧", "重要顧客", "省エネ推進"],
    "contractIds": ["K-1100-005"],
    "billingIds": ["B-2025-07-005"],
    "usageIds": ["U-2025-07-005"],
    "opportunityIds": ["O-RE-005"],
    "ticketIds": ["T-005"]
  }
];

const contracts = [
  {"id":"K-1100-001","customerId":"C-001","menu":"高圧電力A","kW":500,"status":"有効","start":"2024-04-01"},
  {"id":"K-1100-002","customerId":"C-002","menu":"高圧電力B","kW":300,"status":"有効","start":"2024-03-15"},
  {"id":"K-1100-003","customerId":"C-003","menu":"特別高圧電力","kW":2000,"status":"有効","start":"2023-10-01"},
  {"id":"K-1100-004","customerId":"C-004","menu":"高圧電力A","kW":400,"status":"有効","start":"2024-01-20"},
  {"id":"K-1100-005","customerId":"C-005","menu":"特別高圧電力","kW":1800,"status":"有効","start":"2023-08-10"}
];

const billings = [
  {"id":"B-2025-07","customerId":"C-001","month":"2025-07","amount":1250000,"due":"2025-08-15","status":"未入金"},
  {"id":"B-2025-06","customerId":"C-001","month":"2025-06","amount":1180000,"due":"2025-07-15","status":"入金済"},
  {"id":"B-2025-07-002","customerId":"C-002","month":"2025-07","amount":850000,"due":"2025-08-15","status":"未入金"},
  {"id":"B-2025-06-002","customerId":"C-002","month":"2025-06","amount":820000,"due":"2025-07-15","status":"入金済"},
  {"id":"B-2025-07-003","customerId":"C-003","month":"2025-07","amount":4500000,"due":"2025-08-15","status":"未入金"},
  {"id":"B-2025-06-003","customerId":"C-003","month":"2025-06","amount":4350000,"due":"2025-07-15","status":"入金済"},
  {"id":"B-2025-07-004","customerId":"C-004","month":"2025-07","amount":950000,"due":"2025-08-15","status":"未入金"},
  {"id":"B-2025-06-004","customerId":"C-004","month":"2025-06","amount":920000,"due":"2025-07-15","status":"入金済"},
  {"id":"B-2025-07-005","customerId":"C-005","month":"2025-07","amount":3800000,"due":"2025-08-15","status":"未入金"},
  {"id":"B-2025-06-005","customerId":"C-005","month":"2025-06","amount":3650000,"due":"2025-07-15","status":"入金済"}
];

const usages = [
  // 九州テック (C-001)
  {"id":"U-2025-07","customerId":"C-001","month":"2025-07","kWh":125000},
  {"id":"U-2025-06","customerId":"C-001","month":"2025-06","kWh":118000},
  {"id":"U-2025-05","customerId":"C-001","month":"2025-05","kWh":120000},
  {"id":"U-2025-04","customerId":"C-001","month":"2025-04","kWh":115000},
  {"id":"U-2025-03","customerId":"C-001","month":"2025-03","kWh":122000},
  {"id":"U-2025-02","customerId":"C-001","month":"2025-02","kWh":130000},
  {"id":"U-2025-01","customerId":"C-001","month":"2025-01","kWh":135000},
  {"id":"U-2024-12","customerId":"C-001","month":"2024-12","kWh":140000},
  {"id":"U-2024-11","customerId":"C-001","month":"2024-11","kWh":128000},
  {"id":"U-2024-10","customerId":"C-001","month":"2024-10","kWh":120000},
  {"id":"U-2024-09","customerId":"C-001","month":"2024-09","kWh":115000},
  {"id":"U-2024-08","customerId":"C-001","month":"2024-08","kWh":110000},
  
  // 北海道物流 (C-002)
  {"id":"U-2025-07-002","customerId":"C-002","month":"2025-07","kWh":85000},
  {"id":"U-2025-06-002","customerId":"C-002","month":"2025-06","kWh":82000},
  {"id":"U-2025-05-002","customerId":"C-002","month":"2025-05","kWh":80000},
  {"id":"U-2025-04-002","customerId":"C-002","month":"2025-04","kWh":78000},
  {"id":"U-2025-03-002","customerId":"C-002","month":"2025-03","kWh":83000},
  {"id":"U-2025-02-002","customerId":"C-002","month":"2025-02","kWh":88000},
  {"id":"U-2025-01-002","customerId":"C-002","month":"2025-01","kWh":90000},
  {"id":"U-2024-12-002","customerId":"C-002","month":"2024-12","kWh":92000},
  {"id":"U-2024-11-002","customerId":"C-002","month":"2024-11","kWh":86000},
  {"id":"U-2024-10-002","customerId":"C-002","month":"2024-10","kWh":81000},
  {"id":"U-2024-09-002","customerId":"C-002","month":"2024-09","kWh":79000},
  {"id":"U-2024-08-002","customerId":"C-002","month":"2024-08","kWh":77000},
  
  // 東京データセンター (C-003)
  {"id":"U-2025-07-003","customerId":"C-003","month":"2025-07","kWh":450000},
  {"id":"U-2025-06-003","customerId":"C-003","month":"2025-06","kWh":435000},
  {"id":"U-2025-05-003","customerId":"C-003","month":"2025-05","kWh":440000},
  {"id":"U-2025-04-003","customerId":"C-003","month":"2025-04","kWh":430000},
  {"id":"U-2025-03-003","customerId":"C-003","month":"2025-03","kWh":425000},
  {"id":"U-2025-02-003","customerId":"C-003","month":"2025-02","kWh":445000},
  {"id":"U-2025-01-003","customerId":"C-003","month":"2025-01","kWh":455000},
  {"id":"U-2024-12-003","customerId":"C-003","month":"2024-12","kWh":460000},
  {"id":"U-2024-11-003","customerId":"C-003","month":"2024-11","kWh":448000},
  {"id":"U-2024-10-003","customerId":"C-003","month":"2024-10","kWh":442000},
  {"id":"U-2024-09-003","customerId":"C-003","month":"2024-09","kWh":438000},
  {"id":"U-2024-08-003","customerId":"C-003","month":"2024-08","kWh":432000},
  
  // 大阪食品 (C-004)
  {"id":"U-2025-07-004","customerId":"C-004","month":"2025-07","kWh":95000},
  {"id":"U-2025-06-004","customerId":"C-004","month":"2025-06","kWh":92000},
  {"id":"U-2025-05-004","customerId":"C-004","month":"2025-05","kWh":93000},
  {"id":"U-2025-04-004","customerId":"C-004","month":"2025-04","kWh":91000},
  {"id":"U-2025-03-004","customerId":"C-004","month":"2025-03","kWh":89000},
  {"id":"U-2025-02-004","customerId":"C-004","month":"2025-02","kWh":94000},
  {"id":"U-2025-01-004","customerId":"C-004","month":"2025-01","kWh":97000},
  {"id":"U-2024-12-004","customerId":"C-004","month":"2024-12","kWh":99000},
  {"id":"U-2024-11-004","customerId":"C-004","month":"2024-11","kWh":96000},
  {"id":"U-2024-10-004","customerId":"C-004","month":"2024-10","kWh":94000},
  {"id":"U-2024-09-004","customerId":"C-004","month":"2024-09","kWh":92000},
  {"id":"U-2024-08-004","customerId":"C-004","month":"2024-08","kWh":90000},
  
  // 名古屋自動車 (C-005)
  {"id":"U-2025-07-005","customerId":"C-005","month":"2025-07","kWh":380000},
  {"id":"U-2025-06-005","customerId":"C-005","month":"2025-06","kWh":365000},
  {"id":"U-2025-05-005","customerId":"C-005","month":"2025-05","kWh":370000},
  {"id":"U-2025-04-005","customerId":"C-005","month":"2025-04","kWh":360000},
  {"id":"U-2025-03-005","customerId":"C-005","month":"2025-03","kWh":355000},
  {"id":"U-2025-02-005","customerId":"C-005","month":"2025-02","kWh":375000},
  {"id":"U-2025-01-005","customerId":"C-005","month":"2025-01","kWh":385000},
  {"id":"U-2024-12-005","customerId":"C-005","month":"2024-12","kWh":390000},
  {"id":"U-2024-11-005","customerId":"C-005","month":"2024-11","kWh":378000},
  {"id":"U-2024-10-005","customerId":"C-005","month":"2024-10","kWh":372000},
  {"id":"U-2024-09-005","customerId":"C-005","month":"2024-09","kWh":368000},
  {"id":"U-2024-08-005","customerId":"C-005","month":"2024-08","kWh":362000}
];

const opportunities = [
  {"id":"O-RE-001","customerId":"C-001","name":"省エネ設備導入","amount":5000000,"stage":"提案中","due":"2025-09-30","next":"見積提示"},
  {"id":"O-RE-002","customerId":"C-002","name":"太陽光発電導入","amount":8000000,"stage":"初期検討","due":"2025-10-15","next":"現地調査"},
  {"id":"O-RE-003","customerId":"C-003","name":"UPS更新","amount":15000000,"stage":"契約準備","due":"2025-08-20","next":"契約書確認"},
  {"id":"O-RE-004","customerId":"C-004","name":"冷凍設備効率化","amount":7000000,"stage":"ニーズ確認","due":"2025-11-10","next":"ヒアリング"},
  {"id":"O-RE-005","customerId":"C-005","name":"EV充電設備","amount":12000000,"stage":"提案中","due":"2025-09-15","next":"プレゼン"}
];

const tickets = [
  {"id":"T-001","customerId":"C-001","type":"問い合わせ","priority":"中","status":"対応中","opened":"2025-07-05"},
  {"id":"T-002","customerId":"C-002","type":"障害","priority":"高","status":"対応中","opened":"2025-07-08"},
  {"id":"T-003","customerId":"C-003","type":"工事","priority":"中","status":"予定","opened":"2025-07-01"},
  {"id":"T-004","customerId":"C-004","type":"問い合わせ","priority":"低","status":"完了","opened":"2025-06-28"},
  {"id":"T-005","customerId":"C-005","type":"障害","priority":"高","status":"対応中","opened":"2025-07-07"}
];

// 現在選択されている顧客
let selectedCustomer = null;

// 検索関連のデータと状態
const searchState = {
  query: '',
  filters: {
    company: '',
    customer: '',
    genres: [],
    dueFrom: '',
    dueTo: ''
  },
  sort: 'relevance',
  page: 1,
  pageSize: 20,
  results: [],
  totalResults: 0,
  recentSearches: []
};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
  // 顧客セレクターの初期化
  initCustomerSelector();
  
  // 最初の顧客を選択
  if (customers.length > 0) {
    selectCustomer(customers[0].id);
  }
  
  // ナビゲーションの初期化
  initNavigation();
  
  // 検索機能の初期化
  initSearch();
});

// 顧客セレクターの初期化
function initCustomerSelector() {
  const selector = document.getElementById('customer-selector');
  if (!selector) return;
  
  // HTMLに既に存在するオプションを使用するため、オプションの追加は行わない
  
  // 選択変更イベント
  selector.addEventListener('change', (e) => {
    selectCustomer(e.target.value);
  });
}

// 顧客を選択する
function selectCustomer(customerId) {
  selectedCustomer = customers.find(c => c.id === customerId);
  if (!selectedCustomer) return;
  
  // セレクターの値を更新
  const selector = document.getElementById('customer-selector');
  if (selector) {
    selector.value = customerId;
  }
  
  // ダッシュボードを更新
  updateDashboard();
}

// ナビゲーションの初期化
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // アクティブクラスを切り替え
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ダッシュボードを更新
function updateDashboard() {
  if (!selectedCustomer) return;
  
  // タイトルを顧客名に更新
  updatePageTitle();
  
  // 顧客概要を更新
  updateCustomerOverview();
  
  // 契約・料金を更新
  updateContractBilling();
  
  // 使用量トレンドを更新
  updateUsageTrend();
  
  // 商談・案件を更新
  updateOpportunities();
  
  // 問い合わせ/障害を更新
  updateTickets();
  
  // 推奨アクションを更新
  updateRecommendedActions();
}

// 顧客概要を更新
function updateCustomerOverview() {
  const overviewCard = document.getElementById('customer-overview');
  if (!overviewCard) return;
  
  const content = overviewCard.querySelector('.card-content');
  if (!content) return;
  
  content.innerHTML = `
    <div class="data-row"><span class="data-label">企業名:</span> ${selectedCustomer.name}</div>
    <div class="data-row"><span class="data-label">業種:</span> ${selectedCustomer.industry || '未設定'}</div>
    <div class="data-row"><span class="data-label">規模:</span> ${selectedCustomer.size || '未設定'}</div>
    <div class="data-row"><span class="data-label">担当者:</span> ${selectedCustomer.owner || '未設定'}</div>
    <div class="data-row">
      <span class="data-label">タグ:</span> 
      ${selectedCustomer.tags ? selectedCustomer.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '未設定'}
    </div>
  `;
}

// 契約・料金を更新
function updateContractBilling() {
  const contractCard = document.getElementById('contract-billing');
  if (!contractCard) return;
  
  const content = contractCard.querySelector('.card-content');
  if (!content) return;
  
  // 顧客の契約を取得
  const customerContracts = contracts.filter(contract => 
    selectedCustomer.contractIds?.includes(contract.id) || contract.customerId === selectedCustomer.id
  );
  
  // 顧客の請求を取得
  const customerBillings = billings.filter(billing => 
    selectedCustomer.billingIds?.includes(billing.id) || billing.customerId === selectedCustomer.id
  );
  
  if (customerContracts.length > 0) {
    const contract = customerContracts[0]; // 最初の契約を表示
    
    let html = `
      <div class="data-row"><span class="data-label">契約メニュー:</span> ${contract.menu}</div>
      <div class="data-row"><span class="data-label">契約電力:</span> ${contract.kW} kW</div>
      <div class="data-row"><span class="data-label">契約状態:</span> ${contract.status}</div>
      <div class="data-row"><span class="data-label">契約開始日:</span> ${contract.start}</div>
    `;
    
    if (customerBillings.length > 0) {
      const billing = customerBillings[0]; // 最新の請求を表示
      
      html += `
        <div class="data-row" style="margin-top: 1rem;"><span class="data-label">最新請求</span></div>
        <div class="data-row"><span class="data-label">請求月:</span> ${billing.month}</div>
        <div class="data-row"><span class="data-label">請求金額:</span> ${billing.amount.toLocaleString()} 円</div>
        <div class="data-row"><span class="data-label">支払期限:</span> ${billing.due}</div>
        <div class="data-row"><span class="data-label">状態:</span> 
          <span class="${billing.status === '未入金' ? 'badge badge-red' : 'badge badge-green'}">
            ${billing.status}
          </span>
        </div>
      `;
    }
    
    content.innerHTML = html;
  } else {
    content.innerHTML = '<div class="data-row">契約情報がありません</div>';
  }
}

// 使用量トレンドを更新
function updateUsageTrend() {
  const usageCard = document.getElementById('usage-trend');
  if (!usageCard) return;
  
  const content = usageCard.querySelector('.card-content');
  if (!content) return;
  
  // 顧客の使用量を取得
  const customerUsages = usages.filter(usage => 
    selectedCustomer.usageIds?.includes(usage.id) || usage.customerId === selectedCustomer.id
  ).sort((a, b) => a.month.localeCompare(b.month));
  
  if (customerUsages.length > 0) {
    // HTML構造を作成
    content.innerHTML = `
      <div class="chart-container">
        <canvas id="usage-chart"></canvas>
      </div>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>月</th>
              <th>使用量 (kWh)</th>
            </tr>
          </thead>
          <tbody>
            ${customerUsages.slice(0, 5).map(usage => `
              <tr>
                <td>${usage.month}</td>
                <td>${usage.kWh.toLocaleString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    
    // グラフを描画
    createUsageChart(customerUsages);
  } else {
    content.innerHTML = '<div class="data-row">使用量データがありません</div>';
  }
}

// 使用量グラフを作成
function createUsageChart(usageData) {
  const ctx = document.getElementById('usage-chart');
  if (!ctx) return;
  
  // 既存のグラフを破棄（再描画時のエラー防止）
  if (window.usageChart) {
    window.usageChart.destroy();
  }
  
  // データを準備
  const labels = usageData.map(item => {
    // YYYY-MM形式を日本語表記（YYYY年MM月）に変換
    const [year, month] = item.month.split('-');
    return `${year}年${parseInt(month)}月`;
  });
  
  const data = usageData.map(item => item.kWh);
  
  // 前年同月のデータがあれば追加（ダミーデータ）
  const previousYearData = [];
  usageData.forEach(item => {
    const [year, month] = item.month.split('-');
    const prevYear = parseInt(year) - 1;
    // 前年比は実際のデータの90%～110%の間でランダムに生成（ダミー）
    const randomFactor = 0.9 + Math.random() * 0.2;
    previousYearData.push(Math.round(item.kWh * randomFactor));
  });
  
  // グラフカラー
  const mainColor = '#0975B9'; // 九州電力のブルー
  const compareColor = '#999999'; // 比較用グレー
  
  // グラフを作成
  window.usageChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: '今年度使用量',
          data: data,
          borderColor: mainColor,
          backgroundColor: mainColor + '20', // 20は透明度
          borderWidth: 2,
          fill: true,
          tension: 0.3
        },
        {
          label: '前年度使用量',
          data: previousYearData,
          borderColor: compareColor,
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              family: "'Noto Sans JP', sans-serif"
            }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y.toLocaleString() + ' kWh';
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            font: {
              family: "'Noto Sans JP', sans-serif"
            }
          }
        },
        y: {
          beginAtZero: false,
          ticks: {
            font: {
              family: "'Noto Sans JP', sans-serif"
            },
            callback: function(value) {
              return value.toLocaleString() + ' kWh';
            }
          }
        }
      }
    }
  });
}

// 商談・案件を更新
function updateOpportunities() {
  const oppsCard = document.getElementById('opportunities');
  if (!oppsCard) return;
  
  const content = oppsCard.querySelector('.card-content');
  if (!content) return;
  
  // 顧客の案件を取得
  const customerOpps = opportunities.filter(opp => 
    selectedCustomer.opportunityIds?.includes(opp.id) || opp.customerId === selectedCustomer.id
  );
  
  if (customerOpps.length > 0) {
    content.innerHTML = customerOpps.map(opp => `
      <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
        <div class="data-row"><span class="data-label">${opp.name}</span></div>
        <div class="data-row"><span class="data-label">金額:</span> ${opp.amount.toLocaleString()} 円</div>
        <div class="data-row"><span class="data-label">ステージ:</span> ${opp.stage}</div>
        ${opp.due ? `<div class="data-row"><span class="data-label">期限:</span> ${opp.due}</div>` : ''}
        ${opp.next ? `<div class="data-row"><span class="data-label">次アクション:</span> ${opp.next}</div>` : ''}
      </div>
    `).join('');
  } else {
    content.innerHTML = '<div class="data-row">案件情報がありません</div>';
  }
}

// 問い合わせ/障害を更新
function updateTickets() {
  const ticketsCard = document.getElementById('tickets');
  if (!ticketsCard) return;
  
  const content = ticketsCard.querySelector('.card-content');
  if (!content) return;
  
  // 顧客の問い合わせを取得
  const customerTickets = tickets.filter(ticket => 
    selectedCustomer.ticketIds?.includes(ticket.id) || ticket.customerId === selectedCustomer.id
  );
  
  if (customerTickets.length > 0) {
    content.innerHTML = customerTickets.map(ticket => `
      <div style="border-bottom: 1px solid #e5e7eb; padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
        <div class="data-row">
          <span class="data-label">${ticket.type}</span>
          <span class="badge ${
            ticket.priority === '高' ? 'badge-red' : 
            ticket.priority === '中' ? 'badge-yellow' : 
            'badge-green'
          }" style="float: right;">
            ${ticket.priority}
          </span>
        </div>
        <div class="data-row"><span class="data-label">状態:</span> ${ticket.status}</div>
        <div class="data-row"><span class="data-label">受付日:</span> ${ticket.opened}</div>
      </div>
    `).join('');
  } else {
    content.innerHTML = '<div class="data-row">問い合わせ/障害情報がありません</div>';
  }
}

// 推奨アクションを更新
function updateRecommendedActions() {
  const actionsCard = document.getElementById('recommended-actions');
  if (!actionsCard) return;
  
  const content = actionsCard.querySelector('.card-content');
  if (!content) return;
  
  // 推奨アクションを生成
  const actions = [];
  
  // 未入金の請求書があるかチェック
  const customerBillings = billings.filter(billing => 
    selectedCustomer.billingIds?.includes(billing.id) || billing.customerId === selectedCustomer.id
  );
  const unpaidBillings = customerBillings.filter(b => b.status === '未入金');
  if (unpaidBillings.length > 0) {
    actions.push({ type: 'warning', text: '未入金の請求書があります。入金フォローが必要です。' });
  }
  
  // 期限が近い案件があるかチェック
  const customerOpps = opportunities.filter(opp => 
    selectedCustomer.opportunityIds?.includes(opp.id) || opp.customerId === selectedCustomer.id
  );
  const dueOpps = customerOpps.filter(o => {
    if (!o.due) return false;
    const dueDate = new Date(o.due);
    const now = new Date();
    const diffTime = dueDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 14;
  });
  if (dueOpps.length > 0) {
    actions.push({ type: 'info', text: '期限が近い案件があります。進捗確認が必要です。' });
  }
  
  // 優先度の高い問い合わせがあるかチェック
  const customerTickets = tickets.filter(ticket => 
    selectedCustomer.ticketIds?.includes(ticket.id) || ticket.customerId === selectedCustomer.id
  );
  const highPriorityTickets = customerTickets.filter(t => t.priority === '高' && t.status !== '完了');
  if (highPriorityTickets.length > 0) {
    actions.push({ type: 'danger', text: '優先度の高い問い合わせ/障害があります。対応確認が必要です。' });
  }
  
  if (actions.length > 0) {
    content.innerHTML = actions.map(action => `
      <div class="alert alert-${action.type}">
        ${action.text}
      </div>
    `).join('');
  } else {
    content.innerHTML = '<div class="data-row">現在、推奨アクションはありません</div>';
  }
}

// ページタイトルを顧客名に更新
function updatePageTitle() {
  const pageTitleElement = document.querySelector('.page-title h1');
  if (pageTitleElement && selectedCustomer) {
    pageTitleElement.textContent = `${selectedCustomer.name} 360°ビュー`;
  }
}

// 検索機能の初期化
function initSearch() {
  const searchInput = document.getElementById('global-search');
  const searchButton = document.getElementById('search-button');
  const searchModal = document.getElementById('search-modal');
  const closeSearchModal = document.getElementById('close-search-modal');
  const toggleAdvancedFilters = document.getElementById('toggle-advanced-filters');
  const advancedFilters = document.getElementById('advanced-filters');
  const applyFilters = document.getElementById('apply-filters');
  const resetFilters = document.getElementById('reset-filters');
  const sortSelect = document.getElementById('sort-select');
  const pageSizeSelect = document.getElementById('page-size');
  const prevPageButton = document.getElementById('prev-page');
  const nextPageButton = document.getElementById('next-page');
  const dateShortcuts = document.querySelectorAll('.date-shortcut');
  
  // 検索ボタンのクリックイベント
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      if (searchInput && searchInput.value.trim()) {
        searchState.query = searchInput.value.trim();
        searchState.page = 1;
        performSearch();
        showSearchModal();
      }
    });
  }
  
  // 検索入力のEnterキーイベント
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim()) {
        searchState.query = searchInput.value.trim();
        searchState.page = 1;
        performSearch();
        showSearchModal();
      }
    });
    
    // 入力デバウンス（300ms）
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (searchInput.value.trim().length >= 2) {
          // インスタント結果プレビューを表示（上位5件）
          searchState.query = searchInput.value.trim();
          previewSearch();
        }
      }, 300);
    });
  }
  
  // モーダルを閉じる
  if (closeSearchModal) {
    closeSearchModal.addEventListener('click', () => {
      if (searchModal) {
        searchModal.style.display = 'none';
      }
    });
  }
  
  // 高度なフィルターの表示切替
  if (toggleAdvancedFilters) {
    toggleAdvancedFilters.addEventListener('click', () => {
      if (advancedFilters) {
        const isVisible = advancedFilters.style.display !== 'none';
        advancedFilters.style.display = isVisible ? 'none' : 'block';
        toggleAdvancedFilters.textContent = isVisible ? '高度なフィルター' : 'フィルターを閉じる';
      }
    });
  }
  
  // フィルター適用
  if (applyFilters) {
    applyFilters.addEventListener('click', () => {
      updateFiltersFromUI();
      searchState.page = 1;
      performSearch();
    });
  }
  
  // フィルターリセット
  if (resetFilters) {
    resetFilters.addEventListener('click', () => {
      resetFiltersUI();
      searchState.filters = {
        company: '',
        customer: '',
        genres: [],
        dueFrom: '',
        dueTo: ''
      };
      searchState.page = 1;
      performSearch();
    });
  }
  
  // ソート変更
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      searchState.sort = sortSelect.value;
      performSearch();
    });
  }
  
  // ページサイズ変更
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', () => {
      searchState.pageSize = parseInt(pageSizeSelect.value);
      searchState.page = 1;
      performSearch();
    });
  }
  
  // ページネーション
  if (prevPageButton) {
    prevPageButton.addEventListener('click', () => {
      if (searchState.page > 1) {
        searchState.page--;
        performSearch();
      }
    });
  }
  
  if (nextPageButton) {
    nextPageButton.addEventListener('click', () => {
      const totalPages = Math.ceil(searchState.totalResults / searchState.pageSize);
      if (searchState.page < totalPages) {
        searchState.page++;
        performSearch();
      }
    });
  }
  
  // 日付ショートカット
  dateShortcuts.forEach(shortcut => {
    shortcut.addEventListener('click', () => {
      const period = shortcut.dataset.period;
      const dates = getDateRangeForPeriod(period);
      document.getElementById('due-from').value = dates.from;
      document.getElementById('due-to').value = dates.to;
    });
  });
  
  // 検索結果のクリックイベント（結果カードごとに動的に追加）
  document.addEventListener('click', (e) => {
    const resultCard = e.target.closest('.result-card');
    if (resultCard) {
      const resultType = resultCard.dataset.type;
      const resultId = resultCard.dataset.id;
      
      if (resultType === 'customer') {
        // 顧客の場合、360°ビューで表示
        selectCustomer(resultId);
        if (searchModal) {
          searchModal.style.display = 'none';
        }
      } else if (resultType === 'opportunity') {
        // 案件の場合、対応する顧客を選択して案件タブにフォーカス
        const opp = opportunities.find(o => o.id === resultId);
        if (opp) {
          selectCustomer(opp.customerId);
          // 案件カードにスクロール
          const oppCard = document.getElementById('opportunities');
          if (oppCard) {
            oppCard.scrollIntoView({ behavior: 'smooth' });
          }
          if (searchModal) {
            searchModal.style.display = 'none';
          }
        }
      } else if (resultType === 'ticket') {
        // 問い合わせの場合、対応する顧客を選択して問い合わせタブにフォーカス
        const ticket = tickets.find(t => t.id === resultId);
        if (ticket) {
          selectCustomer(ticket.customerId);
          // 問い合わせカードにスクロール
          const ticketCard = document.getElementById('tickets');
          if (ticketCard) {
            ticketCard.scrollIntoView({ behavior: 'smooth' });
          }
          if (searchModal) {
            searchModal.style.display = 'none';
          }
        }
      }
    }
  });
  
  // 最近の検索を読み込む
  loadRecentSearches();
}

// 検索モーダルを表示
function showSearchModal() {
  const searchModal = document.getElementById('search-modal');
  if (searchModal) {
    searchModal.style.display = 'flex';
  }
}

// フィルターをUIから更新
function updateFiltersFromUI() {
  const companyFilter = document.getElementById('company-filter');
  const customerFilter = document.getElementById('customer-filter');
  const genreFilter = document.getElementById('genre-filter');
  const dueFromFilter = document.getElementById('due-from');
  const dueToFilter = document.getElementById('due-to');
  
  searchState.filters.company = companyFilter ? companyFilter.value : '';
  searchState.filters.customer = customerFilter ? customerFilter.value : '';
  
  // 複数選択のジャンルを取得
  searchState.filters.genres = [];
  if (genreFilter) {
    Array.from(genreFilter.selectedOptions).forEach(option => {
      searchState.filters.genres.push(option.value);
    });
  }
  
  searchState.filters.dueFrom = dueFromFilter ? dueFromFilter.value : '';
  searchState.filters.dueTo = dueToFilter ? dueToFilter.value : '';
}

// フィルターUIをリセット
function resetFiltersUI() {
  const companyFilter = document.getElementById('company-filter');
  const customerFilter = document.getElementById('customer-filter');
  const genreFilter = document.getElementById('genre-filter');
  const dueFromFilter = document.getElementById('due-from');
  const dueToFilter = document.getElementById('due-to');
  
  if (companyFilter) companyFilter.value = '';
  if (customerFilter) customerFilter.value = '';
  if (genreFilter) {
    Array.from(genreFilter.options).forEach(option => {
      option.selected = false;
    });
  }
  if (dueFromFilter) dueFromFilter.value = '';
  if (dueToFilter) dueToFilter.value = '';
}

// 期間に応じた日付範囲を取得
function getDateRangeForPeriod(period) {
  const today = new Date();
  const from = new Date(today);
  const to = new Date(today);
  
  switch (period) {
    case 'today':
      // 今日
      break;
    case 'week':
      // 今週（日曜日から土曜日）
      const day = today.getDay();
      from.setDate(today.getDate() - day); // 今週の日曜日
      to.setDate(from.getDate() + 6); // 今週の土曜日
      break;
    case 'month':
      // 今月
      from.setDate(1); // 月初
      to.setMonth(today.getMonth() + 1, 0); // 月末
      break;
    case 'quarter':
      // 今四半期
      const quarter = Math.floor(today.getMonth() / 3);
      from.setMonth(quarter * 3, 1); // 四半期の初日
      to.setMonth(quarter * 3 + 3, 0); // 四半期の最終日
      break;
  }
  
  // YYYY-MM-DD形式に変換
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  return {
    from: formatDate(from),
    to: formatDate(to)
  };
}

// 検索プレビュー（上位5件）
function previewSearch() {
  // 実際のAPIを使用する場合はここでAPIを呼び出す
  // POCのため、静的データから検索
  const results = searchAllData(searchState.query, searchState.filters);
  
  // 上位5件を表示
  const previewResults = results.slice(0, 5);
  
  // ここでプレビュー表示のUIを更新（今回は実装省略）
  console.log('検索プレビュー:', previewResults);
}

// 本検索の実行
function performSearch() {
  // 実際のAPIを使用する場合はここでAPIを呼び出す
  // POCのため、静的データから検索
  const allResults = searchAllData(searchState.query, searchState.filters);
  
  // ソート
  const sortedResults = sortResults(allResults, searchState.sort);
  
  // ページネーション
  const startIndex = (searchState.page - 1) * searchState.pageSize;
  const endIndex = startIndex + searchState.pageSize;
  searchState.results = sortedResults.slice(startIndex, endIndex);
  searchState.totalResults = allResults.length;
  
  // UIを更新
  updateSearchResultsUI();
  
  // 最近の検索に追加
  addToRecentSearches(searchState.query);
}

// 全データから検索
function searchAllData(query, filters) {
  const results = [];
  const normalizedQuery = normalizeText(query.toLowerCase());
  
  // 顧客を検索
  customers.forEach(customer => {
    // フィルターチェック
    if (!passesFilters(customer, 'customer', filters)) return;
    
    // クエリチェック
    const matchScore = getMatchScore(customer, normalizedQuery);
    if (matchScore > 0) {
      results.push({
        type: 'customer',
        id: customer.id,
        title: customer.name,
        company: customer.name,
        customer: customer.owner || '',
        genres: [customer.industry],
        due: null,
        updatedAt: null,
        score: matchScore,
        highlights: getHighlights(customer, normalizedQuery)
      });
    }
  });
  
  // 案件を検索
  opportunities.forEach(opp => {
    // 関連する顧客を取得
    const customer = customers.find(c => c.id === opp.customerId);
    if (!customer) return;
    
    // フィルターチェック
    if (!passesFilters({...opp, industry: customer.industry}, 'opportunity', filters)) return;
    
    // クエリチェック
    const matchScore = getMatchScore({...opp, company: customer.name}, normalizedQuery);
    if (matchScore > 0) {
      results.push({
        type: 'opportunity',
        id: opp.id,
        title: opp.name,
        company: customer.name,
        customer: customer.owner || '',
        genres: [customer.industry],
        due: opp.due,
        updatedAt: null,
        stage: opp.stage,
        amount: opp.amount,
        score: matchScore,
        highlights: getHighlights({...opp, company: customer.name}, normalizedQuery)
      });
    }
  });
  
  // 問い合わせを検索
  tickets.forEach(ticket => {
    // 関連する顧客を取得
    const customer = customers.find(c => c.id === ticket.customerId);
    if (!customer) return;
    
    // フィルターチェック
    if (!passesFilters({...ticket, industry: customer.industry}, 'ticket', filters)) return;
    
    // クエリチェック
    const matchScore = getMatchScore({...ticket, company: customer.name}, normalizedQuery);
    if (matchScore > 0) {
      results.push({
        type: 'ticket',
        id: ticket.id,
        title: `${ticket.type} (${ticket.status})`,
        company: customer.name,
        customer: customer.owner || '',
        genres: [customer.industry],
        due: null,
        updatedAt: ticket.opened,
        priority: ticket.priority,
        score: matchScore,
        highlights: getHighlights({...ticket, company: customer.name}, normalizedQuery)
      });
    }
  });
  
  return results;
}

// フィルターを通過するかチェック
function passesFilters(item, type, filters) {
  // 企業名フィルター
  if (filters.company && type !== 'customer') {
    const company = customers.find(c => c.id === item.customerId)?.name || '';
    if (!company.toLowerCase().includes(filters.company.toLowerCase())) {
      return false;
    }
  } else if (filters.company && type === 'customer') {
    if (!item.name.toLowerCase().includes(filters.company.toLowerCase())) {
      return false;
    }
  }
  
  // お客さま名（担当者）フィルター
  if (filters.customer) {
    const customer = type === 'customer' ? item.owner : 
      customers.find(c => c.id === item.customerId)?.owner || '';
    if (!customer.toLowerCase().includes(filters.customer.toLowerCase())) {
      return false;
    }
  }
  
  // ジャンル（業種）フィルター
  if (filters.genres && filters.genres.length > 0) {
    const industry = type === 'customer' ? item.industry : 
      customers.find(c => c.id === item.customerId)?.industry || '';
    if (!filters.genres.includes(industry)) {
      return false;
    }
  }
  
  // 期限フィルター
  if ((filters.dueFrom || filters.dueTo) && type === 'opportunity' && item.due) {
    const dueDate = new Date(item.due);
    
    if (filters.dueFrom) {
      const fromDate = new Date(filters.dueFrom);
      if (dueDate < fromDate) {
        return false;
      }
    }
    
    if (filters.dueTo) {
      const toDate = new Date(filters.dueTo);
      toDate.setHours(23, 59, 59, 999); // 終日を含める
      if (dueDate > toDate) {
        return false;
      }
    }
  }
  
  return true;
}

// マッチスコアを計算
function getMatchScore(item, query) {
  let score = 0;
  
  // オブジェクトの各フィールドをチェック
  Object.values(item).forEach(value => {
    if (typeof value === 'string') {
      const normalizedValue = normalizeText(value.toLowerCase());
      if (normalizedValue.includes(query)) {
        score += 10;
        // 完全一致の場合はさらにスコアを上げる
        if (normalizedValue === query) {
          score += 20;
        }
      }
    } else if (Array.isArray(value)) {
      // 配列の場合（タグなど）
      value.forEach(v => {
        if (typeof v === 'string') {
          const normalizedValue = normalizeText(v.toLowerCase());
          if (normalizedValue.includes(query)) {
            score += 5;
          }
        }
      });
    }
  });
  
  return score;
}

// テキスト正規化（全角/半角、ひらがな/カタカナ、大小文字を同一視）
function normalizeText(text) {
  return text
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0)) // 全角→半角
    .replace(/[ぁ-ん]/g, s => {
      // ひらがな→カタカナ変換（簡易版）
      const code = s.charCodeAt(0) + 0x60;
      return String.fromCharCode(code);
    });
}

// ハイライト対象を取得
function getHighlights(item, query) {
  const highlights = [];
  
  Object.entries(item).forEach(([key, value]) => {
    if (typeof value === 'string') {
      const normalizedValue = normalizeText(value.toLowerCase());
      if (normalizedValue.includes(query)) {
        highlights.push(key);
      }
    } else if (Array.isArray(value)) {
      value.forEach(v => {
        if (typeof v === 'string') {
          const normalizedValue = normalizeText(v.toLowerCase());
          if (normalizedValue.includes(query)) {
            highlights.push(key);
          }
        }
      });
    }
  });
  
  return highlights;
}

// 結果をソート
function sortResults(results, sortType) {
  return [...results].sort((a, b) => {
    switch (sortType) {
      case 'dueAsc':
        // 期限昇順
        if (!a.due) return 1;
        if (!b.due) return -1;
        return new Date(a.due) - new Date(b.due);
      case 'dueDesc':
        // 期限降順
        if (!a.due) return 1;
        if (!b.due) return -1;
        return new Date(b.due) - new Date(a.due);
      case 'updatedDesc':
        // 更新日降順
        if (!a.updatedAt) return 1;
        if (!b.updatedAt) return -1;
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      case 'relevance':
      default:
        // 関連度（スコア）降順
        return b.score - a.score;
    }
  });
}

// 検索結果UIを更新
function updateSearchResultsUI() {
  const resultsContainer = document.getElementById('search-results');
  const resultsCountEl = document.getElementById('results-count');
  const pageInfoEl = document.getElementById('page-info');
  const prevPageButton = document.getElementById('prev-page');
  const nextPageButton = document.getElementById('next-page');
  
  if (!resultsContainer) return;
  
  // 結果件数を更新
  if (resultsCountEl) {
    resultsCountEl.textContent = searchState.totalResults;
  }
  
  // ページ情報を更新
  const totalPages = Math.ceil(searchState.totalResults / searchState.pageSize);
  if (pageInfoEl) {
    pageInfoEl.textContent = `${searchState.page} / ${totalPages || 1}`;
  }
  
  // ページネーションボタンの状態を更新
  if (prevPageButton) {
    prevPageButton.disabled = searchState.page <= 1;
  }
  if (nextPageButton) {
    nextPageButton.disabled = searchState.page >= totalPages;
  }
  
  // 結果がない場合
  if (searchState.results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="empty-state">
        <p>検索結果がありません</p>
        <p>別のキーワードで検索してみてください</p>
        <p>例: 企業名、担当者名、案件名など</p>
      </div>
    `;
    return;
  }
  
  // 結果を表示
  resultsContainer.innerHTML = searchState.results.map(result => {
    // 結果カードのHTML
    return `
      <div class="result-card" data-type="${result.type}" data-id="${result.id}">
        <div class="result-header">
          <h3 class="result-title">${highlightText(result.title, result.highlights.includes('name') || result.highlights.includes('title'))}</h3>
          <span class="result-type">${getTypeLabel(result.type)}</span>
        </div>
        <div class="result-info">
          <div class="result-info-item">
            <span class="result-info-label">企業:</span>
            ${highlightText(result.company, result.highlights.includes('company'))}
          </div>
          ${result.customer ? `
          <div class="result-info-item">
            <span class="result-info-label">担当:</span>
            ${highlightText(result.customer, result.highlights.includes('customer'))}
          </div>
          ` : ''}
          ${result.due ? `
          <div class="result-info-item">
            <span class="result-info-label">期限:</span>
            ${result.due}
          </div>
          ` : ''}
          ${result.stage ? `
          <div class="result-info-item">
            <span class="result-info-label">ステージ:</span>
            ${result.stage}
          </div>
          ` : ''}
          ${result.priority ? `
          <div class="result-info-item">
            <span class="result-info-label">優先度:</span>
            <span class="badge ${
              result.priority === '高' ? 'badge-red' : 
              result.priority === '中' ? 'badge-yellow' : 
              'badge-green'
            }">${result.priority}</span>
          </div>
          ` : ''}
        </div>
        ${result.genres && result.genres.length > 0 ? `
        <div class="result-tags">
          ${result.genres.map(genre => `<span class="tag">${genre}</span>`).join('')}
        </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// テキストをハイライト
function highlightText(text, shouldHighlight) {
  if (!shouldHighlight || !searchState.query) return text;
  
  // 単純なケース（大文字小文字を区別しない部分一致）
  const regex = new RegExp(searchState.query, 'gi');
  return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

// 結果タイプのラベルを取得
function getTypeLabel(type) {
  switch (type) {
    case 'customer':
      return '顧客';
    case 'opportunity':
      return '案件';
    case 'ticket':
      return '問い合わせ';
    default:
      return type;
  }
}

// 最近の検索を追加
function addToRecentSearches(query) {
  if (!query) return;
  
  // 既存の検索履歴から同じクエリを削除
  searchState.recentSearches = searchState.recentSearches.filter(item => item !== query);
  
  // 先頭に追加
  searchState.recentSearches.unshift(query);
  
  // 最大10件に制限
  if (searchState.recentSearches.length > 10) {
    searchState.recentSearches = searchState.recentSearches.slice(0, 10);
  }
  
  // ローカルストレージに保存
  try {
    localStorage.setItem('recentSearches', JSON.stringify(searchState.recentSearches));
  } catch (e) {
    console.error('ローカルストレージへの保存に失敗しました:', e);
  }
}

// 最近の検索を読み込む
function loadRecentSearches() {
  try {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      searchState.recentSearches = JSON.parse(saved);
    }
  } catch (e) {
    console.error('ローカルストレージからの読み込みに失敗しました:', e);
    searchState.recentSearches = [];
  }
}

// エラーを表示
function showError(message) {
  const main = document.querySelector('main');
  if (!main) return;
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.style.marginBottom = '1rem';
  errorDiv.textContent = message;
  
  main.insertBefore(errorDiv, main.firstChild);
}