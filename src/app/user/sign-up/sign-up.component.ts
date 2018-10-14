import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    private user: User;
    public emailPattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor( private _router: Router, private _userService: UserService, private _toastrService: ToastrService) {
   }

  ngOnInit() {
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
      onSubmit(form: NgForm)
      {
        console.log('i am in submit form button');
        this._userService.registerUser(form.value).subscribe((data :any) => {
          console.log('data:' + data);
          if(data == true)
          {
            console.log('i am in if ');
            this. resetForm();
           //this._toastrService.show('Registration SucessFully....!');
           this._toastrService.success('Registration SucessFully....!');
           console.log('after toastr Method ');
           this._router.navigate(['/login']);

          }
          else{
            this._toastrService.error('Registration Faild Please Try Again....!');

          }
        }, ( error ) =>  {
          console.log(error);
        });
      }



  }
