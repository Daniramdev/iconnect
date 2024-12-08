fetch('/dgrmassets1')
    .then(response => response.json())
    .then(data => {
        // Calculate the total sum of "Sum of TUR"
        const totalSumOfTUR = data.reduce((sum, item) => sum + parseFloat(item[1]), 0);

        Highcharts.chart('dgrmassets1', {
            title: {
                text: 'Weekly Homepass 2023',
                align: 'left',

                style: {
                    fontSize: '15px',

                }

            },
            subtitle: {
                text: `Total Sum Of TUR: ${totalSumOfTUR.toFixed(0)}`, // Display the total sum in the chart subtitle
                align: 'left',
            },
            xAxis: {
                categories: data.map(item => item[0]),


            },


            yAxis: {
                title: {
                    text: ''
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    borderRadius: '4%'
                }
            },

            credits: {
                enabled: false,
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

            series: [{
                type: 'column',
                data: data.map(item => parseInt(item[1]))
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

    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });