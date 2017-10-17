import { Component, OnInit } from '@angular/core';
//declare var chart:any;

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {
private pieEcharts = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['深圳','北京','上海','广州','长沙']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'深圳'},
                {value:310, name:'北京'},
                {value:234, name:'上海'},
                {value:135, name:'广州'},
                {value:1548, name:'长沙'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
  constructor() { }

  ngOnInit() {
  	
  }
	public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
 
  public barChartData:any[] = [
    {data: [30, 159, 200, 281, 300, 255,1000, 359, 480, 300, 1000, 255], label: 'Series A'},
  ];
  public lineChartData:any[] = [
    {data: [30, 159, 200, 281, 300, 255,100, 359, 480, 300, 100, 255], label: 'Series A'},
  ];
}
