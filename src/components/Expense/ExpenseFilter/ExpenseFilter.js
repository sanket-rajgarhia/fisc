import "./ExpenseFilter.css";

import {useState} from "react";
import Select from "react-select";

import {getCurrentYear, getCurrentMonthName, getCurrentMonthNo} from "../../../utils/Utils";
import {customStylesForSelectAndCreatable} from "../../../common/ReactSelectAndCreatableStyles";

const ExpenseFilter = (props) => {

    let yearOptions = props.years.map((year, index) => {
        return {label: year, value: index + 1}
    });
    if(yearOptions.length === 0){
        yearOptions = [{label:"All", value: 0}, {label:getCurrentYear(), value: 1}];
    }
    else{
        yearOptions = [{label:"All", value: 0}, ...yearOptions];
    }

    const monthOptions = [
        {label: "All", value: 0},
        {label: "January", value: 1},
        {label: "February", value: 2},
        {label: "March", value: 3},
        {label: "April", value: 4},
        {label: "May", value: 5},
        {label: "June", value: 6},
        {label: "July", value: 7},
        {label: "August", value: 8},
        {label: "September", value: 9},
        {label: "October", value: 10},
        {label: "November", value: 11},
        {label: "December", value: 12}
    ];

    let indexValueOfCurrentYear = 0;
    if( yearOptions.filter(year => year.label === getCurrentYear()).length > 0){
        indexValueOfCurrentYear = yearOptions.filter(year => year.label === getCurrentYear())[0].value;
    }

    const [selectedYear, setSelectedYear] = useState({label: getCurrentYear(), value: indexValueOfCurrentYear});
    const [selectedMonth, setselectedMonth] = useState({label: getCurrentMonthName(), value: getCurrentMonthNo()});

    const yearChangeHandler = (year) => {
        props.onFilterSelection(year, selectedMonth);
        setSelectedYear(year);
    }

    const monthChangeHandler = (month) => {
        props.onFilterSelection(selectedYear, month);
        setselectedMonth(month);
    }
    return (
        <div className="expense-filter">
            <div className="item">
                <label>Filter By: </label>
            </div>
            <div className="item date-filter">
                <Select options={yearOptions}
                        defaultValue={yearOptions.filter(year => year.value === selectedYear.value)}
                        styles={customStylesForSelectAndCreatable}
                        onChange={yearChangeHandler}/>
                <Select options={monthOptions}
                        defaultValue={monthOptions.filter(month => month.label === selectedMonth.label)}
                        styles={customStylesForSelectAndCreatable}
                        onChange={monthChangeHandler}/>
            </div>
        </div>
    );

};

export default ExpenseFilter;