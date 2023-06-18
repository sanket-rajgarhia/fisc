import Card from "../../Card/Card";
import ItemDate from "./ItemDate/ItemDate";
import ItemDecription from "./ItemDescription/ItemDescription";
import ItemPayment from "./ItemPayment/ItemPayment";

import "./ExpenseItem.css";

function ExpenseItem(props) {

    // Message according to filter state
    let message = <p>No expense item found for the specified filter</p>
    if (props.allFilter) {
        message = <p>No expense item found</p>
    }

    if (Object.keys(props.expenseItemData).length === 0){
        return (<Card className="expense-item-empty">
            <div className="no-items__display">
                {message}
            </div>
        </Card>);
    }
    else{
        return (<Card className="expense-item">
            <div className="expense_item__item-date">
                <ItemDate itemDate={props.expenseItemData.itemDate}/>
            </div>
            <div className="expense_item__item-description">
                <ItemDecription itemDescription={props.expenseItemData.itemDescription}/>
            </div>
            <div className="expense_item__item-payment">
                <ItemPayment itemPayment={props.expenseItemData.itemPayment}/>
            </div>
        </Card>);
    }
};

export default ExpenseItem;