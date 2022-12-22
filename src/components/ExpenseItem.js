import { useState, useRef } from "react";

function ExpenseItem(props) {
  //const [x,setX] =useState()
  // const myState = useState();
  // const x = myState[0];
  // const setX = myState[1];

  function formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  function currencyFormat(num) {
    if (num) {
      return "$" + (+num).toFixed(2);
    }
  }

  return (
    <div className="row expense-item">
      <div className="col-2">{formatDate(props.date)}</div>
      <div className="col">{props.expenseName}</div>
      <div className="col-2"> {props.category} </div>
      <div className="col-2">{currencyFormat(props.amount)}</div>
    </div>
  );
}

export default ExpenseItem;
