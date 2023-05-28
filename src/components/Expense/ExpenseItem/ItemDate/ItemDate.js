import "./ItemDate.css";

const ItemDate = (prop) => {

    return(
        <div className="item-date">
            <p className="item-date__month">{prop.itemDate.month}</p>
            <p className="item-date__year">{prop.itemDate.year}</p>
            <p className="item-date__day">{prop.itemDate.day}</p>
        </div>
    );

}

export default ItemDate;