import { Component, OnInit, ViewChild } from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartType} from "chart.js";
import { viewsDataMock } from 'testing/mocks/viewsDataMock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartData: any = {
    datasets: [
      {
        data: viewsDataMock,
        label: 'Views',
        backgroundColor: 'rgba(255,0,0,0.2)',
        borderColor: 'rgba(255,0,0,1)',
        pointBackgroundColor: 'rgba(255,0,0,1)',
        pointBorderColor: 'rgb(0,0,255)',
        pointHoverBackgroundColor: 'rgb(0,0,255)',
        pointHoverBorderColor: 'rgb(0,255,255)',
        fill: 'none',
      },
    ],
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };

  public chartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.3,
      },
    },
    scales: {
      x: {},
      'y-axis-0':
        {
          position: 'right',
        }
    },
    plugins: {
      legend: { display: true },
    }
  };

  public chartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() { }

  ngOnInit(): void {
  }
}
