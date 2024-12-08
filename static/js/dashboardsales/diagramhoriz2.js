fetch('/sale5')
    .then(response => response.json())
    .then(data => {
        // Calculate the total sum of 'HP', 'HC', and 'TUR' datasets
        const totalSum = data.reduce((sum, item) => {
            return sum + parseInt(item[1]);
        }, 0);

        // Define a reference value (you can change this as needed)
        const totalReference = 1000;

        // Calculate the total sum as a percentage with two digits before and after the decimal point
        const totalPercentage = (totalSum / totalReference).toFixed(2);


        Highcharts.chart('sale5', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Montly Revenue',
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