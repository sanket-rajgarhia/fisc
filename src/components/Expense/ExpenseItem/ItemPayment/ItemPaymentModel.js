class ItemPaymentModel{

    constructor(paymentModeId, paymentModeDescription,
                institutionId, institutionName,
                instrumentTypeId, instrumentType, instrumentDescription,
                paymentCurrencyId, paymentCurrency, paymentCurrencySymbol, paymentAmount){
        this.paymentModeId = paymentModeId;
        this.paymentModeDescription = paymentModeDescription;

        this.institutionId = institutionId;
        this.institutionName = institutionName;

        this.instrumentTypeId = instrumentTypeId;
        this.instrumentType = instrumentType;
        this.instrumentDescription = instrumentDescription;

        this.paymentCurrencyId = paymentCurrencyId;
        this.paymentCurrency = paymentCurrency;
        this.paymentCurrencySymbol = paymentCurrencySymbol;
        this.paymentAmount = paymentAmount;

    }

}

export default ItemPaymentModel;