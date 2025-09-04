// 問い合わせ一覧ページ用のJavaScript
let tickets = [];
let customers = [];
let filteredTickets = [];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // データの読み込み
    tickets = await fetchJSON('data/tickets.json');
    customers = await fetchJSON('data/customers.json');
    filteredTickets = [...tickets];
    
    // 問い合わせ一覧の表示
    displayTickets();
    
    // フィルター機能の初期化
    initFilters();
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
        <td>${ticket.status}</td>
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
