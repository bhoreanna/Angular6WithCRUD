import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 msg: String;
  constructor() {

    setInterval(() => {
      let currentDate = new Date();

      this.msg = currentDate.toDateString() + '' + currentDate.toLocaleTimeString();

    }, 1000);
  }

  ngOnInit() {
  }

}
