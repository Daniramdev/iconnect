Highcharts.chart('dough', {
    chart: {
        type: 'pie',
        backgroundColor: 'transparent'
    },
    title: {
        text: ''
    },
    colors: ['blue', 'lightblue', 'gray'], // Mengatur warna data
    plotOptions: {
        pie: {
            innerSize: '50%',
            dataLabels: {
                enabled: true,
                format: '{y}',
                inside: false
            }
        }
    },
    series: [{
        name: 'Total',
        data: [
            ['Data 1', 45],
            ['Data 2', 30],
            ['Data 3', 25]
        ]
    }]
}, function(chart) {
    chart.exportChart({
        type: 'image/png',
        filename: 'doughnut_chart',
        options: {
            chart: {
                backgroundColor: 'transparent'
            },
            exporting: {
                chartOptions: {
                    plotOptions: {
                        pie: {
                            size: '20%'
                        }
                    }
                }
            }
        }
    });
});
