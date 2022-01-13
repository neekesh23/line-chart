import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'line-chart',
  styles: [],
  template: `
  <div [chart]="chart"></div>
  `,
})
export class LineChartComponent implements OnInit {
  constructor() {}

  chart = new Chart({
    title: {
      text: 'Student Performace Growth',
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Student Range:',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: [
      {
        name: 'Student 1',
        type: 'line',
        color: '#ff0000',
        data: [100, 500, 1821, 450, 546, 100],
      },
      {
        name: 'Student 2',
        type: 'line',
        color: '#00ff00',
        data: [110, 120, 1021, 20, 542, 546],
      },
      {
        name: 'Student 3',
        type: 'line',
        color: '#0000ff',
        data: [160, 550, 1451, 650, 512, 130],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  });

  ngOnInit() {}
}
