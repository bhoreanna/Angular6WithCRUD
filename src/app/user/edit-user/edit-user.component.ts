import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
user: User;
  constructor(private _router: Router, private _userService: UserService, private _toastrService: ToastrService) { }

  ngOnInit() {
    console.log('i am in editUserComponenet ngOnInit:');
    this.user=this._userService.getter();
    console.log('User:' + this.user);
    console.log('user NAme: ' + this.user.userName);
    console.log('user pass: ' + this.user.password);
    console.log('user email: ' + this.user.email);
    console.log('user First name: ' + this.user.firstName);
    console.log('user last name: ' + this.user.lastName);


  }
  onFormSubmit()
  {
    console.log('User:' + this.user);
    console.log('user NAme: ' + this.user.userName);
    console.log('user pass: ' + this.user.password);
    console.log('user email: ' + this.user.email);
    console.log('user First name: ' + this.user.firstName);
    console.log('user last name: ' + this.user.lastName);
    console.log('OnFormSubmit()');

    this._userService.updateUser(this.user).subscribe((data: User) => {
      console.log('data:' + data.userName);
      this._router.navigate(['home/userList']);
    });

  }
}
