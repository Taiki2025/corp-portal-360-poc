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

const tickets = [
  {"id":"T-001","customerId":"C-001","type":"問い合わせ","priority":"中","status":"対応中","opened":"2025-07-05"},
  {"id":"T-002","customerId":"C-002","type":"障害","priority":"高","status":"対応中","opened":"2025-07-08"},
  {"id":"T-003","customerId":"C-003","type":"工事","priority":"中","status":"予定","opened":"2025-07-01"},
  {"id":"T-004","customerId":"C-004","type":"問い合わせ","priority":"低","status":"完了","opened":"2025-06-28"},
  {"id":"T-005","customerId":"C-005","type":"障害","priority":"高","status":"対応中","opened":"2025-07-07"}
];

// フィルタリングされた問い合わせ一覧
let filteredTickets = [...tickets];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
  // 問い合わせ一覧の表示
  displayTickets();
  
  // フィルター機能の初期化
  initFilters();
});

// 問い合わせ一覧を表示
function displayTickets() {
  const tbody = document.getElementById('tickets-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = filteredTickets.map(ticket => {
    const customer = customers.find(c => c.id === ticket.customerId);
    return `
      <tr>
        <td>${ticket.id}</td>
        <td>${customer ? customer.name : '不明'}</td>
        <td>${ticket.type}</td>
        <td>
          <span class="badge badge-${getPriorityClass(ticket.priority)}">
            ${ticket.priority}
          </span>
        </td>
        <td>
          <span class="badge ${getStatusClass(ticket.status)}">
            ${ticket.status}
          </span>
        </td>
        <td>${ticket.opened}</td>
      </tr>
    `;
  }).join('');
}

// 優先度に応じたCSSクラスを取得
function getPriorityClass(priority) {
  switch (priority) {
    case '高': return 'red';
    case '中': return 'yellow';
    case '低': return 'green';
    default: return 'gray';
  }
}

// 状態に応じたCSSクラスを取得
function getStatusClass(status) {
  switch (status) {
    case '対応中': return 'badge-blue';
    case '予定': return 'badge-yellow';
    case '完了': return 'badge-green';
    default: return 'badge-gray';
  }
}

// フィルター機能の初期化
function initFilters() {
  const priorityFilter = document.getElementById('priority-filter');
  const statusFilter = document.getElementById('status-filter');
  
  if (priorityFilter) {
    priorityFilter.addEventListener('change', applyFilters);
  }
  
  if (statusFilter) {
    statusFilter.addEventListener('change', applyFilters);
  }
}

// フィルターを適用
function applyFilters() {
  const priorityFilter = document.getElementById('priority-filter');
  const statusFilter = document.getElementById('status-filter');
  
  const selectedPriority = priorityFilter ? priorityFilter.value : '';
  const selectedStatus = statusFilter ? statusFilter.value : '';
  
  filteredTickets = tickets.filter(ticket => {
    const priorityMatch = !selectedPriority || ticket.priority === selectedPriority;
    const statusMatch = !selectedStatus || ticket.status === selectedStatus;
    return priorityMatch && statusMatch;
  });
  
  displayTickets();
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