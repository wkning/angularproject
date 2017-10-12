import {RouterModule} from "@angular/router"
import {WorkspaceComponent} from './workspace.component'

export const workspaceRoutes=[
	{
		path:'',
		component:WorkspaceComponent,
		children:[
			{
				path:'',
				redirectTo:'user'
			},
			{
				path:'user',
				loadChildren:'../user/user.module#UserModule'
			},
			{
				path:'zhuzhi',
				loadChildren:'../organzie/organzie.module#OrganzieModule'
			},
			{
				path:'map',
				loadChildren:'../map/map.module#MapModule'
			},
			{
				path:'articals',
				loadChildren:'../artical/artical.module#ArticalModule'
			},
			{
				path:'part',
				loadChildren:'../part/part.module#PartModule'
			},
			{
				path:'permission',
				loadChildren:'../permission/permission.module#PermissionModule'
			},
			{
				path:'systems',
				loadChildren:'../systems/systems.module#SystemsModule'
			},
			{
				path:'pinlun',
				loadChildren:'../pinlun/pinlun.module#PinlunModule'
			}
		]
	}
];