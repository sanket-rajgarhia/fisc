import "./ItemPayment.css";

const ItemPayment = () => {

    return (
        <div className="payment-details">
            <div className="payment-details__mode">
                <p className="payment-details__mode__name">CREDIT CARD XXXXXXXXX</p>
                <p className="payment-details__mode__institution-name">Housing Development finance
                    Corporation Pvt. Ltd.</p>
                <p className="payment-details__mode__details">Account Number : 12XX-XXX-XX99</p>
            </div>
            <div className="payment-details__amount">
                <p className="payment-details__amount__details"><span
                    className="app-base-currency-symbol">$</span><span
                    className="payment-details__amount__value">2340009990001231.50</span></p>
            </div>
        </div>
    );

}

export default ItemPayment;