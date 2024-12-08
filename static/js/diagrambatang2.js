// Create the chart
Highcharts.chart('dgrm2', {
    title: {
        text: 'Akumulasi HC',
        align: 'left',
        style: {
            fontSize: '10px',
        },
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
        title: {
            text: ''
        }
    },

    plotOptions: {
        series: {
            borderRadius: '25%'
        }
    },
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true, // Aktifkan label data
                format: '{y}', // Format label sesuai dengan nilai data
                inside: false // Label di luar batang
            }
        }
    },
    credits: {
        enabled: false
    },

    series: [{
        type: 'column',
        data: [24, 79, 72, 240, 167, 100, 100, 100, 100]
    }, {
        center: [75, 65],
        size: 100,
        innerSize: '70%',
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});


