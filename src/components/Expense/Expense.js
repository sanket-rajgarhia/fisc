import "./Expense.css";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

import {useState} from "react";

const Expense = (props) => {

    const [expensesData, setExpensesData] = useState(props.expensesData);
    const [isFilterSetToAllForBothMonthAndYear, setIsFilterSetToAllForBothMonthAndYear] = useState(false);

    const filterSelectionHandler = (year, month) => {
        if (year.value === 0) {
            if (month.value === 0) {
                setExpensesData(props.expensesData);
                setIsFilterSetToAllForBothMonthAndYear(true);
            } else {
                setExpensesData(props.expensesData.filter(expenseDataItem => expenseDataItem.itemDate.month === month.label));
                setIsFilterSetToAllForBothMonthAndYear(false);
            }
        } else {
            if (month.value === 0) {
                setExpensesData(props.expensesData.filter(expenseDataItem => expenseDataItem.itemDate.year === year.label));
                setIsFilterSetToAllForBothMonthAndYear(false);
            } else {
                setExpensesData(props.expensesData.filter(expenseDataItem => expenseDataItem.itemDate.year === year.label && expenseDataItem.itemDate.month === month.label));
                setIsFilterSetToAllForBothMonthAndYear(false);
            }
        }
    }

    let expenseItems = expensesData.map(expenseItem => <ExpenseItem key={expenseItem.expenseItemId} expenseItemData={expenseItem} allFilter={isFilterSetToAllForBothMonthAndYear}/>);
   // If expenseItems array is empty then create an ExpenseItem to display the message for items not found
    if(expenseItems.length === 0){
        expenseItems = <ExpenseItem key={'message'}
                                    expenseItemData={{}} allFilter={isFilterSetToAllForBothMonthAndYear}/>;
    }

    return (<Card className="expenses">
        <ExpenseFilter years={props.expensesData
            .map(expenseItem => expenseItem.itemDate.year)
            .filter((value, index, array) => array.indexOf(value) === index)}
                       onFilterSelection={filterSelectionHandler}
        />
        {expenseItems}
    </Card>);

};

export default Expense;