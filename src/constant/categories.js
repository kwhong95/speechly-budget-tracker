const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: '사업', amount: 0, color: incomeColors[0] },
  { type: '투자', amount: 0, color: incomeColors[1] },
  { type: '부수입', amount: 0, color: incomeColors[2] },
  { type: '예금', amount: 0, color: incomeColors[3] },
  { type: '당첨금', amount: 0, color: incomeColors[4] },
  { type: '선물', amount: 0, color: incomeColors[5] },
  { type: '급여', amount: 0, color: incomeColors[6] },
  { type: '저축', amount: 0, color: incomeColors[7] },
  { type: '임대료', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: '청구비', amount: 0, color: expenseColors[0] },
  { type: '차량비', amount: 0, color: expenseColors[1] },
  { type: '의류비', amount: 0, color: expenseColors[2] },
  { type: '여행', amount: 0, color: expenseColors[3] },
  { type: '음식', amount: 0, color: expenseColors[4] },
  { type: '쇼핑', amount: 0, color: expenseColors[5] },
  { type: '집', amount: 0, color: expenseColors[6] },
  { type: '취미 & 오락', amount: 0, color: expenseColors[7] },
  { type: '핸드폰', amount: 0, color: expenseColors[8] },
  { type: '애완동물', amount: 0, color: expenseColors[9] },
  { type: '기타', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};