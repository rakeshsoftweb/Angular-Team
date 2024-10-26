import { Routes } from '@angular/router';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { AddclientComponent } from './addclient/addclient.component';

export const routes: Routes = [
    {path:"clientlist", component:ClientlistComponent},
    {path:"addclient", component:AddclientComponent},
];
