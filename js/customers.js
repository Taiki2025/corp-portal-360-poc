// 顧客一覧ページ用のJavaScript
let customers = [];
let filteredCustomers = [];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // 顧客データの読み込み
    customers = await fetchJSON('data/customers.json');
    filteredCustomers = [...customers];
    
    // 顧客一覧の表示
    displayCustomers();
    
    // 検索機能の初期化
    initSearch();
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
