fetch('/sale4')
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

        Highcharts.chart('sale4', {
            chart: {
                type: 'areaspline'
            },
            title: {

                align: 'left'
            },
            subtitle: {
                align: 'left'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 120,
                y: 70,
                floating: true,
                borderWidth: 1,
                backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
            },
            xAxis: {
                categories: data.map(item => item[0]),
            },
            yAxis: {
                title: {
                    text: 'M'
                }
            },

            tooltip: {
                shared: true,
                headerFormat: '<b>{point.x}</b><br>',
                pointFormat: '{series.name}: {point.y:f}M'
            },

            credits: {
                enabled: false
            },

            plotOptions: {
                dataLabels: {
                    enabled: true, // Aktifkan label data
                    format: '{y}', // Format label sesuai dengan nilai data
                    inside: false
                        // Label di luar batang
                }

            },
            series: [{
                    name: 'rev',
                    data: data.map(item => parseInt(item[1])),

                },
                {
                    name: 'tgl',
                    data: data.map(item => parseInt(item[2])),

                },
            ]
        });

    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });