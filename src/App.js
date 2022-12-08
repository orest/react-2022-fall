import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/UI/Card";

//const App = () => {
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card title="Expenses" margin="5" color="white" bg="warning">
            <ExpenseItem expenseName="Learn React from the best" date="1/1/2021" category="Books" amount="54.45" />
            <ExpenseItem expenseName="Cleaning supplies " date="1/2/2021" category="Auto" amount="102.34" />
          </Card>

          <div className="card mt-3">
            <div className="card-header text-white  bg-primary">Expenses </div>
            <div className="card-body">
              <ExpenseItem expenseName="Learn React from the best" date="1/1/2021" category="Books" amount="54.45" />
              <ExpenseItem expenseName="Cleaning supplies " date="1/2/2021" category="Auto" amount="102.34" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
