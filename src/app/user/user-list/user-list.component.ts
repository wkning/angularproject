import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../../data.service';
import {flyIn} from '../../animation/fly-in';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations:[flyIn]
})
export class UserListComponent implements OnInit {
private userList:Array<any>;
private userApi:any;
  constructor(private router:Router,private user:DataService) {
  	this.userApi = user;
  }

  ngOnInit() {
  	this.getDataList();
  }
  
	adduser(){
  	this.router.navigateByUrl('workspace/user/adduser');
  }
	
	getDataList(){ 	
  	this.userApi.getUserData('http://192.168.1.7/data/getNormalUser.php').subscribe(
  		res=>{
  			this.userList = res;
  			let beginIndex=1;
  			for(let item of this.userList){
  				item.index=beginIndex;
  				beginIndex++;
  			}
  		},
  		error=>{
  			console.log(error);
  		}
  	)
  }
	updateUser(id){
  	this.router.navigateByUrl('workspace/user/edituser/'+id); 	
  }
  
  deleteUser(id){
  	this.userApi.getUserData('http://192.168.1.7/data/delNormalUser.php?id='+id).subscribe(
  		res=>{
  			console.log(res);
  			if(res.result == 1){
  				alert('这条记录已经删除!');
  				this.getDataList();
  			}else{
  				alert('删除失败,请重新尝试!');
  			}
  		},
  		error=>{
  			console.log(error);
  		}
  	)
  }
}
