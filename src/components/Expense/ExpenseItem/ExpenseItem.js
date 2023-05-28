import ItemDate from "./ItemDate/ItemDate";
import ItemDecription from "./ItemDescription/ItemDescription";
import ItemPayment from "./ItemPayment/ItemPayment";

import "./ExpenseItem.css";

function ExpenseItem(prop) {

    return (
        <div className="expense-item">
            <div className="expense_item__item-date">
                <ItemDate itemDate={prop.expenseData.itemDate}/>
            </div>
            <div className="expense_item__item-description">
                <ItemDecription  itemDescription={prop.expenseData.itemDescription}/>
            </div>
            <div className="expense_item__item-payment">
                <ItemPayment  itemPayment={prop.expenseData.itemPayment}/>
            </div>
        </div>);
}

export default ExpenseItem;