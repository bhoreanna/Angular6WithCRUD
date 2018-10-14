import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {UserService} from './shared/user.service';
import {RouteGurdService} from './gurd/route-gurd.service';


import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { UserListComponent } from './user/user-list/user-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UpperStrPipe } from './upper-str.pipe';
import { ErrorComponent } from './error/error/error.component';
import { UserDetialsComponent } from './userDetials/user-detials/user-detials.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*const appRoutes: Routes = [
  { path: '', component: SignUpComponent },
 ];*/

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    UserListComponent,
    EditUserComponent,
    NavbarComponent,
    FooterComponent,
    NewUserComponent,
    UpperStrPipe,
    ErrorComponent,
    UserDetialsComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [UserService , RouteGurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
