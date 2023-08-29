'use strict';
!(function (NioApp, $) {
  var refBarChart = {
    labels: [
      '01 Nov',
      '02 Nov',
      '03 Nov',
      '04 Nov',
      '05 Nov',
      '06 Nov',
      '07 Nov',
      '08 Nov',
      '09 Nov',
      '10 Nov',
      '11 Nov',
      '12 Nov',
      '13 Nov',
      '14 Nov',
      '15 Nov',
      '16 Nov',
      '17 Nov',
      '18 Nov',
      '19 Nov',
      '20 Nov',
      '21 Nov',
      '22 Nov',
      '23 Nov',
      '24 Nov',
      '25 Nov',
      '26 Nov',
      '27 Nov',
      '28 Nov',
      '29 Nov',
      '30 Nov',
    ],
    dataUnit: 'People',
    datasets: [
      {
        label: 'Join',
        color: '#9cabff',
        data: [
          110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90,
          110, 80, 125, 55, 95, 75, 90, 75, 90,
        ],
      },
    ],
  };
  function referStats(selector, set_data) {
    var $selector = $(selector || '.chart-refer-stats');
    $selector.each(function () {
      for (
        var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = void 0 === set_data ? eval(_self_id) : set_data,
          selectCanvas = document.getElementById(_self_id).getContext('2d'),
          chart_data = [],
          i = 0;
        i < _get_data.datasets.length;
        i++
      )
        chart_data.push({
          label: _get_data.datasets[i].label,
          data: _get_data.datasets[i].data,
          backgroundColor: _get_data.datasets[i].color,
          borderWidth: 2,
          borderColor: 'transparent',
          hoverBorderColor: 'transparent',
          borderSkipped: 'bottom',
          barPercentage: 0.8,
          categoryPercentage: 0.8,
        });
      var chart = new Chart(selectCanvas, {
        type: 'bar',
        data: {labels: _get_data.labels, datasets: chart_data},
        options: {
          plugins: {
            legend: {display: !1},
            tooltip: {
              enabled: !0,
              rtl: NioApp.State.isRTL,
              callbacks: {
                title: function () {
                  return !1;
                },
                label: function (t) {
                  return ''.concat(t.parsed.y, ' ').concat(_get_data.dataUnit);
                },
              },
              backgroundColor: '#fff',
              titleFont: {size: 11},
              titleColor: '#6783b8',
              titleMarginBottom: 4,
              bodyColor: '#9eaecf',
              bodyFont: {size: 10},
              bodySpacing: 3,
              padding: 8,
              footerMarginTop: 0,
              displayColors: !1,
            },
          },
          maintainAspectRatio: !1,
          scales: {
            y: {display: !1, ticks: {beginAtZero: !0}},
            x: {display: !1, ticks: {reverse: NioApp.State.isRTL}},
          },
        },
      });
    });
  }
  NioApp.coms.docReady.push(function () {
    referStats();
  });
  var profitCM = {
    labels: [
      '01 Nov',
      '02 Nov',
      '03 Nov',
      '04 Nov',
      '05 Nov',
      '06 Nov',
      '07 Nov',
      '08 Nov',
      '09 Nov',
      '10 Nov',
      '11 Nov',
      '12 Nov',
      '13 Nov',
      '14 Nov',
      '15 Nov',
      '16 Nov',
      '17 Nov',
      '18 Nov',
      '19 Nov',
      '20 Nov',
      '21 Nov',
      '22 Nov',
      '23 Nov',
      '24 Nov',
      '25 Nov',
      '26 Nov',
      '27 Nov',
      '28 Nov',
      '29 Nov',
      '30 Nov',
    ],
    dataUnit: 'USD',
    datasets: [
      {
        label: 'Send',
        color: '#5d7ce0',
        data: [
          0, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90, 110, 80, 125, 55, 95, 75, 90,
          110, 80, 125, 55, 95, 75, 90, 75, 0,
        ],
      },
    ],
  };

  function investProfit(selector, set_data) {
    var $selector = $(selector || '.chart-profit');
    $selector.each(function () {
      for (
        var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = void 0 === set_data ? eval(_self_id) : set_data,
          selectCanvas = document.getElementById(_self_id).getContext('2d'),
          chart_data = [],
          i = 0;
        i < _get_data.datasets.length;
        i++
      )
        chart_data.push({
          label: _get_data.datasets[i].label,
          tension: 0.4,
          backgroundColor: NioApp.hexRGB(_get_data.datasets[i].color, 0.3),
          fill: !0,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].color,
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: _get_data.datasets[i].color,
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 4,
          data: _get_data.datasets[i].data,
        });
      var chart = new Chart(selectCanvas, {
        type: 'line',
        data: {labels: _get_data.labels, datasets: chart_data},
        options: {
          plugins: {
            legend: {display: !1},
            tooltip: {
              enabled: !0,
              rtl: NioApp.State.isRTL,
              callbacks: {
                title: function () {
                  return !1;
                },
                label: function (t) {
                  return ''.concat(t.parsed.y, ' ').concat(_get_data.dataUnit);
                },
              },
              backgroundColor: '#fff',
              titleFont: {size: 11},
              titleColor: '#6783b8',
              titleMarginBottom: 4,
              bodyColor: '#9eaecf',
              bodyFont: {size: 10},
              bodySpacing: 3,
              padding: 8,
              footerMarginTop: 0,
              displayColors: !1,
            },
          },
          maintainAspectRatio: !1,
          scales: {
            y: {display: !1, ticks: {beginAtZero: !0}},
            x: {display: !1, ticks: {reverse: NioApp.State.isRTL}},
          },
        },
      });
    });
  }
  NioApp.coms.docReady.push(function () {
    investProfit();
  });
})(NioApp, jQuery);
