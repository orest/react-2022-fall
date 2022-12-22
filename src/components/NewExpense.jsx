import { useState, useRef } from "react";

const NewExpense = (props) => {
  console.log("In NewExpense");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const dateInput = useRef();
  const amountInput = useRef();

  const formSubmitHandler = (e) => {
    // expenseName: "Car Purchase",
    // date: "1/4/2021",
    // category: "Cars",
    // amount: "10000.00",

    e.preventDefault();
    // console.log(title);
    // console.log(dateInput.current.value);
    // console.log(amountInput.current.value);
    // console.log(category);
    props.addNewExpense(title, dateInput.current.value, amountInput.current.value, category);
    console.log("submit");
  };

  const titleChangeHandler = (e) => {
    //console.log(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Title
        </label>
        <input type="text" onChange={titleChangeHandler} value={title} className="form-control" id="Title" />
      </div>

      <div className="mb-3">
        <label htmlFor="expenseDate" className="form-label">
          Date
        </label>
        <input ref={dateInput} id="expenseDate" type="date" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input ref={amountInput} id="amount" type="number" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select className="form-select" id="category" onChange={(e) => setCategory(e.target.value)}>
          <option value=""></option>
          <option value="Auto">Auto</option>
          <option value="Books">Books</option>
          <option value="Ent">Entertainment </option>
          <option value="Learning">Learning </option>
          <option value="Vacation">Vacation </option>
          <option value="Food">Food </option>
        </select>
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewExpense;
