import "./DataInputForm.css";

import CreatableSelect from 'react-select/creatable';

import Card from "../Card/Card";
import DataModelPopulation from "../../AppDataModels/DataModelPopulation";

const DataInputForm = () => {

    const formData = new DataModelPopulation();

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

    return (
        <Card className="data-input">
            <form className='input-form'>

                <div className="input-form__row">
                    <div className="col-1">
                        <input type="date" name="transaction-date" id="transaction-date" className="input-field-date"/>
                        <CreatableSelect name="transaction-category" id="transaction-category"
                                         className="select-input-field"
                                         placeholder="Category"
                                         options={
                                             formData.getCategories().map((categoryItem) => {
                                                 return {
                                                     label: categoryItem.categoryName,
                                                     value: categoryItem.categoryId
                                                 };
                                             })
                                         }
                                         styles={customStyles}/>
                        <CreatableSelect name="transaction-item" id="transaction-item"
                                         className="select-input-field"
                                         placeholder="Expense Item"
                                         options={
                                             formData.getItems().map((item) => {
                                                 return {label: item.itemName, value: item.itemId};
                                             })
                                         }
                                         styles={customStyles}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="transaction-item-narration" id="transaction-item-narration"
                               className="input-field"
                               placeholder="Narration"/>
                    </div>
                </div>

                <div className="input-form__row">
                    <div className="col-1">
                        <CreatableSelect name="transaction-payemnt-mode__name" id="transaction-payemnt-mode__name"
                                         className="select-input-field"
                                         placeholder="Payment Mode"
                                         options={
                                             formData.getPaymentModes().map((paymentModel) => {
                                                 return {
                                                     label: paymentModel.paymentModeType,
                                                     value: paymentModel.paymentModeId
                                                 };
                                             })
                                         }
                                         styles={customStyles}/>

                        <CreatableSelect name="transaction-payemnt-mode__merchant"
                                         id="transaction-payemnt-mode__merchant"
                                         className="select-input-field"
                                         placeholder="Payment Merchant"
                                         options={
                                             formData.getPaymentMerchants().map((merchant) => {
                                                 return {
                                                     label: merchant.paymentMerchantName,
                                                     value: merchant.paymentMerchantId
                                                 };
                                             })
                                         }
                                         styles={customStyles}/>

                        <CreatableSelect name="transaction-payemnt-mode__instrument-label"
                                         id="transaction-payemnt-mode__instrument-label"
                                         className="select-input-field"
                                         placeholder="Instrument Label"
                                         options={
                                             formData.getPaymentInstrumentTypeLabels().map((instrument) => {
                                                 return {
                                                     label: instrument.paymentInstrumentTypeLabelDescription,
                                                     value: instrument.paymentInstrumentTypeLabelId
                                                 };
                                             })
                                         }
                                         styles={customStyles}/>
                    </div>
                    <div className="col-2">
                        <input type="text" name="transaction-payemnt-mode__instrument"
                               id="transaction-payemnt-mode__instrument"
                               className="input-field"
                               placeholder="Instrument No"/>
                        <CreatableSelect name="transaction-payemnt-mode__currency-symbol"
                                         id="transaction-payemnt-mode__currency-symbol"
                                         className="select-input-field"
                                         placeholder="Currency Symbol"
                                         options={formData.getCurrencysymbols().map((currency) => {
                                             return {
                                                 label: currency.currencySymbol + "   " +
                                                     currency.currencySymbolCode + " - " + currency.currencySymbolName,
                                                 value: currency.currencySymbolId
                                             };
                                         })
                                         }
                                         styles={customStyles}/>

                        <input type="text" name="transaction-payemnt-mode__amount" i
                               d="transaction-payemnt-mode__amount"
                               className="input-field"
                               placeholder="Amount"/>
                        <div className="submit">
                            <button type="submit">Add</button>
                        </div>

                    </div>
                </div>
            </form>
        </Card>
    );
}

export default DataInputForm;