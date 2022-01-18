import React,{useState} from 'react';
import "./ExpenseItem.css";
import Calender  from "../calenderComponent/calender";
import Card from "../../UI/card";


const ExpenseItem =(props)=> {
 const[title , setTitle] = useState(props.title);

  const clickHandler= ()=>{
    setTitle("newTitle");
  }
  return (
    <Card className="expense-item">
      <Calender date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price ">$ {props.amount}</div>
      </div>
      <button className="expense-item__price" onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
}

export default ExpenseItem;
