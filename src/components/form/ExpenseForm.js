import React, {useState} from "react";
import "./ExpenseForm.css"
const  ExpenseForm = ()=>{
  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const [date,setDate] = useState("");
    // console.log(title);
  const titlehandler=(event)=>{
    setTitle(event.target.value);
  };
  const amounthandler=(event)=>{
    setAmount(event.target.value);
  };
  const datehandler=(event)=>{
    setDate(event.target.value);
  };

  const formhandler=(event)=>{
      event.preventDefault();
      const expensedata = {
        TITLE: title,
        AMOUNT: amount,
        DATE:new Date(date)
      }
      console.log(expensedata);
      setTitle("");
      setAmount("");
      setDate("");
  }
    return(
      

  <form onSubmit={formhandler}>
   <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={title} id="title" onChange={titlehandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} id="amount" onChange={amounthandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" value={date} id="date" min="2023-01-01" max="2024-12-31" onChange={datehandler} />
        </div>
  </div>
        <div className="new-expense__actions">
       <button type="submit">Add Expense</button>
        </div>

  </form>
)
}

export default ExpenseForm;