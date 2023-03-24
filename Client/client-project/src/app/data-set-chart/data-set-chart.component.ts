import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexLegend,
} from 'ng-apexcharts';
import { ApiService } from '../Shared/api.service';

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  plotOptions?: ApexPlotOptions;
  legend?: ApexLegend;
};

@Component({
  selector: 'app-data-set-chart',
  templateUrl: './data-set-chart.component.html',
  styleUrls: ['./data-set-chart.component.scss'],
})
export class DataSetChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  dataSetData: any;
  data: any[] = [];

  constructor(private api: ApiService) {}

  async ngOnInit() {
    this.api.GetAllList().subscribe((response) => {
      this.dataSetData = response;
      if (this.dataSetData) {
        for (let i = 0; i < this.dataSetData.length; i++) {
          this.data.push({
            name: this.dataSetData[i].event,
            data: [
              {
                x: '.',
                y: [this.dataSetData[i].start, this.dataSetData[i].end],
              },
            ],
          });
        }
      }
      // this.data.sort((a, b) =>
      //   a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      // );
    });

    this.chartOptions = {
      series: this.data,
      chart: {
        height: 350,
        type: 'rangeBar',
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '100%',
          rangeBarGroupRows: true,
        },
      },
      colors: ['#FF0000', '#000000', '#808080'],
      fill: {
        type: 'solid',
      },
      xaxis: {
        type: 'numeric',
        tickPlacement: 'between',
        tickAmount: 27,
        labels: {
          show: true,
          rotate: -90,
          rotateAlways: true,
          minHeight: 50,
          maxHeight: 200,
          style: {
            colors: [],
            fontSize: '13px',
            fontWeight: 700,
          },
        },
      },

      legend: {
        position: 'left',
        horizontalAlign: 'right',
        offsetY: 100,
      },
    };
  }
}
