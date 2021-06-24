import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {id:1,expenseDate:new Date(2021,5,22), expenseTitle : 'Amazon dot echo con reloj', expenseAmount:38.99 },
    {id:2,expenseDate:new Date(2021,5,20), expenseTitle : 'Drill Xiaomi', expenseAmount:44.01},
    {id:3,expenseDate:new Date(2021,5,18), expenseTitle : 'Camara Xiaomi', expenseAmount:45.02}
  ];


  return (
    <div>
      <h2>Esto es un titulo</h2>
      <Expenses expenses ={expenses} />
    </div>
  );


}

export default App;
