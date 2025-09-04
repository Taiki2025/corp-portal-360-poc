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

const opportunities = [
  {"id":"O-RE-001","customerId":"C-001","name":"省エネ設備導入","amount":5000000,"stage":"提案中","due":"2025-09-30","next":"見積提示"},
  {"id":"O-RE-002","customerId":"C-002","name":"太陽光発電導入","amount":8000000,"stage":"初期検討","due":"2025-10-15","next":"現地調査"},
  {"id":"O-RE-003","customerId":"C-003","name":"UPS更新","amount":15000000,"stage":"契約準備","due":"2025-08-20","next":"契約書確認"},
  {"id":"O-RE-004","customerId":"C-004","name":"冷凍設備効率化","amount":7000000,"stage":"ニーズ確認","due":"2025-11-10","next":"ヒアリング"},
  {"id":"O-RE-005","customerId":"C-005","name":"EV充電設備","amount":12000000,"stage":"提案中","due":"2025-09-15","next":"プレゼン"}
];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
  // 案件ボードの表示
  displayKanbanBoard();
});

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
    }).join('') || '<div class="empty-state">案件がありません</div>';
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