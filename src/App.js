import Expenses from "./components/expenses/Expenses";
import Form from "./components/form/Form";
import React, {useState} from "react";

function App() {
  const [expenses,setExpenses] = useState([
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ]);
 
  
   // OR const [newExpensed,setnewExpensed] = useState(expenses); //THIS IS ALSO CORRECT BUT UPPER SAVE MAKING OF EXTRA ONE VARIABLE
 
  
  const gotDataAtCommonParent = (data)=>{
   // setExpenses([...expenses,data]); this dont solve problem of asynch task below code does
    setExpenses((prevState)=>{
      return[data,...prevState]
    })
    // //console.log(data);
  }
 
  
  return (
    <div>
      <h2>Let's get Started</h2>
      <Form ongetdata = {gotDataAtCommonParent}/>
      <Expenses expenses={expenses} />
      
    </div>
  );
  
}

export default App;
