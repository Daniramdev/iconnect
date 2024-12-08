fetch('/revaccumtsk')
    .then(response => response.json())
    .then(data => {

        Highcharts.chart('revaccumtsk', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Rev Accum',
                style: {
                    fontSize: '14px',
                },
            },
            credits: {
                enabled: false,
            },

            xAxis: {
                categories: data.map(item => item[0]),
            },
            yAxis: {
                title: {
                    text: 'Rev Accum'
                }
            },
            labels: {
                format: 'M'
            },
            tooltip: {
                valueSuffix: 'millions'
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}',
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                data: data.map(item => parseInt(item[1]))
            }]
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });