import "./Expense.css";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

const Expense = (props) => {

    return(
        <Card className="expenses">
            {props.expensesData.map(expenseItem => <ExpenseItem key={expenseItem.expenseItemId} expenseData={expenseItem}/>)}
        </Card>
    );

};

export default Expense;