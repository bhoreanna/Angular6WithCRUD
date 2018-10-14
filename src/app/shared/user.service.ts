import { User } from './user.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {


private baseUrl = 'http://localhost:9991';

user: User;
data: String = 'anna';
  constructor(private _http:  HttpClient) {

    setInterval(() => {
       this._http.post(this.baseUrl + '/getUser', this.data);

    }, 1000);
   }
  login(user: User)
  {
    console.log('i am in user service User name: ' + user.userName );
  return this._http.post(this.baseUrl + '/loginUser', user);

  }
getUserList()
{
  return this._http.get(this.baseUrl + '/userList');

}
updateUser(user: User)
{
  console.log('i am in UPDATE user service User name: ' + user.userName );

  return this._http.post(this.baseUrl + '/updateUser', user)

}



newUser(user: User)
{
  console.log('i am in NEW user service User name: ' + user.userName );

  return this._http.post(this.baseUrl + '/newUser', user);

}

deleteUser(user: User)
{
  console.log('i am in DeleteUser service User name: ' + user.userName );
  return this._http.delete(this.baseUrl + '/deleteUser' + user.userName);

}

  registerUser(user)
  {
    console.log('<--i am in registorUser() in userService');
    let u: User = {
      userName: user.UserName,
      password: user.Password,
      firstName: user.FirstName,
      lastName: user.LastName,
      email: user.Email
    }
    console.log(u);
  console.log('i am in Registeruser service User name: ' + u.userName );
  return this._http.post(this.baseUrl + '/registorUser', u);

}



setter(user: User)
{
this.user = user;
}
getter()
{
  return this.user;
}

}
