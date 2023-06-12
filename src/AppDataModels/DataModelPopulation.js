import CodePrefixForDataModel from "./CodePrefixForDataModel";
import CategoryDataModel from "./CategoryDataModel";
import ItemDataModel from "./ItemDataModel";
import PaymentModeDataModel from "./PaymentModeDataModel";
import PaymentMerchantDataModel from "./PaymentMerchantDataModel";
import PaymentInstrumentTypeLabelDataModel from "./PaymentInstrumentTypeLabelDataModel";
import CurrencySymbolDataModel from "./CurrencySymbolDataModel";

class DataModelPopulation{

    constructor(){
        const codePrefixDataModel = new CodePrefixForDataModel();

        const categoryCodes = [
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode(),
            codePrefixDataModel.getCategoryCode()
        ];

        this._categories = [
            new CategoryDataModel(categoryCodes[0],"General",-1, false),
            new CategoryDataModel(categoryCodes[1],"Grocery",0, false),
            new CategoryDataModel(categoryCodes[2],"Food",1, false),
            new CategoryDataModel(categoryCodes[3],"Personal",2, false),
            new CategoryDataModel(categoryCodes[4],"Rent",3, false),
            new CategoryDataModel(categoryCodes[5],"Insurance",4, false),
            new CategoryDataModel(categoryCodes[6],"Electronics",5, false),
            new CategoryDataModel(categoryCodes[7],"Repairs",6, false),
            new CategoryDataModel(categoryCodes[8],"Automobile",7, false),
            new CategoryDataModel(categoryCodes[9],"Electricity",8, false),
            new CategoryDataModel(categoryCodes[10],"Water",9, false),
            new CategoryDataModel(categoryCodes[11],"Entertainment",10, false),
            new CategoryDataModel(categoryCodes[12],"Travel",10, false),
            new CategoryDataModel(categoryCodes[13],"Healthcare",11, false)
        ];

        this._items = [
            new ItemDataModel(codePrefixDataModel.getItemCode(), "General", -1, false, categoryCodes[0]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "General Items", 0, false, categoryCodes[1]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Vegetable", 1.1, false, categoryCodes[1]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Egg", 1.2, false, categoryCodes[1]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Meat product", 1.3, false, categoryCodes[1]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Milk", 1.4, false, categoryCodes[1]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Bread", 1.5, false, categoryCodes[1]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Fruit", 1.6, false, categoryCodes[1]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Order Food [Restaurant]", 2.1, false, categoryCodes[2]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Snacks", 2.2, false, categoryCodes[2]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Cigarette", 3.1, false, categoryCodes[3]),
            new ItemDataModel(codePrefixDataModel.getItemCode(), "Liquor [Alcaholic beverage]", 3.2, false, categoryCodes[3])
        ];

        this._paymentModes = [
            new PaymentModeDataModel(codePrefixDataModel.getPaymentModeCode(), "Cash", -1, false),
            new PaymentModeDataModel(codePrefixDataModel.getPaymentModeCode(), "Bank", -1, false),
            new PaymentModeDataModel(codePrefixDataModel.getPaymentModeCode(), "Debit Card", -1, false),
            new PaymentModeDataModel(codePrefixDataModel.getPaymentModeCode(), "Credit Card", -1, false)
        ];

        this._paymentMerchants = [
            new PaymentMerchantDataModel(codePrefixDataModel.getPaymentMerchantCode(), "None", -1, false),
            new PaymentMerchantDataModel(codePrefixDataModel.getPaymentMerchantCode(), "Bangkok Bank", 1, false)
        ];

        this._paymentInstrumentTypeLabels = [
            new PaymentInstrumentTypeLabelDataModel(codePrefixDataModel.getPaymentInstrumentTypeLabelCode(), "None", -1, false),
            new PaymentInstrumentTypeLabelDataModel(codePrefixDataModel.getPaymentInstrumentTypeLabelCode(), "Bank Account No.", -1, false),
            new PaymentInstrumentTypeLabelDataModel(codePrefixDataModel.getPaymentInstrumentTypeLabelCode(), "Debit Card No.", -1, false),
            new PaymentInstrumentTypeLabelDataModel(codePrefixDataModel.getPaymentInstrumentTypeLabelCode(), "Credit Card No.", -1, false)
        ];

        this._currencySymbols = [
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "THB", "Thai Bhat", "฿",-1, false),
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "INR", "Indian Rupee", "₹",-1, false),
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "USD", "Dollar", "$",-1, false),
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "GBP", "Pound Sterling", "£",-1, false),
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "EUR", "Euro", "€",-1, false),
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "JPY", "Japanese Yen", "¥",-1, false),
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "RMB", "Chinese Renminbi", "¥",-1, false),
            new CurrencySymbolDataModel(codePrefixDataModel.getCurrencySymbolCode(), "CNY", "Chinese Yuan", "¥",-1, false),
        ];
    }


    getCategories = () => this._categories;
    getItems = () => this._items;
    getPaymentModes = () => this._paymentModes;
    getPaymentMerchants = () => this._paymentMerchants;
    getPaymentInstrumentTypeLabels = () => this._paymentInstrumentTypeLabels;
    getCurrencysymbols = () => this._currencySymbols;
}

export default DataModelPopulation;