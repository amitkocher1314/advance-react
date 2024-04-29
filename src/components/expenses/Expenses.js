import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";
const  Expenses = (props) => {
 
    return (
      <Card className="expenses">
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              date={expense.date}
              price={expense.price}
            />
          );
        })}
      
      </Card>
   
      
    );
  };
  
  export default Expenses;