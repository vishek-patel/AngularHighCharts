import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
// import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCharts';


  lineChart = new Chart ({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    } as any
  ]
  });

  barChart = new Chart ({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    } as any, {
      name: 'John',
      data: [5, 7, 3]
    }]
  });

  //vertical bar chart 
  barChart2 = new Chart ({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    } as any, {
      name: 'John',
      data: [5, 7, 3]
    }]
  });


  
  pieChart = new Chart ({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Browser market shares'
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
      }, {
        name: 'Internet Explorer',
        y: 11.84
      }, {
        name: 'Firefox',
        y: 10.85
      }, {
        name: 'Edge',
        y: 4.67
      }, {
        name: 'Safari',
        y: 4.18
      }, {
        name: 'Other',
        y: 7.05
      }]
    } as any]
  });

          

}
