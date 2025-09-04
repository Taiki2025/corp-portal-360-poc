// 案件ボードページ用のJavaScript
let opportunities = [];
let customers = [];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // データの読み込み
    opportunities = await fetchJSON('data/opportunities.json');
    customers = await fetchJSON('data/customers.json');
    
    // 案件ボードの表示
    displayKanbanBoard();
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

// 案件ボードを表示
function displayKanbanBoard() {
  // 各ステージに案件を配置
  const stages = {
    'initial-stage': ['初期検討'],
    'needs-stage': ['ニーズ確認'],
    'proposal-stage': ['提案中'],
    'contract-stage': ['契約準備']
  };
  
  Object.keys(stages).forEach(stageId => {
    const stageContainer = document.getElementById(stageId);
    if (!stageContainer) return;
    
    const stageName = stages[stageId][0];
    const stageOpportunities = opportunities.filter(opp => opp.stage === stageName);
    
    stageContainer.innerHTML = stageOpportunities.map(opp => {
      const customer = customers.find(c => c.id === opp.customerId);
      return `
        <div class="kanban-item">
          <div class="kanban-item-header">
            <h3>${opp.name}</h3>
            <span class="amount">${opp.amount.toLocaleString()} 円</span>
          </div>
          <div class="kanban-item-body">
            <p><strong>顧客:</strong> ${customer ? customer.name : '不明'}</p>
            <p><strong>ステージ:</strong> ${opp.stage}</p>
            ${opp.due ? `<p><strong>期限:</strong> ${opp.due}</p>` : ''}
            ${opp.next ? `<p><strong>次アクション:</strong> ${opp.next}</p>` : ''}
          </div>
          <div class="kanban-item-actions">
            <button class="btn btn-primary" onclick="viewOpportunity('${opp.id}')">詳細</button>
          </div>
        </div>
      `;
    }).join('');
  });
}

// 案件詳細を表示
function viewOpportunity(opportunityId) {
  // ここで案件詳細モーダルや詳細ページに遷移
  alert(`案件ID: ${opportunityId} の詳細を表示します`);
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
