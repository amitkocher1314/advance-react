import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from "react";
const  Expenses = (props) => {
  const [filteredyear,setFilterYear] = useState("2023");
  const changeFilterHandler = (selectedYear)=>{
     setFilterYear(selectedYear)
  };
   

  const filteredExpenses =props.expenses.filter((expense)=>{
     return expense.date.getFullYear().toString() === filteredyear
  }
)

let expensecount = <p>No expense Found</p>;
if(filteredExpenses.length > 0){
  expensecount =  filteredExpenses.map((expense) => {
    return (
       <div key={expense.id}>
      <ExpenseItem
        
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
     {filteredExpenses.length === 1 && (<p>Only one expense found. Add more expense</p> )} 
      </div>
    );
  });
}

    return (
      <Card className="expenses">
         <ExpenseFilter
           selected={filteredyear}
           onChangefilter = {changeFilterHandler}
         />
        {/* {props.expenses.map((expense) => { */}
         {expensecount}
        
      </Card>
   
      
    );
  };
  
  export default Expenses;