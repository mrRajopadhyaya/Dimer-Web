export interface TransactionState {
  income: any;
  expense: any;
  transactionList: Transaction[];
  transactionCount: number;
}

export interface Transaction {
  type: string;
  category: string;
  title: string;
  amount: string;
}
