import React  from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props)=>{
    const dropdownChangeHandler=(event)=>{
     props.onChangefilter(event.target.value);
   //  console.log(event.target.value)
    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control"> 
               <label htmlFor="year-dropdown">
                   filter by year
               </label>
              
               <select
               onChange={dropdownChangeHandler}
               value={props.selected}
               id="year-dropdown">
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
               </select>

            </div>
        </div>
    );
};

export default ExpenseFilter;