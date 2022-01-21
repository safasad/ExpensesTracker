import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props)=>{

    let expensesContent = <p>No Expenses is found</p>;
    if (props.Expenses.length === 0) {
      return <h2 className="expenses-list__fallback">{expensesContent}</h2>; 
    }
     return <ul className="expenses-list">
         {props.Expenses.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
      ))
      }
     </ul>;

}


export default ExpensesList;