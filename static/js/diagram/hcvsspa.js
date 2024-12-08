fetch('/hcvsspa')
    .then(response => response.json())
    .then(data => {
         // Hitung total HC
        const totalHC = data.reduce((total, item) => total + parseInt(item[1]), 0);

         // Hitung total SPA
        const totalSPA = data.reduce((total, item) => total + parseInt(item[2]), 0);

         // Tampilkan total HC dan total SPA dalam subtitle grafik
        const subtitleText = `Total HC: ${totalHC} Total SPA: ${totalSPA}`;
Highcharts.chart('hcvsspa', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'HCvsSPA',
        align: 'center',
        style: {
            fontSize: '15px'
        },
    },
    subtitle: {
        text: subtitleText,
    },
    xAxis: {
        categories: data.map(item => item[0]),
        title: {
            text: null
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true
            },
            groupPadding: 0.1
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'HC',
        data: data.map(item => parseInt(item[1]))
    }, {
        name: 'QA',
        data: data.map(item => parseInt(item[2]))
    },]
});
})
.catch(error => {
    console.error('Terjadi kesalahan:', error);
});
