import "./DataChart.css";
import Chart from "react-apexcharts";
import {colorGenerator} from "../../utils/ColourGenerator";

const DataChart = (props) => {

    // Obtain an array containing all categoryId and categoryName (including duplicate entries)
    let categories = props.expenseData.map(expenseItem => {
        return {
            categoryId: expenseItem.itemDescription.categoryId,
            categoryName: expenseItem.itemDescription.categoryName
        };
    });
    console.log("ORIGINAL CATEGORIES");
    console.log(categories);

    // Filter unique Category ids used
    const categoryIds = props.expenseData.map(expenseItem => expenseItem.itemDescription.categoryId)
        .filter((categoryId, index, categoryArray) => categoryArray.indexOf(categoryId) === index);
    console.log(" UNIQUE CATEGORY IDS : ");
    console.log(categoryIds);

    let uniqueCategories = []
    for (let categoryId of categoryIds) {
        for (let category of categories) {
            if (categoryId === category.categoryId) {
                uniqueCategories = [...uniqueCategories, category];
                break;
            }
        }
    }
    console.log(" UNIQUE CATEGORIES : ");
    console.log(uniqueCategories);

    // Filter unique years present in the data and create a year (numeric) X months matrix (numeric where Jan = 1)
    const years = props.expenseData
        .map(expenseItem => expenseItem.itemDate.year)
        .filter((value, index, array) => array.indexOf(value) === index);
    let yearsAndMonth = [];
    for (let year of years) {
        for (let month = 1; month <= 12; month++) {
            yearsAndMonth = [...yearsAndMonth, {year: year, month: month}];
        }
    }
    console.log("YEAR AND MONTH");
    console.log(yearsAndMonth);

    // CategoryId and CatrgoryName X yearsAndMonth matrix with additional field value
    let categoryYearsAndMonthTotals = [];
    for (let catgeory of uniqueCategories) {
        for (let yearAndMonth of yearsAndMonth) {
            categoryYearsAndMonthTotals = [...categoryYearsAndMonthTotals, {
                categoryId: catgeory.categoryId,
                categoryName: catgeory.categoryName,
                year: yearAndMonth.year,
                month: yearAndMonth.month,
                value: 0
            }];
        }
    }
    console.log("RECORD OF CATEGORIES X YEAR X MONTH with value 0");
    console.log(categoryYearsAndMonthTotals);

    // Updating the Category value in -  CategoryId and CatrgoryName X yearsAndMonth matrix table
    props.expenseData.map(expense => {
        let categoryId = expense.itemDescription.categoryId;
        let categoryName = expense.itemDescription.categoryName;
        let year = expense.itemDate.year;
        let month = expense.itemDate.date.getMonth() + 1;

        // Find the matching record in categoryYearsAndMonthTotals array
        let filteredRecord = categoryYearsAndMonthTotals.filter((record, index) => {
            if (record.categoryId === categoryId && record.categoryName === categoryName &&
                record.year === year && record.month === month) {
                categoryYearsAndMonthTotals[index].value += parseFloat(expense.itemPayment.paymentAmount);
            }
        });
    });
    console.log("UPDATED TOTALS");
    console.log(categoryYearsAndMonthTotals);

    let categoryYearWiseTotals =[];
    for (let uniqueCategory of uniqueCategories) {
        for(let year of years){
            let categoryYearWiseTotal = categoryYearsAndMonthTotals
                .filter(record => record.categoryId === uniqueCategory.categoryId && record.year === year)
                .reduce((previousValue, currentValue) => {
                    return previousValue + currentValue.value
                }, 0);

            categoryYearWiseTotals = [...categoryYearWiseTotals, {...uniqueCategory, year: year, value: categoryYearWiseTotal}];
        }
    }

    console.log("YEAR WISE ALL CATEGORY TOTAL");
    console.log(categoryYearWiseTotals);

    let categoryAllYearTotals = [];
    for (let uniqueCategory of uniqueCategories) {
        let categoryAllYearTotal = categoryYearsAndMonthTotals
            .filter(record => record.categoryId === uniqueCategory.categoryId)
            .reduce((previousValue, currentValue) => {
                return previousValue + currentValue.value
            }, 0);

        categoryAllYearTotals = [...categoryAllYearTotals, {...uniqueCategory, value: categoryAllYearTotal}];
    }

    console.log("CATEGORY WISE ALL YEAR TOTAL");
    console.log(categoryAllYearTotals);

    console.log("VALIDATION");
    console.log(props.expenseData.reduce((p, c) => p + c.itemPayment.paymentAmount, 0));
    console.log(categoryYearsAndMonthTotals.reduce((p, c) => p + c.value, 0));
    console.log(categoryAllYearTotals.reduce((p, c) => p + c.value, 0));
    console.log(categoryYearWiseTotals.reduce((p, c) => p + c.value, 0));

    let colors = [...colorGenerator(categoryAllYearTotals.length)];
    console.log(colors);

    let uniqueCategoryNames = uniqueCategories.map(category => category.categoryName);
    const options = {

        chart: {
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            dropShadow: {
                enabled: true,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            },
            height: 100,
        },

        xaxis: {
            type: "category",
            categories: uniqueCategoryNames
        },

        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 3,
                borderRadiusApplication: "emd",
                borderRadiusWhenStacked: "last",
                columnWidth: '100%',
                barHeight: '85%',   // For horizontal bars - behaviour is sames as columnWidth for Vertical bars
                distributed: true, // this line is mandatory
            },
        },

        colors: colors,

        title: {
            text: "Spending By Category - For All Years",
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '14px',
                fontWeight:  'bold',
                fontFamily:  'Source Sans Pro',
                color:  '#263238'
            },
        }

    };

    const data = categoryAllYearTotals.map(categoryAllYearTotal => categoryAllYearTotal.value);
    console.log("DATA");
    console.log(data);
   const series = [{
       name: 'Category',
       data: data
   }]
    let type ="bar";

    console.log("SERIES");
    console.log(series);
    return (<div className="chart">
        <Chart options={options} series={series} type={type} height="100%" width="100%" />
    </div>);
};

export default DataChart;