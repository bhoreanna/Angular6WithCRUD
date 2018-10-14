import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';
import { UpperStrPipe } from '../../upper-str.pipe';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: any[];
  //public users: User[];
flag: boolean = false;
  constructor(private _router: Router, private _userService: UserService, private _toastrService: ToastrService) { }

  ngOnInit() {
    this.flag = true;

    this._userService.getUserList().subscribe((users : any) => {
      console.log(users);
      this.users = users;
    }, (error) =>  {
      console.log(error);
    });
  }
  //userList()
 // {
  //  this.flag = true;
   // this._userService.getUserList().subscribe((users:any) => {
     // console.log(users);
    //  this.users = users;
   // }, (error) =>  {
    //  console.log(error);
    //});
  //}
  deleteUser(user: User)
  {
    console.log('You Press Delete Button :' + user.userName);

    this._userService.deleteUser(user).subscribe((data: any) => {
      console.log('data:' + data);
      if(data==true)
      {
        console.log('i am in if ');
       this._toastrService.success('User Deleted SucessFully....!');
       console.log('after toastr Method ');
      // this._router.navigate(['/userList']);
      this._router.navigate(['/home']);

      }
      else{
        this._toastrService.error('Deletetion operation Faild Please Try Again....!');

      }
    }, ( error ) =>  {
      console.log(error);
    });


}
  updateUser(user)
  {
    console.log('You Press Update Button :'+user.userName);

    let u: User = {
      userName: user.userName,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
    console.log('User Object: '+u);
    console.log('after convertion User name :'+u.userName);

    this._userService.setter(u);
    console.log("after setter method in update student");
    this._router.navigate(['/home/editUser']);

  }

}
