import { Component, OnInit } from '@angular/core';
import {OfflineOptions, ControlAnchor, NavigationControlType} from 'angular2-baidu-map';
declare var BMap:any;
import {flyIn} from '../animation/fly-in';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations:[flyIn]
})
export class MapComponent implements OnInit {


  constructor() { }
    ngOnInit() {
    	var map = new BMap.Map("container");
			var point = new BMap.Point(113.874951, 22.571198);
			map.centerAndZoom(point, 15);
			map.addControl(new BMap.NavigationControl());
			map.addControl(new BMap.ScaleControl());
			map.addControl(new BMap.OverviewMapControl());
			map.addControl(new BMap.MapTypeControl());
			map.addTileLayer(new BMap.PanoramaCoverageLayer());
			map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
			map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
			var traffic = new BMap.TrafficLayer(); // 创建交通流量图层实例
			map.addTileLayer(traffic);
			var local = new BMap.LocalSearch("深圳市", {
			renderOptions: {
			map: map,
			autoViewport: true,
			selectFirstResult: false
			},
			pageCapacity: 8
			});
			local.search("资信达大厦");
			
    }
}
