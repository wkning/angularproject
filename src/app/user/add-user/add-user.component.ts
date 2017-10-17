import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { User } from '../../models/user-model';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
private user: User = new User();
private userApi:any;
private userId:number;
private imgfile:any;
  constructor(private router:Router,private arouter:ActivatedRoute,private userS:DataService) {
  	this.userApi=userS
  }

  ngOnInit() {
  	this.userId = this.arouter.params['value']['id'];
		console.log(this.userId);
		if(this.userId != undefined){				
				this.userApi.getUserData('http://192.168.1.7/data/getNormalUserSingle.php?id='+this.userId).subscribe(
	  		res=>{
	  			console.log(res);
	  			this.user= res;
	  			this.user.password2 = res.password;
	  		},
	  		error=>{
	  			console.log(error);
	  		}
  			)
			
		}else{
			
		}
  }
	  adduser(){
	  	if(this.userId != undefined){
	  		this.userApi.postEditData('http://192.168.1.7/data/updateNormalUser.php',this.user).subscribe(
	  		res=>{
	  			console.log(res);
	  			if(res.result >0){
	  				alert('这条记录修改成功!');
	  				this.router.navigateByUrl('workspace/user/userlist');
	  			}
	  			},
	  		error=>{
	  			console.log(error);
	  		}
	  	)
	  	}else{
	  		this.userApi.postAddUserData('http://192.168.1.7/data/addNormalUser.php',this.user).subscribe(
	  		res=>{
	  			console.log(res);
	  			if(res.result >0){
	  				alert('这条记录插入成功!');
	  				this.router.navigateByUrl('workspace/user/userlist');
	  			}
	  			},
	  		error=>{
	  			console.log(error);
	  		}
	  	)
	  	}
	  }
}
