import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widgets-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{


  @Input() label: string;
  @Input() percentage: string;
  @Input() total: string;


  chartOptions:any ;
  Highcharts = Highcharts;
  constructor() {
    this.label=''
 this.percentage=''
this.total=''}
  ngOnInit() {
   this.chartOptions = {
    chart: {
      type: 'area'
  },
  title: {
      text: '',
      align: 'left'
  },
  subtitle: {
      text: ''
  
  },
  tooltip: {
      shared: true,
      headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
  },
  
  series: [{
      name: 'Ocean transport',
      data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
  }, {
      name: 'Households',
      data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

  }, {
      name: 'Agriculture and hunting',
      data: [78, 71, 30, 66, 57, 49, 49, 49, 49]
  }, {
      name: 'Air transport',
      data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

  }, {
      name: 'Construction',
      data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
  }]
};
setTimeout(()=>{window.dispatchEvent(new Event ('resize') ); },

300
);

}

}
