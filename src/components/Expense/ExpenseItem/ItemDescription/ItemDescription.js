import "./ItemDescription.css";

const ItemDescription = (props) => {

    return (
        <div className="item-description">
            <div className="item-description__category">
                <p className="item-description__category__name">{props.itemDescription.categoryName.toUpperCase()}</p>
            </div>

            <div className="item-description__details">
                <p className="item-description__details__item">{props.itemDescription.itemDescription}</p>
                <p className="item-description__details__narration">{props.itemDescription.narration}</p>
            </div>
        </div>
    );

};

export default ItemDescription;