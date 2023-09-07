!(function (s) {
  'use strict';
  var r = function () {};
  (r.prototype.respChart = function (r, e, o, a) {
    var t = r.get(0).getContext('2d'),
      n = s(r).parent();
    function l() {
      r.attr('width', s(n).width());
      switch (e) {
        case 'Line':
          new Chart(t, {type: 'line', data: o, options: a});
          break;
        case 'Doughnut':
          new Chart(t, {type: 'doughnut', data: o, options: a});
          break;
        case 'Pie':
          new Chart(t, {type: 'pie', data: o, options: a});
          break;
        case 'Bar':
          new Chart(t, {type: 'bar', data: o, options: a});
          break;
        case 'Radar':
          new Chart(t, {type: 'radar', data: o, options: a});
          break;
        case 'PolarArea':
          new Chart(t, {data: o, type: 'polarArea', options: a});
      }
    }
    s(window).resize(l), l();
  }),
    (r.prototype.init = function () {
      this.respChart(
        s('#lineChart'),
        'Line',
        {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
          datasets: [
            {
              label: 'Conversion Rate',
              fill: !1,
              backgroundColor: '#d9e6fd',
              borderColor: '#d9e6fd',
              data: [-90, -50, -70, 20, -35, 20, 10, 50, 30, 80],
            },
            {
              label: 'Average Sale Value',
              fill: !1,
              backgroundColor: '#4a8af6',
              borderColor: '#4a8af6',
              borderDash: [5, 5],
              data: [10, -50, 30, -80, 50, -30, 30, -80, 10, -10],
            },
          ],
        },
        {
          responsive: !0,
          tooltips: {mode: 'index', intersect: !1},
          hover: {mode: 'nearest', intersect: !0},
          legend: {labels: {fontColor: '#8997bd'}},
          scales: {
            xAxes: [
              {
                display: !0,
                gridLines: {color: 'rgba(137, 151, 189, 0.15)'},
                ticks: {fontColor: '#8997bd'},
              },
            ],
            yAxes: [
              {
                gridLines: {color: 'rgba(137, 151, 189, 0.15)'},
                ticks: {max: 100, min: -100, stepSize: 20, fontColor: '#8997bd'},
              },
            ],
          },
        }
      );
      this.respChart(
        s('#doughnut'),
        'Doughnut',
        {
          labels: ['Bitcoin', 'Ethereum', 'Litecoin'],
          datasets: [
            {
              data: [80, 80, 80],
              backgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
              borderColor: 'transparent',
              innerRadius: '55%',
              hoverBackgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
              hoverBorderColor: 'transparent',
            },
          ],
        },
        {responsive: !0, cutoutPercentage: 80, legend: {labels: {fontColor: '#8997bd'}}}
      );
      this.respChart(
        s('#pie'),
        'Pie',
        {
          labels: ['Desktops', 'Tablets', 'Mobiles'],
          datasets: [
            {
              data: [80, 80, 80],
              backgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
              borderColor: 'transparent',
              hoverBackgroundColor: ['#f7931a', '#4d79f6', '#e0e7fd'],
              hoverBorderColor: '#ffffff',
            },
          ],
        },
        {legend: {labels: {fontColor: '#8997bd'}}}
      );
      this.respChart(
        s('#bar'),
        'Bar',
        {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'Sales Analytics',
              backgroundColor: 'rgba(23, 97, 253, 0.4)',
              borderColor: '#4a8af6',
              borderWidth: 2,
              barPercentage: 0.3,
              categoryPercentage: 0.5,
              hoverBackgroundColor: 'rgba(23, 97, 253, 0.7)',
              hoverBorderColor: '#4a8af6',
              data: [65, 59, 80, 81, 56, 55, 40, 20],
            },
          ],
        },
        {
          responsive: !0,
          legend: {labels: {fontColor: '#8997bd'}},
          scales: {
            xAxes: [
              {
                barPercentage: 0.8,
                categoryPercentage: 0.4,
                display: !0,
                gridLines: {color: 'rgba(137, 151, 189, 0.15)'},
                ticks: {fontColor: '#8997bd'},
              },
            ],
            yAxes: [
              {gridLines: {color: 'rgba(137, 151, 189, 0.15)'}, ticks: {fontColor: '#8997bd'}},
            ],
          },
        }
      );
      this.respChart(
        s('#radar'),
        'Radar',
        {
          labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
          datasets: [
            {
              label: 'Desktops',
              backgroundColor: 'rgba(77,121,246,0.3)',
              borderColor: '#4d79f6',
              pointBackgroundColor: '#4ac7ec',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
              label: 'Tablets',
              backgroundColor: 'rgba(74,199,236,0.2)',
              borderColor: '#4ac7ec',
              pointBackgroundColor: '#4d79f6',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100],
            },
          ],
        },
        {
          legend: {labels: {fontColor: '#8997bd'}},
          scale: {
            gridLines: {color: 'rgba(137, 151, 189, 0.15)'},
            angleLines: {color: 'rgba(137, 151, 189, 0.15)'},
            pointLabels: {fontColor: '#8997bd'},
            ticks: {backdropColor: '#e0e7fd', fontColor: '#8997bd', beginAtZero: !0, fontSize: 10},
          },
        }
      );
      this.respChart(
        s('#polarArea'),
        'PolarArea',
        {
          datasets: [
            {
              data: [11, 16, 7, 18],
              backgroundColor: ['#f7931a', '#4d79f6', '#1ac9ff', '#e0e7fd'],
              borderColor: 'transparent',
              label: 'My dataset',
              hoverBorderColor: '#ffffff',
            },
          ],
          labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
        },
        {
          legend: {labels: {fontColor: '#8997bd'}},
          scale: {
            gridLines: {color: 'rgba(137, 151, 189, 0.15)'},
            angleLines: {color: 'rgba(137, 151, 189, 0.15)'},
          },
        }
      );
    }),
    (s.ChartJs = new r()),
    (s.ChartJs.Constructor = r);
})(window.jQuery),
  (function (r) {
    'use strict';
    window.jQuery.ChartJs.init();
  })();
