
export const getToday = () =>{
    return new Date(Date.now());
}

export const getCurrentDate = () => {

    let year = getCurrentYear()
    let month = getCurrentMonthNo();
    let date = getToday().getDate();

    month = month.toString().length === 1 ? "0" + month : month;
    date = date.toString().length === 1 ? "0" + date : date;

    return year + "-" + month + "-" + date;
};

export const getCurrentYear = () => {
    return getToday().getFullYear();
}

export const getCurrentMonthNo = () => {
    return getToday().getMonth() + 1;
}

export const getCurrentMonthName = () => {
    return getToday().toLocaleString('default', { month: 'long' });
}
