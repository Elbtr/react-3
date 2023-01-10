import React, { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 282.23,
    date: new Date("March 28 2022"),
  },
  {
    id: "e2",
    title: "New Tv",
    amount: 282.23,
    date: new Date("March 28 2022"),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 282.23,
    date: new Date("March 28 2022"),
  },
  {
    id: "e4",
    title: "Bicycel",
    amount: 282.23,
    date: new Date("March 28 2022"),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
