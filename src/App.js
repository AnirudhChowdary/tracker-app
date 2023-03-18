// import ExpenseItem  from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import "./components/Expenses.css"


function App() {

  const expenseItems = [
    {id : "e1" ,title : "car insurance" , amount : 23 , date : new Date(2023,3,5)},
    { id : 'e2',title : "bike insurance" , amount : 20 , date : new Date(2023,3,6)},
    { id : "e3",title : "life insurance" , amount : 230 , date : new Date(2023,3,7)},
  ];


  return (
    <div className="expenses">
     <Expenses items={expenseItems} />
    </div>
  );
}

export default App;
