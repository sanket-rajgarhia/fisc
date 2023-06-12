import "./Expense.css";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expense = (props) => {

    return(
        <Card className="expenses">
            <ExpenseItem expenseData={props.expensesData[0]}/>
            <ExpenseItem expenseData={props.expensesData[1]}/>
            <ExpenseItem expenseData={props.expensesData[0]}/>
            <ExpenseItem expenseData={props.expensesData[0]}/>
            <ExpenseItem expenseData={props.expensesData[0]}/>
        </Card>
    );

};

export default Expense;