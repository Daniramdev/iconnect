fetch('/data2')
    .then(response => response.json())
    .then(data => {

        const total = data.reduce((sum, item) => sum + parseFloat(item[3]), 0);

        Highcharts.chart('cirebon', {
            chart: {
                type: 'column'
            },

            title: {
                backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, 'rgb(240, 240, 255)']
                    ]
                },
                style: {
                    fontSize: '15px'
                },
                text: 'TUR CIREBON',
                align: 'left',
            },
            subtitle: {
                text: `Total Sum Of TUR ${total.toFixed(2)}%`, // Display the total sum in decimal format // Display the total sum in the chart subtitle
                align: 'left',
            },

            xAxis: {
                categories: data.map(item => item[0])
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}',
                        inside: false
                    }
                },
                spline: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.2f}%',
                        inside: false
                    }

                }
            },


            series: [{
                type: 'column',
                name: 'HP',
                data: data.map(item => parseInt(item[1]))
            }, {
                type: 'column',
                name: 'HC',
                data: data.map(item => parseInt(item[2]))
            }, {
                type: 'spline',
                name: 'TUR',
                data: data.map(item => parseFloat(item[3])),
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[2],
                    fillColor: 'blue'
                }
            }]
        });

    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });