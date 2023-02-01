import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Paper",
      amount: 266.99,
      date: new Date(2021, 1, 15),
      LocationOfExpenditure: "chandigarh",
    },
    {
      id: 2,
      title: "Wooden Chair",
      amount: 216.99,
      date: new Date(2021, 8, 1),
      LocationOfExpenditure: "moon",
    },
    {
      id: 3,
      title: "Pencils",
      amount: 166.99,
      date: new Date(2021, 3, 22),
      LocationOfExpenditure: "klka",
    },
    {
      id: 4,
      title: "Ball Pens",
      amount: 223.99,
      date: new Date(2021, 6, 20),
      LocationOfExpenditure: "hydrabad",
    },
  ];
  return (
    <div className="App">
      <h1>Let's Learn React</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
    </div>
  );
}

export default App;
