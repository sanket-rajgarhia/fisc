import "./DataInputForm.css";

import CreatableSelect from 'react-select/creatable';
import {useState} from "react";

import Card from "../Card/Card";
import DataModelPopulation from "../../AppDataModels/DataModelPopulation";

const DataInputForm = (props) => {

    const formData = new DataModelPopulation();

    const getCurrentDate = () => {
        const today = new Date(Date.now());
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();

        month = month.toString().length === 1 ? "0" + month : month;
        date = date.toString().length === 1 ? "0" + date : date;

        return year + "-" + month + "-" + date;
    };

    const [selectedTransactionDate, setTransactionDate] = useState(getCurrentDate());
    const [selectedTransactionCategory, setTransactionCategory] = useState('');
    const [selectedTransactionItem, setTransactionItem] = useState('');
    const [typedNarration, setNarration] = useState('');
    const [selectedPaymentMode, setPaymentMode] = useState('');
    const [selectedPaymentMerchant, setPaymentMerchant] = useState('');
    const [selectedInstrumentLabel, setInstrumentLabel] = useState('');
    const [typedInstrumentNo, setInstrumentNo] = useState('');
    const [selectedCurrencySymbol, setCurrencySymbol] = useState('');
    const [typedAmount, setAmount] = useState('0.00');

    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            fontFamily: 'Source Sans Pro',
            fontSize: "0.8rem",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            boxShadow: "none",
            fontFamily: 'Source Sans Pro',
            fontSize: "0.8rem",
            minWidth: "180px",
        }),
        singleValue: (defaultStyles) => ({...defaultStyles}),
    };

    const resetForm = () => {
        setTransactionDate(getCurrentDate());
        setTransactionCategory('');
        setTransactionItem('');
        setNarration('');
        setPaymentMode('');
        setPaymentMerchant('');
        setInstrumentLabel('');
        setInstrumentNo('');
        setCurrencySymbol('');
        setAmount("0.00");
    }

    const transactionDateChangeHandler = (event) => {
        setTransactionDate(event.target.value);
    }

    const transactionCategoryChangeHandler = (selectedTransactionCategory) => {
        setTransactionCategory(selectedTransactionCategory);
    }

    const transactionItemChangeHandler = (selectedTransactionItem) => {
        setTransactionItem(selectedTransactionItem);
    }

    const narrationChangeHandler = (event) => {
        setNarration(event.target.value);
    }

    const paymentModeNameChangeHandler = (selectedPaymentMode) => {
        setPaymentMode(selectedPaymentMode);
    }

    const paymentMerchantChangeHandler = (selectedPaymentMerchant) => {
        setPaymentMerchant(selectedPaymentMerchant);
    }

    const istrumentLabelChangeHandler = (selectedInstrumentLabel) => {
        setInstrumentLabel(selectedInstrumentLabel);
    }

    const instrumentNumberChangeHandler = (event) => {
        setInstrumentNo(event.target.value);
    }

    const currencySymbolChangeHandler = (selectedCurrency) => {
        setCurrencySymbol(selectedCurrency);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const submitDataInputFormHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            transactionDate: selectedTransactionDate,
            transactionCategory: selectedTransactionCategory,
            transactionItem: selectedTransactionItem,
            narration: typedNarration,
            paymentMode: selectedPaymentMode,
            paymentMerchant: selectedPaymentMerchant,
            instrumentLabel: selectedInstrumentLabel,
            instrumentNo: typedInstrumentNo,
            currencySymbol: selectedCurrencySymbol,
            amount: typedAmount
        };

        console.log(selectedCurrencySymbol);
        resetForm();

        props.onSubmit(expenseData);
    };

    return (
        <Card className="data-input">
            <form className='input-form' onSubmit={submitDataInputFormHandler}>

                <div className="input-form__row">
                    <div className="col-1">
                        <input type="date" name="transaction-date" id="transaction-date" className="input-field-date"
                               value={selectedTransactionDate}
                               onChange={transactionDateChangeHandler}
                        />
                        <CreatableSelect name="transaction-category" id="transaction-category"
                                         className="select-input-field"
                                         placeholder="Category"
                                         value={selectedTransactionCategory}
                                         options={
                                             formData.getCategories().map((categoryItem) => {
                                                 return {
                                                     label: categoryItem.categoryName,
                                                     value: categoryItem.categoryId
                                                 };
                                             })
                                         }
                                         styles={customStyles}
                                         onChange={transactionCategoryChangeHandler}/>
                        <CreatableSelect name="transaction-item" id="transaction-item"
                                         className="select-input-field"
                                         placeholder="Expense Item"
                                         value={selectedTransactionItem}
                                         options={
                                             formData.getItems().map((item) => {
                                                 return {label: item.itemName, value: item.itemId};
                                             })
                                         }
                                         styles={customStyles}
                                         onChange={transactionItemChangeHandler}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="transaction-item-narration" id="transaction-item-narration"
                               className="input-field"
                               placeholder="Narration"
                               value={typedNarration}
                               onChange={narrationChangeHandler}/>
                    </div>
                </div>

                <div className="input-form__row">
                    <div className="col-1">
                        <CreatableSelect name="transaction-payemnt-mode__name" id="transaction-payemnt-mode__name"
                                         className="select-input-field"
                                         placeholder="Payment Mode"
                                         value={selectedPaymentMode}
                                         options={
                                             formData.getPaymentModes().map((paymentModel) => {
                                                 return {
                                                     label: paymentModel.paymentModeType,
                                                     value: paymentModel.paymentModeId
                                                 };
                                             })
                                         }
                                         styles={customStyles}
                                         onChange={paymentModeNameChangeHandler}/>

                        <CreatableSelect name="transaction-payemnt-mode__merchant"
                                         id="transaction-payemnt-mode__merchant"
                                         className="select-input-field"
                                         placeholder="Payment Merchant"
                                         value={selectedPaymentMerchant}
                                         options={
                                             formData.getPaymentMerchants().map((merchant) => {
                                                 return {
                                                     label: merchant.paymentMerchantName,
                                                     value: merchant.paymentMerchantId
                                                 };
                                             })
                                         }
                                         styles={customStyles}
                                         onChange={paymentMerchantChangeHandler}/>

                        <CreatableSelect name="transaction-payemnt-mode__instrument-label"
                                         id="transaction-payemnt-mode__instrument-label"
                                         className="select-input-field"
                                         placeholder="Instrument Label"
                                         value={selectedInstrumentLabel}
                                         options={
                                             formData.getPaymentInstrumentTypeLabels().map((instrument) => {
                                                 return {
                                                     label: instrument.paymentInstrumentTypeLabelDescription,
                                                     value: instrument.paymentInstrumentTypeLabelId
                                                 };
                                             })
                                         }
                                         styles={customStyles}
                                         onChange={istrumentLabelChangeHandler}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="transaction-payemnt-mode__instrument"
                               id="transaction-payemnt-mode__instrument"
                               className="input-field"
                               placeholder="Instrument No"
                               value={typedInstrumentNo}
                               onChange={instrumentNumberChangeHandler}/>
                        <CreatableSelect name="transaction-payemnt-mode__currency-symbol"
                                         id="transaction-payemnt-mode__currency-symbol"
                                         className="select-input-field"
                                         placeholder="Currency Symbol"
                                         value={selectedCurrencySymbol}
                                         options={formData.getCurrencysymbols().map((currency) => {
                                             return {
                                                 label: currency.currencySymbol + "   " +
                                                     currency.currencySymbolCode + " - " + currency.currencySymbolName,
                                                 value: currency.currencySymbolId
                                             };
                                         })}
                                         styles={customStyles}
                                         onChange={currencySymbolChangeHandler}/>

                        <input type="number" min="0.00" step="0.01" name="transaction-payemnt-mode__amount"
                               id="transaction-payemnt-mode__amount"
                               className="input-field" placeholder="Amount"
                               value={typedAmount}
                               onChange={amountChangeHandler}/>
                        <div className="submit">
                            <button type="submit">Add</button>
                        </div>

                    </div>
                </div>
            </form>
        </Card>
    );
};

export default DataInputForm;