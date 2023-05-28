import "./Expense.css";

import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

import ExpenseItemModel from "./ExpenseItem/ExpensesItemModel";

const Expense = () => {

    const expensesData = [
        new ExpenseItemModel(new Date(2023,0,17),
            "C1", "ABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
            "ITM1","AbcdefghijklmnopqrstuvwxyzAbcd", "AbcdefghijklmnopqrstuvwxyzAbcd-AbcdefghijklmnopqrstuvwxyzAbcd",
            "PM1","ABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
            "PMINS1","AbcdefghijklmnopqrstuvwxyzAbcd-Abcdefghij",
            "INST1", "Abcdefghijklmnopqrst", "0123456789001234567890",
            "CR1","Indian Rupee", "INR", "0123,456,789,123,45.60"),
        new ExpenseItemModel(new Date(2023,2,23),
            "C2", "TRAVEL",
            "ITM2","Airline Ticket", "Indian to Thailand Thai airways ticket for 2",
            "PM2","BANK",
            "PMINS2","HDFC Bank",
            "INST2", "Bank Account", "06501502000015060",
            "CR1","Indian Rupee", "INR", "27892.60")

    ]

    return(
        <Card className="expenses">
            <ExpenseItem expenseData={expensesData[0]}/>
            <ExpenseItem expenseData={expensesData[1]}/>
            <ExpenseItem expenseData={expensesData[0]}/>
            <ExpenseItem expenseData={expensesData[0]}/>
            <ExpenseItem expenseData={expensesData[0]}/>
        </Card>
    );

}

export default Expense;