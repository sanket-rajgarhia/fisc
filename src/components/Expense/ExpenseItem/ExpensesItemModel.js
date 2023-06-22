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

        //paymentAmount - length supported 22 with 1 decimal point and 3 commas Eg. 0123,456,789,123,45.60
    }

}

export default ExpensesItemModel;