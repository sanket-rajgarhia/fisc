import "./Expenses.css";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
const Expenses = () => {

    return(
        <div className="expenses">
            <ExpenseItem/>
            <ExpenseItem/>
            <ExpenseItem/>
            <ExpenseItem/>
            <ExpenseItem/>
        </div>
    );

}

export default Expenses;