fetch('/monthlyhcbdg')
    .then(response => response.json())
    .then(data => {
        // Hitung total data
        const totalData = data.reduce((sum, item) => {
            return sum + parseInt(item[1]);
        }, 0);

        Highcharts.chart('monthlyhcbdg', {
            chart: {
                type: 'column',
            },
            title: {
                text: 'Monthlyhc',
                style: {
                    fontSize: '10px',
                },

            },
            credits: {
                enabled: false,
            },
            subtitle: {
                text: `Total Data: ${totalData}`,
            },
            xAxis: {
                categories: data.map(item => item[0]),
            },
            yAxis: {
                title: {
                    text: 'Monthlyhc'
                }
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

                data: data.map(item => parseInt(item[1]))
            }]
        });

    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });