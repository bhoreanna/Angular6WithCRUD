import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-detials',
  templateUrl: './user-detials.component.html',
  styleUrls: ['./user-detials.component.css']
})
export class UserDetialsComponent implements OnInit {
tital= 'User Detial';
user1: User;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  const userName = this._activatedRoute.snapshot.params['userName'];
 // this.user1 = this._activatedRoute.snapshot.params['user'];
console.log('User Name' + userName);
    this.tital = userName;

  }

}
