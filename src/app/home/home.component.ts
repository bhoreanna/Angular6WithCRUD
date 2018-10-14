import { Component, OnInit } from '@angular/core';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private _userService: UserService, private _toastrService: ToastrService) { }

  ngOnInit() {
  }
logout()
{
  console.log('i click logout Button');
}
}
