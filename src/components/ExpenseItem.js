import "./ExpenseItemStyles.css"
import "./ExpenseItemMediaQueryStyles.css"

function ExpenseItem() {
    return (
        <div className="expense-item">

            <div className="expense-item__date">
                <p className="expense-item__date__month">September</p>
                <p className="expense-item__date__year">2023</p>
                <p className="expense-item__date__day">24</p>
            </div>

            <div className="expense-item__description">
                <div className="expense-item__description__category">
                    <p className="expense-item__description__category__name">INSURANCE-AS-A-CATEGORY</p>
                </div>

                <div className="expense-item__description-details">
                    <p className="expense-item__description-details__item">Car Insurance Annual Premium</p>
                    <p className="expense-item__description-details__narration">Narration - A quick brown fox jumps over the lazy dog - A quick brown fox jumps over the lazy dog</p>
                </div>

            </div>

            <div className="expense-item__payment-details">
                <div className="expense-item__payment-details__mode">
                    <p className="expense-item__payment-details__mode__name">CREDIT CARD XXXXXXXXX</p>
                    <p className="expense-item__payment-details__mode__institution-name">Housing Development finance Corporation Pvt. Ltd.</p>
                    <p className="expense-item__payment-details__mode__details">Account Number : 12XX-XXX-XX99</p>
                </div>
                <div className="expense-item__payment-details__amount">
                    <p className="expense-item__payment-details__amount__details"><span className="app-base-currency-symbol">$</span><span className="expense-item__payment-details__amount__value">2340009990001231.50</span></p>
                </div>
            </div>

        </div>);
}

export default ExpenseItem;