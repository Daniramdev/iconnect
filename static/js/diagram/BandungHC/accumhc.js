fetch('/acumhcbdg')
    .then(response => response.json())
    .then(data => {
        // Hitung total data
        const totalData = data.reduce((sum, item) => {
            return sum + parseInt(item[1]);
        }, 0);
Highcharts.chart('acumhcbdg', {
    title: {
        text: 'Akumulasi HC',
        align: 'left',
        style: {
            fontSize: '10px',
        },
    },
    xAxis: {
        categories: data.map(item => item[0]),
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    credits: {
        enabled: false,
    },
    subtitle: {
        text: `Total Data: ${totalData}`,
    },

    plotOptions: {
        series: {
            borderRadius: '25%'
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
    credits: {
        enabled: false
    },

    series: [{
        type: 'column',
        data: data.map(item => parseInt(item[1]))
    }]
});

})
.catch(error => {
    console.error('Terjadi kesalahan:', error);
});
