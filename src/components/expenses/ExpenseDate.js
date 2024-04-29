import "./ExpenseDate.css";
import React from "react";
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
const ExpenseDate = (props)=> {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();
    const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  
    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{date}</div>
      </div>
    );
  }
  
  export default ExpenseDate;