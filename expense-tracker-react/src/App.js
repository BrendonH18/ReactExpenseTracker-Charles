import './App.css';
import Header from './Components/Header';
import InputExpense from './Components/inputExpense';
import DisplayExpense from './Components/displayExpense';
import React from 'react';
import useLocalStorage from './Components/useLocalStorage';

const App = () => {

  const tableData = [
    {
      date: "2/8/2023",
      description: "1",
      amount: 1,
      merchant: "One"
    },
    {
      date: "2/9/2023",
      description: "2",
      amount: 2,
      merchant: "Two"
    },
    {
      date: "2/10/2023",
      description: "3",
      amount: 3,
      merchant: "Three"
    }
  ]
  
  const [expenses, setExpenses] = useLocalStorage("expenseTable", tableData);

  return (
    <div className="App">
      <Header />
      <InputExpense expenses={expenses} setExpenses={setExpenses} />
      <DisplayExpense expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
