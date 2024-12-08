fetch('/tk1')
    .then(response => response.json())
    .then(data => {

        const dataSeries = data.map(item => parseFloat(item[4])); // Menggunakan parseFloat untuk mempertahankan desimal
        const total = dataSeries.reduce((sum, value) => sum + value, 0).toFixed(2);
        Highcharts.chart('rtk1', {
            title: {
                text: 'TUR TK 1',
                align: 'left',

                style: {
                    fontSize: '15px',

                }

            },
            subtitle: {
                text: `Total Sum Of TUR ${total}%`, // Display the total sum in the chart subtitle
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
                        inside: false
                            // Label di luar batang
                    }
                },

                spline: {
                    dataLabels: {
                        enabled: true, // Aktifkan label data
                        format: '{point.y:.2f}%', // Format label sesuai dengan nilai data
                        inside: false
                            // Label di luar batang
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