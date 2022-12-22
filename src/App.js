import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import { AppFooter } from "./components/UI/AppFooter";
import AppHeader from "./components/UI/AppHeader";
import Card from "./components/UI/Card";
import PageLayout from "./components/UI/PageLayout";

//const App = () => {
function App() {
  console.log("in APP");
  const [greeting, setGreeting] = useState("init");
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      expenseName: "Learn React from the Best",
      date: "1/1/2021",
      category: "Books",
      amount: "54.45",
      verified: false,
    },
    {
      id: 2,
      expenseName: "Cleaning supplies",
      date: "1/2/2021",
      category: "Auto",
      amount: "102.34",
      verified: false,
    },
    {
      id: 3,
      expenseName: "Car Purchase",
      date: "1/4/2021",
      category: "Cars",
      amount: "10000.00",
      verified: false,
    },
  ]);

  const getExpenseContent = () => {
    let content = [];
    for (let p of data) {
      content.push(<ExpenseItem key={p.id} expenseName={p.expenseName} date={p.date} category={p.category} amount={p.amount} />);
    }
    return content;
  };

  let expContent = data.length ? getExpenseContent() : <div className="alert alert-warning">No Data Found</div>;

  const addItemHandler = () => {
    //greeting = "Hello";
    setGreeting("Hello");
    console.log(greeting);

    let newArray = [...data];
    newArray.push({
      id: newArray.length + 1,
      expenseName: "Car Purchase",
      date: "1/4/2021",
      category: "Cars",
      amount: "1000.00",
      verified: false,
    });

    setData(newArray);
  };

  const addNewExpense = (title, date, amount, category) => {
    console.log(title, date, amount, category);
  };

  function add() {
    var newValue = counter + 1;
    //setCounter(newValue);

    setCounter((old) => {
      return old + 1;
    });
  }

  return (
    <PageLayout>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card bg="primary" title="Add new expense" color="light" margin="3">
              <NewExpense addNewExpense={addNewExpense}></NewExpense>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Card title="Expenses" margin="3" color="white" bg="warning">
              {data.map((p) => (
                <ExpenseItem key={p.id} expenseName={p.expenseName} date={p.date} category={p.category} amount={p.amount} />
              ))}
            </Card>

            {/* <Card title="Expenses" margin="3" color="white" bg="warning">
              {expContent}
            </Card> */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
