import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 user: User;
 isLoginError: boolean = false;
 islogin: boolean = false;
  constructor(private _router: Router, private _userService: UserService, private _toastrService: ToastrService) {
  }

  ngOnInit() {
    this._userService.setter(new User());
    this.user = this._userService.getter();

  }
  formReset()
  {
    this.user.userName = '';
    this.user.password = '';
  }

  onLoginSubmit()
  {
console.log('i am in login method');
this.islogin = true;

console.log('Username: ' + this.user.userName);
console.log('Password: ' + this.user.password);


this._userService.login(this.user).subscribe((data: User) => {
  console.log('data:' + data.userName);
  if(data.userName == this.user.userName)
  {
    console.log('i am in if ');
    this.formReset();
    this._toastrService.success('Login SucessFully....!');
    console.log('after toastr Method ');
    this._router.navigate(['/home/userList']);
  }
  else{
    this._toastrService.error('Login Faild Please Try Again....!');

  }
}, ( error ) =>  {
  console.log(error);
  this.isLoginError =true;
});

  }

}
