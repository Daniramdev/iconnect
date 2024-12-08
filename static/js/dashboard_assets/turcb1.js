fetch('/turcb1')
    .then(response => response.json())
    .then(data => {
        // Calculate the total sum of "Sum of TUR"
        const totalSumOfTUR = data.reduce((sum, item) => sum + parseFloat(item[4]), 0);

        Highcharts.chart('turcb1', {
            title: {
                text: 'TUR CB1',
                align: 'left',
                style: {
                    fontSize: '15px',
                }
            },
            subtitle: {
                text: `Total Sum Of TUR ${totalSumOfTUR.toFixed(2)}%`, // Display the total sum in decimal format
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
            plotOptions: {
                series: {
                    borderRadius: '4'
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
                name: 'Cap',
                data: data.map(item => parseInt(item[1]))
            }, {
                type: 'column',
                name: 'HP',
                data: data.map(item => parseInt(item[2]))
            }, {}, {
                type: 'column',
                name: 'HC',
                data: data.map(item => parseInt(item[3]))
            }, {
                type: 'spline',
                name: 'Sum of TUR',
                data: data.map(item => parseFloat(item[4])),
                marker: {
                    lineWidth: 1,
                    lineColor: Highcharts.getOptions().colors[1],
                    fillColor: 'blue'
                },
            }]
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });