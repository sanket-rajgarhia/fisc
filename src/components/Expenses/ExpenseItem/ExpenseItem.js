import ItemDate from "./ItemDate/ItemDate";
import ItemDecription from "./ItemDescription/ItemDescription";
import ItemPayment from "./ItemPayment/ItemPayment";

import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <ItemDate className="expense_item__item-date"/>
            <ItemDecription />
            <ItemPayment />
        </div>);
}

export default ExpenseItem;