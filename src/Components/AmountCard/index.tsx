import React from "react";
import Paper from "@material-ui/core/Paper";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

interface AmountCardProps {
  title: string;
  totalData: {
    totalIncome: number;
    totalExpense: number;
    totalBalance: number;
  };
  icon: any;
}

const AmountCard = (props: AmountCardProps) => {
  const {
    totalData: { totalBalance, totalExpense, totalIncome },
  } = props;
  return (
    <Paper variant="outlined" className="amount-card default-font-color">
      <section className="amount-income flex space-between">
        <section className="amount-income-label">
          <span>Total Income</span>
        </section>

        <section className="amount-income-value">
          <span>Rs. {totalIncome}</span>
        </section>
      </section>

      <section className="amount-expense flex space-between">
        <section className="amount-expense-label">
          <span>Total Expense</span>
        </section>

        <section className="amount-expense-value">
          <span>Rs. {totalExpense}</span>
        </section>
      </section>

      <section className="amount-total flex space-between">
        <section className="amount-total-label">
          <span>Total Balance</span>
        </section>

        <section className="amount-total-value">
          <span>Rs. {totalBalance}</span>
        </section>
      </section>
    </Paper>
  );
};

export default AmountCard;
