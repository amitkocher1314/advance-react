import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";

const ExpenseItem = (props)=>{
  const [title,setTitle] = useState(props.title);
    function eventhandler(){
        setTitle("amit");        
        console.log("button clicked");
    }
    return (
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.price}</div>
          </div>
          <button onClick={eventhandler}>Demo button</button>
        </Card>
       
      );
}
export default ExpenseItem;