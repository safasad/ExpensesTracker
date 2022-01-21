import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");
  let [enteredDate, setEnteredDate] = useState("");

  const setTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const setAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const setDate = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    saveExpenseDataToLocalStorage(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={setTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={setAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={setDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onstopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

/* Handler function*/
/**
 * @purpose - Add the new expense to the local storage
 */
const saveExpenseDataToLocalStorage = (expenseData) => {
  // Save the data into the localStorage
  const savedExpenses = JSON.parse(localStorage.getItem("expenses"));

  if (savedExpenses) {
    savedExpenses.push(expenseData);
    localStorage.setItem("expenses", JSON.stringify(savedExpenses));
  } else {
    localStorage.setItem("expenses", JSON.stringify([expenseData]));
  }
};
export default ExpenseForm;
