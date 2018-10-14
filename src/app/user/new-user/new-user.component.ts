import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  private user: User;
  constructor(private _router: Router, private _userService: UserService, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.user = new User();
    this. resetForm();
  }

  resetForm(form?: NgForm)
      {
          if (form != null){
            form.reset();
          }
            this.user = {
          userName: '',
          password: '',
          email: '',
          firstName: '',
          lastName: ''}

      }

      onFormSubmit()
      {
        console.log('User Name:' + this.user.userName);
        console.log('Password:' + this.user.password);
        console.log('First Name:' + this.user.firstName);
        console.log('Last Name:' + this.user.lastName);


        this._userService.newUser(this.user).subscribe((data: User) => {
          console.log('data:' + data.userName);
          this._router.navigate(['home/userList']);
        });

      }

}
