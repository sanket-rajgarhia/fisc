import Card from "../../Card/Card";
import ItemDate from "./ItemDate/ItemDate";
import ItemDecription from "./ItemDescription/ItemDescription";
import ItemPayment from "./ItemPayment/ItemPayment";

import "./ExpenseItem.css";

function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <div className="expense_item__item-date">
                <ItemDate itemDate={props.expenseItemData.itemDate}/>
            </div>
            <div className="expense_item__item-description">
                <ItemDecription  itemDescription={props.expenseItemData.itemDescription}/>
            </div>
            <div className="expense_item__item-payment">
                <ItemPayment  itemPayment={props.expenseItemData.itemPayment}/>
            </div>
        </Card>);
};

export default ExpenseItem;