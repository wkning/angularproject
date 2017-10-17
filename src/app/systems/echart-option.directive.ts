import { Directive,Input ,OnInit,ElementRef} from '@angular/core';

import * as echarts from 'echarts';
@Directive({
//selector: '[appEchartOption]'
  selector:'echart'
})
export class EchartOptionDirective {
@Input('chartType') chartType:any;
  constructor(private el:ElementRef) { }
	public ngOnInit():void{
		console.log(this.el.nativeElement);
		
		echarts.init(this.el.nativeElement).setOption(this.chartType);
	}
}
