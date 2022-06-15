
import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";


let DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'School Fee',
        amount: 150,
        date: new Date(2022, 4, 14)
    },
    {
        id: 'e2',
        title: 'Books',
        amount: 250,
        date: new Date(2022, 5, 15)
    },
    {
        id: 'e3',
        title: 'Food',
        amount: 450,
        date: new Date(2022, 1, 28)
    },
    {
        id: 'e4',
        title: 'House Rent',
        amount: 550,
        date: new Date(2022, 7, 21)
    },
];

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

    const addExpenseHandler = (expense) => {
        const updatedExpenses = [expense, ...expenses];
        setExpenses(updatedExpenses);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
}

export default App;