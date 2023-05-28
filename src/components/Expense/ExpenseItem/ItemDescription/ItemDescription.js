import "./ItemDescription.css";

const ItemDescription = (prop) => {

    return (
        <div className="item-description">
            <div className="item-description__category">
                <p className="item-description__category__name">{prop.itemDescription.categoryName}</p>
            </div>

            <div className="item-description__details">
                <p className="item-description__details__item">{prop.itemDescription.itemDescription}</p>
                <p className="item-description__details__narration">{prop.itemDescription.narration}</p>
            </div>
        </div>
    );

}

export default ItemDescription;