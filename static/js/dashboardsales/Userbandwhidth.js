fetch('/bandwidth')
    .then(response => response.json())
    .then(data => {



        Highcharts.chart('bandwidth', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'User-Bandwidth',
                align: 'left',
                style: {
                    fontSize: '14px',
                },
            },
            subtitle: {
                align: 'left'
            },
            xAxis: {
                categories: data.map(item => item[0]),
                title: {
                    text: null
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            yAxis: {
                min: 0,
                title: {
                    text: '',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify',
                },
                gridLineWidth: 0
            },

            labels: {
                format: 'M'
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    borderRadius: '50%',
                    dataLabels: {
                        enabled: true
                    },
                    groupPadding: 0.1
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                data: data.map(item => parseInt(item[1]))
            }, ]
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });