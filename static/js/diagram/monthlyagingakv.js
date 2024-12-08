fetch('/monthly')
    .then(response => response.json())
    .then(data => {
        // Calculate the total sum of 'HP', 'HC', and 'TUR' datasets
        const totalSum = data.reduce((sum, item) => {
            return sum + parseInt(item[1]);
        }, 0);

        const dataSeries = data.map(item => parseFloat(item[1])); // Menggunakan parseFloat untuk mempertahankan desimal
        const total = dataSeries.reduce((sum, value) => sum + value, 0).toFixed(1);

        Highcharts.chart('monthly', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Aging',
                style: {
                    fontSize: '12px',
                },
            },
            subtitle: {
                text: `Total: ${total}%`,
            },
            xAxis: {
                text: 'X Axis Label', // Ganti ini dengan label yang sesuai
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}%',
                        inside: false
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Aging',
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
