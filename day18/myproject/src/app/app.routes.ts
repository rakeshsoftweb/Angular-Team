import { Routes } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"clientlist", component:ClientlistComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"addclient", component:AddclientComponent},
    {path:"users", component:UsersComponent, children:[
        {path:"user/:uid/:uname", component:UserComponent}
    ]},
    
];
