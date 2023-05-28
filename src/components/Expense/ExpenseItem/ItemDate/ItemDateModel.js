class ItemDateModel{

    constructor(date = Date.now()){
        this.date = date;
        this.month = date.toLocaleString('en-US', {month: 'long'});
        this.day = date.toLocaleString('en-US', {day: '2-digit'});
        this.year = date.getFullYear();
    }

}

export default ItemDateModel;