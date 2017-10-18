import { Component, OnInit } from '@angular/core';
import {flyIn} from '../animation/fly-in';

@Component({
  selector: 'app-artical',
  templateUrl: './artical.component.html',
  styleUrls: ['./artical.component.css'],
  animations:[flyIn]
})
export class ArticalComponent implements OnInit {
private userList:any=[
			{"index":"1","username":"按方法嘎嘎嘎","regtime":"按方法嘎嘎嘎","logintime":"按方法嘎嘎嘎"},
			{"index":"2","username":"按方法嘎嘎嘎","regtime":"按方法嘎嘎嘎","logintime":"按方法嘎嘎嘎"},
			{"index":"3","username":"按方法嘎嘎嘎","regtime":"按方法嘎嘎嘎","logintime":"按方法嘎嘎嘎"},
			{"index":"4","username":"按方法嘎嘎嘎","regtime":"按方法嘎嘎嘎","logintime":"按方法嘎嘎嘎"}
			]
  constructor() { }

  ngOnInit() {
  }

}
