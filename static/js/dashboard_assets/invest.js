fetch('/invest')
    .then(response => response.json())
    .then(data => {
        // Calculate the total sum
        const totalSum = data.reduce((sum, item) => sum + parseFloat(item[4]), 0);

        // Format the total sum as a decimal with two decimal places
        const formattedTotal = totalSum.toFixed(2);

        Highcharts.chart('invest', {
            title: {
                text: 'TUR SELF INVESTMENT',
                align: 'left',
                style: {
                    fontSize: '15px',
                }
            },
            subtitle: {
                text: `Total Sum Of TUR: ${formattedTotal}%`, // Display the total sum in decimal format
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
                        format: '{point.y:.2f}%', // Format label sesuai dengan nilai data
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