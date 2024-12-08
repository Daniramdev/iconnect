fetch('/oavshc')
    .then(response => response.json())
    .then(data => {
        // Hitung total HC
        const totalHC = data.reduce((total, item) => total + parseInt(item[2]), 0);

        // Hitung total SPA
        const totalSPA = data.reduce((total, item) => total + parseInt(item[1]), 0);

        // Hitung total keseluruhan persen
        const totalPersen = ((totalSPA / (totalSPA + totalHC)) * 100).toFixed(0);
        // Tampilkan total HC, total SPA, dan total keseluruhan persen di konsol
        console.log('Total HC:', totalHC);
        console.log('Total SPA:', totalSPA);
        console.log('Total Keseluruhan Persen:', totalPersen);

        Highcharts.chart('oavshc', {
            title: {
                text: 'OA vs HC',
                style: {
                    fontSize: '15px'
                },
            },
            subtitle: {
                text: `Total HC: ${totalHC} Total SPA: ${totalSPA} Total: ${totalPersen}%`,
                style: {
                    fontSize: '12px'
                }
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
                valueSuffix: ' million liters'
            },
            plotOptions: {
                series: {
                    borderRadius: '25%'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true, // Aktifkan label data
                        format: '{y}', // Format label sesuai dengan nilai data
                        inside: false // Label di luar batang
                    }
                },
                spline: {
                    dataLabels: {
                        enabled: true, // Aktifkan label data
                        format: '{y}', // Format label sesuai dengan nilai data
                        inside: false // Label di luar batang
                    }
                }
            },


            series: [{
                type: 'column',
                name: 'SPA',
                data: data.map(item => parseInt(item[1]))
            }, {
                type: 'spline',
                name: 'HC',
                data: data.map(item => parseInt(item[2])),
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[1],
                    fillColor: 'white'
                }
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