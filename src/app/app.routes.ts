import {RouterModule} from '@angular/router'
import {LoginComponent} from './login/login.component'

export const AppRoutes =[
	{
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'workspace',
		loadChildren:'./workspace/workspace.module#WorkspaceModule'
	}
];
