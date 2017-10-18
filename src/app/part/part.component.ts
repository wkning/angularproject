import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
import {flyIn} from '../animation/fly-in';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css'],
  animations:[flyIn]
})
export class PartComponent implements OnInit {
private userList:any=[
			{"index":"1","username":"发海景房","regtime":"按时发放","logintime":"按方法嘎嘎嘎"},
			{"index":"2","username":"发顺丰","regtime":"发声方法","logintime":"按方法嘎嘎嘎"},
			{"index":"3","username":"按方法嘎嘎嘎","regtime":"按方法嘎嘎嘎","logintime":"按方法嘎嘎嘎"},
			{"index":"4","username":"按方法嘎嘎嘎","regtime":"按方法嘎嘎嘎","logintime":"按方法嘎嘎嘎"}
			]
  constructor() { }

  ngOnInit() {
  	
  }
//	addData(){
//		if(this.datas.editdatas()){
//			console.log('http://192.168.1.6/data/updateNormalUser.php',this.shuju.id,this.user,this.pwd,this.email,this.headerpig)
//			this.datas.postEditData('http://192.168.1.6/data/updateNormalUser.php',this.shuju.id,this.user,this.pwd,this.email,this.headerpig).subscribe(
//			res=>{
//			}
//		);
//		}else{
//			this.datas.postUserData('http://192.168.1.6/data/addNormalUser.php',this.user,this.pwd,this.email,this.headerpig).subscribe(
//			res=>{
//			}
//		); 
//		} 	
//	//this.router.navigateByUrl('workspace/user')
//	}
//	ngDoCheck(){
//			if(this.datas.editdatas()){
//		this.shuju=this.datas.editdatas();
//		this.user=this.shuju.username;
//		this.email=this.shuju.email;
//		this.pwd=this.shuju.password;
//		this.headerpig=this.shuju.profile;
//	}
//	}
}
