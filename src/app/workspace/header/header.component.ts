import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('signal', [
    state('void',style({'top':'-300px'})),
    state('show1',style({'top':'0px'})),
    transition('* => *',animate(500))
    ])
  ]

})
export class HeaderComponent implements OnInit {
private signal:any;
private show:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
	isShow(){
		this.show=!this.show;
		this.signal='show1'
	}
	close(){
		sessionStorage.clear();
		this.router.navigateByUrl('login');
	}
}
