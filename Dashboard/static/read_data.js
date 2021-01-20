let data_one = datas;
// Select Form Elements
let form = d3.select("form");
let button = d3.select("#filter-btn");

button.on("click", filterdata);
form.on("submit", filterdata);

function filterdata() {
    // so that it doesnt refresh the paGE
    d3.event.preventDefault();


    let inputData = d3.select("#datetime").property("value");
    inputData = +inputData;
    // let inputData = datetime.value();
    // console.log(inputData)
    let filteredData = data_one.filter(ele => ele.year === inputData);
    console.log(filteredData);
    render_chart(filteredData);
}

function render_chart(data) {
    let date = data.map((ele) => ele.date);
    let fatalities = data.map((ele) => ele.fatalities);
    let fatalities_rate = data.map((ele) => {
        return ele.fatalities_rate;

    });
    let sum = fatalities_rate.reduce((a, b) => {
        return a + b;
    }, 0);
    let avg = Math.round(sum / fatalities_rate.length).toFixed(1);
    console.log(avg);


    ApexCharts.exec('line', 'updateOptions', {
        xaxis: {
            categories: date
        }
    }, false, true);


    ApexCharts.exec('line', 'updateSeries', [{
        data: fatalities
    }], true);


    chart_radial.updateOptions({
        series: [avg]

    })


}


data_filter = data_one.filter(ele => ele.year === 2009)

// Initiliasing
let date = data_filter.map((ele) => ele.date)
let fatalities = data_filter.map((ele) => ele.fatalities)
let fatalities_rate = data_filter.map((ele) => ele.fatalities_rate)


var options = {
    series: [{
        name: "Fatalities",
        data: fatalities
    }],
    chart: {
        height: 350,
        type: 'area',
        zoom: {
            enabled: true
        },
        id: 'line',
    },
    dataLabels: {
        enabled: false
    },

    title: {
        text: 'Fatalities by Month',
        align: 'centre'
    },

    xaxis: {
        type: 'datetime',
        categories: date,
        labels: {
            format: 'MMM/yyyy',
        },
        tickAmount: 20,
        tooltip: {
            enabled: false,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'black',
            height: 3,

        },
    },
    stroke: {
        curve: 'smooth'
    },
    legend: {
        show: true
    },
    markers: {
        size: 5,
        colors: ["#000524"],
        strokeColor: "#00BAEC",
        strokeWidth: 3
    },
    tooltip: {
        theme: "dark"
    },



};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();
//   -----------------------------------------------------------------------------
var options_radial = {
    series: [90],
    chart: {
        id: 'radial',
        height: 350,
        type: 'radialBar',
        offsetY: -10,

    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                    offsetY: 76,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4
    },
    labels: ['Fatalities Rate'],
};

var chart_radial = new ApexCharts(document.querySelector("#chart_radial"), options_radial);
chart_radial.render();