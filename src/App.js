import './App.css';

import {useState} from "react";

import CodePrefixForDataModel from "./AppDataModels/CodePrefixForDataModel";
import DataInputForm from "./components/DataInputForm/DataInputForm";
import DataChart from "./components/DataChart/DataChart";
import Expense from "./components/Expense/Expense";
import ExpenseItemModel from "./components/Expense/ExpenseItem/ExpensesItemModel";

function App() {

    const codePrefixDataModel = new CodePrefixForDataModel();
    const [expenseData, setExpenseData] = useState([
        // new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,0,17),
        //     "C1", "ABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
        //     "ITM1","AbcdefghijklmnopqrstuvwxyzAbcd", "AbcdefghijklmnopqrstuvwxyzAbcd-AbcdefghijklmnopqrstuvwxyzAbcd",
        //     "PM1","ABCDEFGHIJKLMNOPQRSTUVWXYZABCD",
        //     "PMINS1","AbcdefghijklmnopqrstuvwxyzAbcd-Abcdefghij",
        //     "INST1", "Abcdefghijklmnopqrst", "0123456789001234567890",
        //     "CR1","Indian Rupee", "INR", "₹"," 0123,456,789,123,45.60"),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2021,0,15),
            "CAT-Grocery", "Grocery",
            "ITM-Vegetable", "Vegetable", "Cabbages and Ginger 1kg each",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            237.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2021,1,20),
            "CAT-Food","Food",
            "ITM-Meat", "Meat product", "Meat product - Lamb 2 kg",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            635.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2021,3,1),
            "CAT-Rent", "Rent",
            "ITM-Condominium", "Condominium", "Rent for the month of March 2021",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "181802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            2967.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2021,5,11),
            "CAT-Grocery", "Grocery",
            "ITM-Vegetable","Vegetables", "Turnip and Potatoes 1 kg each",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            1250.90),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2021,6,23),
            "CAT-Travel", "Travel",
            "ITM-AT","Airline Ticket", "Indian to Thailand Thai airways ticket for 2",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "181802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            2892.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,2,23),
            "CAT-Insurance", "Insurance",
            "ITM-ABI","Airline Baggage Insurance", "Indian to Thailand Thai airways baggage insurance",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "191802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            1250.60),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,0,23),
            "CAT-Insurance", "Insurance",
            "ITM-ABI","Airline Baggage Insurance", "Thailand to India Thai airways baggage insurance",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "191802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            1950.60),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,0,23),
            "CAT-Travel", "Travel",
            "ITM-AT","Airline Ticket", "Thailand to India Thai airways ticket for 2",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "181802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            2901.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,1,15),
            "CAT-Grocery", "Grocery",
            "ITM-Vegetable", "Vegetable", "Cabbages and Ginger 1kg each",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            1247.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,2,20),
            "CAT-Food","Food",
            "ITM-Meat", "Meat product", "Meat product - Lamb 2 kg",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            1615.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,3,1),
            "CAT-Rent", "Rent",
            "ITM-Condominium", "Condominium", "Rent for the month of March 2021",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "181802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            3296.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2022,5,17),
            "CAT-Grocery", "Grocery",
            "ITM-Vegetable","Vegetables", "Turnip and Potatoes 1 kg each",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            1250.90),



        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2023,7,15),
            "CAT-Grocery", "Grocery",
            "ITM-Vegetable", "Vegetable", "Cabbages and Ginger 1kg each",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            1143.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2023,8,20),
            "CAT-Personal","Personal",
            "ITM-Perfume", "Perfume", "Azaro 100ml",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            1595.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2023,9,1),
            "CAT-Rent", "Rent",
            "ITM-Condominium", "Condominium", "Rent for the month of October 2023",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "181802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            2400.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2023,10,11),
            "CAT-Grocery", "Grocery",
            "ITM-Vegetable","Vegetables", "Turnip and Potatoes 1 kg each",
            "PMC-Cash", "Cash",
            "PMN-None", "None",
            "PIL-None", "None", "",
            "CCY-THB", "Thai Bhat",  "THB", "฿",
            231.00),
        new ExpenseItemModel(codePrefixDataModel.getTransactionCode(), new Date(2023,11,23),
            "CAT-Travel", "Travel",
            "ITM-AT","Airline Ticket", "Indian to Thailand Thai airways ticket for 2",
            "PMC-Bank", "Bank",
            "PMN-BB", "Bangkok Bank",
            "PIL-BAN","Bank Account No.", "181802039239",
            "CCY-THB", "Thai Bhat", "THB","฿",
            2700.00)

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
            newExpenseData.currencySymbol.value, currencyName,currency[3], currency[0], newExpenseData.amount+0);

        console.log(newExpenseItem);
        setExpenseData(previousState => [...previousState, newExpenseItem ]);
    }

    return (
        <div>
            <DataInputForm onSubmit={submitHandler}/>
            <DataChart expenseData={expenseData}/>
            <Expense expensesData={expenseData}/>
        </div>
    );
}

export default App;
