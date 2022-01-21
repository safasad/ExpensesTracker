import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/card";
import ExpensesFilter from "../../Filter/expenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const getFilterValue = (filteredValue) => {
    setSelectedYear(filteredValue);
  };
  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSaveFilterValue={getFilterValue}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList Expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
