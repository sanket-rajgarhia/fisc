class ItemPaymentModel{

    constructor(paymentModeId, paymentModeDescription,
                paymentMerchantId, paymentMerchantName,
                instrumentTypeId, instrumentType, instrumentDescription,
                paymentCurrencyId, paymentCurrency, paymentCurrencyAbrv, paymentCurrencySymbol, paymentAmount){
        this.paymentModeId = paymentModeId;
        this.paymentModeDescription = paymentModeDescription;

        this.paymentMerchantId = paymentMerchantId;
        this.paymentMerchantName = paymentMerchantName;

        this.instrumentTypeId = instrumentTypeId;
        this.instrumentType = instrumentType;
        this.instrumentDescription = instrumentDescription;

        this.paymentCurrencyId = paymentCurrencyId;
        this.paymentCurrency = paymentCurrency;
        this.paymentCurrencyAbrv = paymentCurrencyAbrv;
        this.paymentCurrencySymbol = paymentCurrencySymbol;
        this.paymentAmount = paymentAmount;

    }

}

export default ItemPaymentModel;