import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private data:any;
private userDatas:any;
private ipLocation:number=7;
  constructor(private datas:DataService,private router:Router) { 
  	this.data=datas
  }

  ngOnInit() {
  	this.data.getUserData('http://192.168.1.7/data/getNormalUser.php').subscribe(
  		res=>{
  			this.userDatas=res;
  		}
  	)
  }
	edit(value){
		this.data.getUserData('http://192.168.1.6/data/getNormalUserSingle.php?id='+value).subscribe(
  		res=>{
  			this.data.editdata(res)
  		}
  )
		this.router.navigateByUrl('workspace/part');	
	}
	addItem(){
		this.data.editdata()
		this.router.navigateByUrl('workspace/part');
	}
	del(value){
		this.data.getUserData("http://192.168.1.6/data/delNormalUser.php?id="+value).subscribe(
  		res=>{
  		}
  	)
		this.data.getUserData('http://192.168.1.6/data/getNormalUser.php').subscribe(
  		res=>{
  			this.userDatas=res;
  		}
  	)
	}
}
