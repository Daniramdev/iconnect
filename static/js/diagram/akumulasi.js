fetch('/container')
    .then(response => response.json())
    .then(data => {
        const dataSeries = data.map(item => parseFloat(item[3])); // Menggunakan parseFloat untuk mempertahankan desimal
        const total = dataSeries.reduce((sum, value) => sum + value, 0).toFixed(2);


        // Format to 2 decimal places
        Highcharts.chart('container', {
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
                text: 'AkumulasiHC vs Target2023'
            },
            subtitle: {
                text: `Total PenCapaian: ${total}%`,
            },
            xAxis: {
                categories: data.map(item => item[0]),
                showInLegend: false,
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
                },
                spline: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}%',
                        inside: false
                    }
                },
            },
            series: [{
                type: 'column',
                name: 'AkumulasiHC',
                data: data.map(item => parseInt(item[1]))
            }, {
                type: 'column',
                name: 'Target',
                data: data.map(item => parseInt(item[2]))
            }, {
                type: 'spline',
                name: 'capaian',
                data: data.map(item => parseFloat(item[3])), // Menggunakan parseFloat untuk mempertahankan desimal
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[2],
                    fillColor: 'blue'
                },
                tooltip: {
                    valueDecimals: 2, // Mengatur jumlah desimal menjadi 2
                }
            }]
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });