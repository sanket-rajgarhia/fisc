import "./ItemPayment.css";

const ItemPayment = (prop) => {

    return (
        <div className="payment-details">
            <div className="payment-details__mode">
                <p className="payment-details__mode__name">{prop.itemPayment.paymentModeDescription}</p>
                <p className="payment-details__mode__institution-name">{prop.itemPayment.institutionName}</p>
                <p className="payment-details__mode__details">{prop.itemPayment.instrumentType} : {prop.itemPayment.instrumentDescription}</p>
            </div>
            <div className="payment-details__amount">
                <p className="payment-details__amount__details"><span
                    className="app-base-currency-symbol">{prop.itemPayment.paymentCurrencySymbol}</span><span
                    className="payment-details__amount__value">{prop.itemPayment.paymentAmount}</span></p>
            </div>
        </div>
    );

}

export default ItemPayment;