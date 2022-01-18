import React,{ useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/card";
import ExpensesFilter from "../../Filter/expenseFilter";

const Expenses = (props) => {

const[selectedYear,setSelectedYear]= useState('2022')

  const getFilterValue = (filteredValue)=>{
   setSelectedYear(filteredValue);

  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSaveFilterValue={getFilterValue} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
