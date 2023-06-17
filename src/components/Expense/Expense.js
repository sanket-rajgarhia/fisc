import "./Expense.css";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const Expense = (props) => {

    const filterSelectionHandler = (year, month) => {
        console.log(year);
        console.log(month);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter years={
                props.expensesData
                    .map(expenseItem => expenseItem.itemDate.year)
                    .filter((value, index, array) => array.indexOf(value) === index)}
                           onFilterSelection={filterSelectionHandler}
            />

            {props.expensesData.map(expenseItem => <ExpenseItem key={expenseItem.expenseItemId}
                                                                expenseData={expenseItem}/>)}
        </Card>
    );

};

export default Expense;