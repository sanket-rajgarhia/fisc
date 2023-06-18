import "./ItemPayment.css";

import {CASH} from "../../../../common/global-constants";

const ItemPayment = (props) => {

    let instrumentTypeAndDescription = <p className="payment-details__mode__details">{props.itemPayment.instrumentType} : {props.itemPayment.instrumentDescription}</p>;
    if(props.itemPayment.paymentModeDescription.toUpperCase() === CASH.toUpperCase() ) {
        instrumentTypeAndDescription = <p className="payment-details__mode__details"></p>;
    }

    return (
        <div className="payment-details">
            <div className="payment-details__mode">
                <p className="payment-details__mode__name">{props.itemPayment.paymentModeDescription.toUpperCase()}</p>
                <p className="payment-details__mode__institution-name">{props.itemPayment.institutionName}</p>
                {instrumentTypeAndDescription}
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