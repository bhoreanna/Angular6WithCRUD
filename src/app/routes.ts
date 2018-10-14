
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {  NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {EditUserComponent } from './user/edit-user/edit-user.component';

import {NewUserComponent } from './user/new-user/new-user.component';
import { ErrorComponent } from './error/error/error.component';
import { UserDetialsComponent } from './userDetials/user-detials/user-detials.component';
import { RouteGurdService } from './gurd/route-gurd.service';
import { CustomerComponent } from './customers/customer/customer.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'home/userList', pathMatch: 'full' },
    { path: 'userList', component: UserListComponent },
    { path: 'editUser', component: EditUserComponent  },
    { path: 'newUser', component: NewUserComponent  },
    { path: 'customer', component: CustomerComponent  },
    { path: 'userDetials/:userName', canActivate: [RouteGurdService] , component: UserDetialsComponent  }

  ] },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },


  { path: 'signup', component: UserComponent  ,
children: [ { path: '', component: SignUpComponent}]
},
{ path: 'login', component: UserComponent  ,
children: [ {path: '', component: SignInComponent}]
},
{ path: '', redirectTo: 'login' , pathMatch: 'full' },


{ path: '**', component: ErrorComponent }


 ];
