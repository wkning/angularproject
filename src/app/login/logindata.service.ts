import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LogindataService {

  constructor(private http:Http) { }
	 public getUserData(dataUrl:string){
  	return this.http.get(dataUrl).map(res=>res.json()).catch(error=>Observable.throw(error||'server error!'));
  }
	 public postUserData(dataUrl:string,myusername:string,mypassword:string){
		let data = new URLSearchParams();//post提交的参数对象
		data.append('username',myusername);
		data.append('password',mypassword);
		return this.http.post(dataUrl,data).
		map(res=>res.json()).
		catch(error=>Observable.throw(error||'server error!'));
	}
}
