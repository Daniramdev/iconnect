fetch('/revaccum1')
    .then(response => response.json())
    .then(data => {


        Highcharts.chart('revaccum1', {
            title: {
                text: 'Revenue Accum',
                align: 'left',
                style: {
                    fontSize: '14px',
                },
            },
            xAxis: {
                categories: data.map(item => item[0]),
            },

            yAxis: {
                title: {
                    text: 'MILLIONS'
                }
            },
            tooltip: {
                valueSuffix: 'M'
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
                data: data.map(item => parseInt(item[1])),
            }, ]
        });

    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });