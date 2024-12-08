fetch('/data1')
    .then(response => response.json())
    .then(data => {
        // Calculate the total sum of 'HP', 'HC', and 'TUR' datasets
        const totalSumHP = data.reduce((sum, item) => sum + parseInt(item[1]), 0);
        const totalSumHC = data.reduce((sum, item) => sum + parseInt(item[2]), 0);
        const totalSumTUR = data.reduce((sum, item) => sum + parseInt(item[3]), 0);

        // Calculate the average values for 'HP', 'HC', and 'TUR'
        const averageHP = totalSumHP / data.length;
        const averageHC = totalSumHC / data.length;
        const averageTUR = totalSumTUR / data.length;

        Highcharts.chart('dgrmbandung', {
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
                text: 'TUR BANDUNG',
                align: 'left',
            },
            subtitle: {
                text: `Total Sum - HP: ${totalSumHP}, HC: ${totalSumHC}, TUR: ${totalSumTUR} | 
                       Average HP: ${averageHP.toFixed(2)}, Average HC: ${averageHC.toFixed(2)}, Average TUR: ${averageTUR.toFixed(2)}`,
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
                        format: '{y}',
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
                data: data.map(item => parseInt(item[3])),
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
