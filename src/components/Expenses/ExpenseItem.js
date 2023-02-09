import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const clickHandler = () => {
    setAmount(`${100}`);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
      <button onClick={clickHandler}>Update Amount</button>
    </Card>
  );
};

export default ExpenseItem;
