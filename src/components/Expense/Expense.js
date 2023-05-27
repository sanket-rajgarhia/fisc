import "./Expense.css";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
const Expense = () => {

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

export default Expense;