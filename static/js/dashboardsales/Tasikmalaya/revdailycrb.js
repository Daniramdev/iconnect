fetch('/revdailytsk')
    .then(response => response.json())
    .then(data => {


        Highcharts.chart('revdailytsk', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Rev Daily Tasik',
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
                    text: 'Dailyhc'
                }
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
                name: 'Rev Daily',
                data: data.map(item => parseInt(item[1]))
            }]
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });