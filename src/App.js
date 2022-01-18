// import ExpenseItem from "./Components/ExpenseItemComponent/ExpenseItem";
import Expenses from './Components/EXPENSES/ExpenseItemComponent/expenses'
import NewExpenses from './Components/NewExpenses/NewExpense';
import ExpensesFilter from './Components/Filter/expenseFilter'

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 11, 12),
    },
  ];

  const expensesHandler = (expense)=>{

  }


  return (
    <div className="App">
      <NewExpenses onAddExpense={expensesHandler}  />
     
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;


