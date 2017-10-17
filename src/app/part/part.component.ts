import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
private email:string;	
private user:string;
private pwd:any;
private headerpig:string;
private shuju:any;
  constructor(private datas:DataService,private router:Router) { }

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
