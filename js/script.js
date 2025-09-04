// データの読み込み
let customers = [];
let contracts = [];
let billings = [];
let usages = [];
let opportunities = [];
let tickets = [];

// 現在選択されている顧客
let selectedCustomer = null;

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // データの読み込み
    customers = await fetchJSON('data/customers.json');
    contracts = await fetchJSON('data/contracts.json');
    billings = await fetchJSON('data/billings.json');
    usages = await fetchJSON('data/usages.json');
    opportunities = await fetchJSON('data/opportunities.json');
    tickets = await fetchJSON('data/tickets.json');
    
    // 顧客セレクターの初期化
    initCustomerSelector();
    
    // 最初の顧客を選択
    if (customers.length > 0) {
      selectCustomer(customers[0].id);
    }
    
    // ナビゲーションの初期化
    initNavigation();
  } catch (error) {
    console.error('データの読み込みに失敗しました:', error);
    showError('データの読み込みに失敗しました。ページを再読み込みしてください。');
  }
});

// JSONデータを取得する関数
async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  return await response.json();
}

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
      
      // ここで画面切り替えの処理を行う（今回はダッシュボードのみ）
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
