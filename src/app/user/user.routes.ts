import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list/user-list.component';
import {AddUserComponent} from './add-user/add-user.component';

export const userRoutes = [
	{
		path:'',
		component:UserComponent,
		children:[
			{
				path:'',
				redirectTo:'userlist',
				pathMatch:'full'
			},
			{
				path:'userlist',
				component:UserListComponent
			},
			{
				path:'adduser',
				component:AddUserComponent
			},
			{
				path:'edituser/:id',
				component:AddUserComponent
			}
		]
	}	
];
