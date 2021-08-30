/* eslint-disable */

export default {
    baseUrlApi: process.env.NODE_ENV === 'production'
    ? 'http://127.0.0.1:8000/api'
      : 'http://127.0.0.1:8000/api',
  
  
    app: {
      viewMode: 'table'
    },
  
    chartOptions: {
      // special, membuat width/height area chart dinamis dimana ini dikalikan dengan jumlah bar.
      // sehingga membuat semua width-bar sama disemua chart.
      barWidth: 30,
      line: {
        legend: 'none', // { position: 'bottom', alignment: 'center' }
        animation: {
          startup: true,
          duration: 1000,
          easing: 'in',
        },
        chartArea: {
          left: 50,
          top: 10,
          width: '100%',
          height: '75%',
        },
        hAxis: {
          slantedText: true,
          slantedTextAngle: 40,
          textStyle: {
            color: '#00539f',
            // fontSize: 14,
          },
          format: 'M/d/yy',
        },
      }
    }
  }