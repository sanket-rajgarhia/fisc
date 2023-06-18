import "./Expense.css";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

import {useState} from "react";

const Expense = (props) => {

    const [expensesData, setExpensesData] = useState(props.expensesData);

    const filterSelectionHandler = (year, month) => {
        if (year.value == 0) {
            if (month.value == 0) {
                setExpensesData(props.expensesData);
            } else {
                setExpensesData(props.expensesData.filter(expenseDataItem => expenseDataItem.itemDate.month === month.label));
            }
        } else {
            if (month.value == 0) {
                setExpensesData(props.expensesData.filter(expenseDataItem => expenseDataItem.itemDate.year === year.label));
            } else {
                setExpensesData(props.expensesData.filter(expenseDataItem => expenseDataItem.itemDate.year === year.label &&
                    expenseDataItem.itemDate.month === month.label));
            }
        }
    }

    return (
        <Card className="expenses">
            <ExpenseFilter years={
                props.expensesData
                    .map(expenseItem => expenseItem.itemDate.year)
                    .filter((value, index, array) => array.indexOf(value) === index)}
                           onFilterSelection={filterSelectionHandler}
            />

            {expensesData.map(expenseItem => <ExpenseItem key={expenseItem.expenseItemId}
                                                          expenseItemData={expenseItem}/>)}
        </Card>
    );

};

export default Expense;