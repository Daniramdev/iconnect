fetch('/dailyhcbdg')
    .then(response => response.json())
    .then(data => {
        // Hitung total data
        const totalData = data.reduce((sum, item) => {
            return sum + parseInt(item[1]);
        }, 0);

        Highcharts.chart('dailyhcbdg', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Dailyhc Bandung',
                style: {
                    fontSize: '14px',
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
                    text: 'Dailyhc'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        format: '{y}',
                    },
                    enableMouseTracking: false
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