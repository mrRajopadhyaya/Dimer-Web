export interface AnalyticsState {
  totalData: TotalData;
  expenseByCategory: ExpenseCategory;
  expenseByDate: ExpenseDate[];
}

export interface TotalData {
  totalBalance: number;
  totalExpense: number;
  totalIncome: number;
}

export interface ExpenseCategory{
  label: string[],
  value: number[]
}

export interface ExpenseDate {
  _id: string;
  amount: number;
}