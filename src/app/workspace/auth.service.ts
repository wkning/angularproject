import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
private username:string;
    constructor(private router: Router) {}
    resolve(): any{
        console.log('取激活路由对应视图组件数据使用');
    }
	canActivate(): boolean {
		this.username = sessionStorage.getItem('username');
		if(this.username == 'admin'){
			return true;
		}else{
			alert('请先做登录处理!');
			this.router.navigateByUrl('login');
		}
	}
}
