fetch('/monthlyagingbdg')
    .then(response => response.json())
    .then(data => {
        // Hitung total data
        const totalData = data.reduce((sum, item) => {
            return sum + parseInt(item[1]);
        }, 0);
        const dataSeries = data.map(item => parseFloat(item[1])); // Menggunakan parseFloat untuk mempertahankan desimal
        const total = dataSeries.reduce((sum, value) => sum + value, 0).toFixed(1);
        Highcharts.chart('monthlyagingbdg', {
            title: {
                text: 'Monthlyaging',
                align: 'left',
                style: {
                    fontSize: '10px',
                },
            },
            credits: {
                enabled: false,
            },
            subtitle: {
                text: `Total Data: ${total}%`,
            },
            xAxis: {
                categories: data.map(item => item[0]),
            },
            yAxis: {
                title: {
                    text: 'Monthlyaging'
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
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}%',
                    },
                    enableMouseTracking: false
                }
            },
            series: [{

                data: data.map(item => parseFloat(item[1]))
            }],
            tooltip: {
                valueDecimals: 2, // Mengatur jumlah desimal menjadi 2
            },
        });
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });