import "./ItemDescription.css";

const ItemDescription = () => {

    return (
        <div className="item-description">
            <div className="item-description__category">
                <p className="item-description__category__name">INSURANCE-AS-A-CATEGORY</p>
            </div>

            <div className="item-description__details">
                <p className="item-description__details__item">Car Insurance Annual Premium</p>
                <p className="item-description__details__narration">Narration - A quick brown fox jumps over the
                    lazy dog - A quick brown fox jumps over the lazy dog</p>
            </div>
        </div>
    );

}

export default ItemDescription;