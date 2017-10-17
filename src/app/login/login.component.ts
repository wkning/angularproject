import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
// 引入观察者模式的插件
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

import {LogindataService} from './logindata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  viewProviders:[LogindataService]
})
export class LoginComponent implements OnInit {
private logindata:any;
private myName:string;
private myPassword:string;
  constructor(private http:Http, private router:Router, private logindatas:LogindataService) { 
  	this.logindata=logindatas
  }

  ngOnInit() {
  	
  }
  
login(){
//	this.logindata.getUserData('mock-data/user-login-mock.json').subscribe(
//		res=>{
//			if(res.username == this.myName &&res.password == this.myPassword){
//				alert('登录成功');
//				sessionStorage.setItem('username',res.username);
//				this.router.navigateByUrl('workspace');
//			}else{
//				alert('用户名或密码错误,请重新输入!');
//			}
//		},
//		error=>{
//			console.log(error);
//		}
//		
//	);


	this.logindata.postUserData('http://192.168.1.7/data/getUser.php',this.myName,this.myPassword).subscribe(
  		res=>{
  			console.log(res); 			
  			if(res == null){
  				alert('用户名或密码错误,请重新输入!');
  			}else{
  				if(res.username == this.myName &&res.password == this.myPassword){
						alert('登录成功');
						//将登录信息保存在sessionStorage中
						sessionStorage.setItem('username',res.username);
						//将路由跳转到  workspace页
						this.router.navigateByUrl('workspace');
					}
  				
  			}
  		}
  	);
	
}

}
