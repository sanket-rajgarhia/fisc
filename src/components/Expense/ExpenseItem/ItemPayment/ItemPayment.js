import "./ItemPayment.css";

const ItemPayment = (props) => {

    return (
        <div className="payment-details">
            <div className="payment-details__mode">
                <p className="payment-details__mode__name">{props.itemPayment.paymentModeDescription}</p>
                <p className="payment-details__mode__institution-name">{props.itemPayment.institutionName}</p>
                <p className="payment-details__mode__details">{props.itemPayment.instrumentType} : {props.itemPayment.instrumentDescription}</p>
            </div>
            <div className="payment-details__amount">
                <p className="payment-details__amount__details"><span
                    className="payment-details__amount__currency-symbol">{props.itemPayment.paymentCurrencySymbol}</span><span
                    className="payment-details__amount__value">{props.itemPayment.paymentAmount}</span></p>
            </div>
        </div>
    );

};

export default ItemPayment;