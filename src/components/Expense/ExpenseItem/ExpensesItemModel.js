import ItemDateModel from "./ItemDate/ItemDateModel";
import ItemDescriptionModel from "./ItemDescription/ItemDescriptionModel";
import ItemPaymentModel from "./ItemPayment/ItemPaymentModel";

class ExpensesItemModel{

    constructor(expenseItemId, itemDate,
                categoryId, categoryName,
                itemId, itemDescription, narration,
                paymentModeId, paymentModeDescription,paymentMerchantId,paymentMerchantName,
                instrumentTypeId, instrumentType, instrumentDescription,
                paymentCurrencyId, paymentCurrency, paymentCurrencyAbrv, paymentCurrencySymbol, paymentAmount){
        this.expenseItemId = expenseItemId;
        this.itemDate = new ItemDateModel(itemDate);
        this.itemDescription = new ItemDescriptionModel(categoryId,categoryName,itemId,itemDescription,narration);
        this.itemPayment = new ItemPaymentModel(paymentModeId, paymentModeDescription,
            paymentMerchantId,paymentMerchantName,
            instrumentTypeId,instrumentType,instrumentDescription,
            paymentCurrencyId, paymentCurrency,paymentCurrencyAbrv, paymentCurrencySymbol,
            paymentAmount);
    }

}

export default ExpensesItemModel;