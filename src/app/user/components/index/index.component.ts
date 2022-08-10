import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}

  get autenticate() {
    return this.userService.autenticate;
  }
  ngOnInit(): void {
    console.log(this.autenticate);
  }

  logOut() {
    this.userService.changeAutenticate();
  }

  active(){
      this.userService.changeAutenticate();
  }
}
