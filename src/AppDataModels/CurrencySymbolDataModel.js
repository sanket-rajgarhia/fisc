class CurrencySymbolDataModel{

    constructor(currencySymbolId,currencySymbolCode, currencySymbolName,currencySymbol,
                currencySymbolValue,currencySymbolUsed ){
        this.currencySymbolId = currencySymbolId;
        this.currencySymbolCode = currencySymbolCode;
        this.currencySymbolName = currencySymbolName;
        this.currencySymbol = currencySymbol;
        this.currencySymbolValue = currencySymbolValue;
        this.currencySymbolUsed = currencySymbolUsed;
    }
}

export default CurrencySymbolDataModel;