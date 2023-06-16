import './App.css';

import {useState} from "react";

import CodePrefixForDataModel from "./AppDataModels/CodePrefixForDataModel";
import DataInputForm from "./components/DataInputForm/DataInputForm";
import Expense from "./components/Expense/Expense";
import ExpenseItemModel from "./components/Expense/ExpenseItem/ExpensesItemModel";

function App() {

    const codePrefixDataModel = new CodePrefixForDataModel();
    const [expenseData, setExpenseData] = useState([
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2023,0,17),
            "C1", "ABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
            "ITM1","AbcdefghijklmnopqrstuvwxyzAbcd", "AbcdefghijklmnopqrstuvwxyzAbcd-AbcdefghijklmnopqrstuvwxyzAbcd",
            "PM1","ABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
            "PMINS1","AbcdefghijklmnopqrstuvwxyzAbcd-Abcdefghij",
            "INST1", "Abcdefghijklmnopqrst", "0123456789001234567890",
            "CR1","Indian Rupee", "INR", "₹","0123,456,789,123,45.60"),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2023,2,23),
            "C2", "TRAVEL",
            "ITM2","Airline Ticket", "Indian to Thailand Thai airways ticket for 2",
            "PM2","BANK",
            "PMINS2","HDFC Bank",
            "INST2", "Bank Account", "06501502000015060",
            "CR1","Indian Rupee", "INR", "₹", "27892.60")
    ]);

    const submitHandler = (newExpenseData) => {
        const currency = newExpenseData.currencySymbol.label.split(' ');
        const currencyName = currency.splice(currency.indexOf('-')+1).join(' ');
        const transactionDateArray = newExpenseData.transactionDate.split('-');

        const newExpenseItem = new ExpenseItemModel(
            codePrefixDataModel.getTransactionCode(),
            new Date(transactionDateArray[0], transactionDateArray[1]-1, transactionDateArray[2]),
            newExpenseData.transactionCategory.value, newExpenseData.transactionCategory.label,
            newExpenseData.transactionItem.value, newExpenseData.transactionItem.label, newExpenseData.narration,
            newExpenseData.paymentMode.value, newExpenseData.paymentMode.label,
            newExpenseData.paymentMerchant.value, newExpenseData.paymentMerchant.label,
            newExpenseData.instrumentLabel.value, newExpenseData.instrumentLabel.label, newExpenseData.instrumentNo,
            newExpenseData.currencySymbol.value, currencyName,currency[3], currency[0], newExpenseData.amount);

        console.log(newExpenseItem);

        setExpenseData([...expenseData, newExpenseItem ]);
    }

    return (
        <div>
            <DataInputForm onSubmit={submitHandler}/>
            <Expense expensesData={expenseData}/>
        </div>
    );
}

export default App;
