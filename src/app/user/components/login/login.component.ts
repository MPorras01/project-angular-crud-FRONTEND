import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(private userService: UserServiceService,private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.userService.saveUser(this.usuario);
    alert(this.userService.getUser());
    this.router.navigate(['']);
  }
}
