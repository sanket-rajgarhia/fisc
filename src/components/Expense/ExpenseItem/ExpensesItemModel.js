import ItemDateModel from "./ItemDate/ItemDateModel";
import ItemDescriptionModel from "./ItemDescription/ItemDescriptionModel";
import ItemPaymentModel from "./ItemPayment/ItemPaymentModel";

class ExpensesItemModel{

    constructor(itemDate,
                categoryId, categoryName,
                itemId, itemDescription, narration,
                paymentModeId, paymentModeDescription,institutionId,institutionName,
                instrumentTypeId, instrumentType, instrumentDescription,
                paymentCurrencyId, paymentCurrency, paymentCurrencySymbol, paymentAmount){
        this.itemDate = new ItemDateModel(itemDate);
        this.itemDescription = new ItemDescriptionModel(categoryId,categoryName,itemId,itemDescription,narration);
        this.itemPayment = new ItemPaymentModel(paymentModeId, paymentModeDescription,
            institutionId,institutionName,
            instrumentTypeId,instrumentType,instrumentDescription,
            paymentCurrencyId, paymentCurrency, paymentCurrencySymbol,
            paymentAmount);
    }

}

export default ExpensesItemModel;