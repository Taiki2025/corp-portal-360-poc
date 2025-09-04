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
  
  {"id":"U-2025-07-002","customerId":"C-002","month":"2025-07","kWh":85000},
  {"id":"U-2025-06-002","customerId":"C-002","month":"2025-06","kWh":82000},
  {"id":"U-2025-05-002","customerId":"C-002","month":"2025-05","kWh":80000},
  
  {"id":"U-2025-07-003","customerId":"C-003","month":"2025-07","kWh":450000},
  {"id":"U-2025-06-003","customerId":"C-003","month":"2025-06","kWh":435000},
  {"id":"U-2025-05-003","customerId":"C-003","month":"2025-05","kWh":440000},
  
  {"id":"U-2025-07-004","customerId":"C-004","month":"2025-07","kWh":95000},
  {"id":"U-2025-06-004","customerId":"C-004","month":"2025-06","kWh":92000},
  {"id":"U-2025-05-004","customerId":"C-004","month":"2025-05","kWh":93000},
  
  {"id":"U-2025-07-005","customerId":"C-005","month":"2025-07","kWh":380000},
  {"id":"U-2025-06-005","customerId":"C-005","month":"2025-06","kWh":365000},
  {"id":"U-2025-05-005","customerId":"C-005","month":"2025-05","kWh":370000}
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
});

// 顧客セレクターの初期化
function initCustomerSelector() {
  const selector = document.getElementById('customer-selector');
  if (!selector) return;
  
  // オプションをクリア
  selector.innerHTML = '';
  
  // 顧客オプションを追加
  customers.forEach(customer => {
    const option = document.createElement('option');
    option.value = customer.id;
    option.textContent = customer.name;
    selector.appendChild(option);
  });
  
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
    content.innerHTML = `
      <div class="chart-container">
        <div class="chart-placeholder">グラフ表示エリア (静的HTMLのため実際のグラフは表示されません)</div>
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
  } else {
    content.innerHTML = '<div class="data-row">使用量データがありません</div>';
  }
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