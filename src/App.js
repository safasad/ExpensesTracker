import React, { useState } from "react";
// import ExpenseItem from "./Components/ExpenseItemComponent/ExpenseItem";
import Expenses from "./Components/EXPENSES/ExpenseItemComponent/expenses";
import NewExpenses from "./Components/NewExpenses/NewExpense";
// import ExpensesFilter from "./Components/Filter/expenseFilter";
let prevExpenses = [];

/**
 * @purpose - Read all expenses from local storage (if exists)
 */
const readFromLocalStorage = () => {
  const parsedData = JSON.parse(localStorage.getItem("expenses"));
  if (parsedData) {
    // Convert the date from string to Date object
    parsedData.forEach((expense) => {
      expense.date = new Date(expense.date)
    });

    prevExpenses = [...parsedData];
  }
};

function App() {
  // Read from local storage all saved expenses
  readFromLocalStorage();
  let [expenses, setExpenses] = useState(prevExpenses);

  const expensesHandler = (expense) => {
    //to make new array with new expense + old array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpenses onAddExpense={expensesHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
