import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 245.53,
      date: new Date(2022, 2, 3),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 45.53,
      date: new Date(2022, 5, 24),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 45.53,
      date: new Date(2022, 9, 2),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 455.53,
      date: new Date(2022, 7, 24),
    },
  ];
  return (
    <div className="App">
      <h2>Lets get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
