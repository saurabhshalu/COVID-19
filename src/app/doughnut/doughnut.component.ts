import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  @Input() newChartData;
  public chartOptions: any = {
    legend: {
      labels: {
        fontColor: "black",
        fontSize: 18,
        padding: 20
      },
      position: "bottom"
    },
    tooltips: {
      enabled: true,
      mode: "single",
      callbacks: {
        label: function(tooltipItem, data) {
          var allData = data.datasets[tooltipItem.datasetIndex].data;
          var tooltipLabel = data.labels[tooltipItem.index];
          var tooltipData = allData[tooltipItem.index];
          return tooltipLabel + ": " + tooltipData + "%";
        }
      }
    }
  };
  public chartType: string = 'doughnut';
  public chartLabels: Array<string> = ['Recovered', 'Death', 'Under Observation'];
  public chartData: any = [1, 1, 1];
  public chartColors: any[] = 
  [
      {
          backgroundColor: ['#21bf73','#f64b3c','#fdd365'],
          borderColor: '#072f5f'
      }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.newChartData !== undefined || this.newChartData !==null) {
      this.chartData = this.newChartData;
    }
  }

}
