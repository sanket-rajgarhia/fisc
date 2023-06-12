import "./ItemDate.css";

const ItemDate = (props) => {

    return(
        <div className="item-date">
            <p className="item-date__month">{props.itemDate.month}</p>
            <p className="item-date__year">{props.itemDate.year}</p>
            <p className="item-date__day">{props.itemDate.day}</p>
        </div>
    );

};

export default ItemDate;