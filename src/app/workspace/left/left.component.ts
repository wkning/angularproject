import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
private select:any="/workspace/user/userlist";
  constructor(private router:Router) { }

  ngOnInit() {
  	
  }
	selectNode(val){
		this.select=this.router.url;
	}
}
