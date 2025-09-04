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

// フィルタリングされた顧客一覧
let filteredCustomers = [...customers];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
  // 顧客一覧の表示
  displayCustomers();
  
  // 検索機能の初期化
  initSearch();
});

// 顧客一覧を表示
function displayCustomers() {
  const tbody = document.getElementById('customers-tbody');
  if (!tbody) return;
  
  tbody.innerHTML = filteredCustomers.map(customer => `
    <tr>
      <td>${customer.name}</td>
      <td>${customer.industry || '-'}</td>
      <td>${customer.size || '-'}</td>
      <td>${customer.owner || '-'}</td>
      <td>
        ${customer.tags ? customer.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '-'}
      </td>
      <td>
        <button class="btn btn-primary" onclick="viewCustomer('${customer.id}')">詳細</button>
      </td>
    </tr>
  `).join('');
}

// 検索機能の初期化
function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    filteredCustomers = customers.filter(customer => 
      customer.name.toLowerCase().includes(searchTerm) ||
      (customer.industry && customer.industry.toLowerCase().includes(searchTerm)) ||
      (customer.owner && customer.owner.toLowerCase().includes(searchTerm))
    );
    
    displayCustomers();
  });
}

// 顧客詳細を表示（ダッシュボードに遷移）
function viewCustomer(customerId) {
  // ダッシュボードに遷移し、該当顧客を選択
  window.location.href = `index.html?customer=${customerId}`;
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