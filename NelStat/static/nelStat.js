var strategy_classification = 'all',
    time_period = 'all';

$(document).ready(function () {
  $.get( "http://127.0.0.1:5000/summaryTable/?strategyClassification=g&timePeriod=2", function(summaryTableData) {
  $( "#summaryTable" ).html( summaryTableData );
  });

  $.getJSON( "http://127.0.0.1:5000/bulletChart/?strategyClassification=g&timePeriod=2", function(bulletChartData) {
    $(function () {
      var bulletChart = Highcharts.chart('bulletChart', {
        chart: {
          inverted: true,
          type : 'bullet'
        },
        title: {
          text: 'Strategy Performance Summary'
        },
        xAxis: {
          title: {
            text: 'Performance'
          }
        },
        yAxis: {
          title: {
            text: 'Strategy'
          }
        },
        series: [{
          data: [{
            y: 1650,
            target: 2100
          }]
        }]
      });
    });
  });
});
