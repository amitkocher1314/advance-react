import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./Form.css";
function Form(props){
    const savehandler = (data)=>{
        const datawithkey ={...data,id:Math.random().toString()};
        props.ongetdata(datawithkey)
    }
    return(
        <div className="new-expense">
        <ExpenseForm onsavedata={savehandler}/>
     </div>
        )
}
export default Form;