import React from 'react'
import Card from '../UI/Card'


function ExpenseDetails(props) {
  return (
    <Card className="expense-item__description">
      <div>{props.LocationOfExpenditure}</div>
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
  )
}

export default ExpenseDetails