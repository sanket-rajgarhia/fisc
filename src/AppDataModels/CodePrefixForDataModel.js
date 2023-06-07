import { v4 as uuid } from 'uuid';

class CodePrefixForDataModel{

    constructor(){
        this._categoryCode = "CAT-";
        this._itemCode = "ITM-";
        this._paymentModeCode = "PMC-";
        this._paymentMerchantCode = "PMN-";
        this._paymentInstrumentTypeLabelCode = "PIL-";
        this._currencySymbolCode = "CCY-";
    }

    getCategoryCode = () => this._categoryCode + uuid();
    getItemCode = () => this._itemCode + uuid();
    getPaymentModeCode = () => this._paymentModeCode + uuid();
    getPaymentMerchantCode = () => this._paymentMerchantCode + uuid();
    getPaymentInstrumentTypeLabelCode = () => this._paymentInstrumentTypeLabelCode + uuid();
    getCurrencySymbolCode = () => this._currencySymbolCode + uuid();

}

export default CodePrefixForDataModel;