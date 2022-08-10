import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {

    this.userService
      .login({ userName: this.userName, password: this.password })
      .subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: response.Mensaje,
            showConfirmButton: false,
            timer: 1500,
          });
          this.userService.changeAutenticate();
          this.userService.saveUserSesion(this.userName);
          this.router.navigate(['CreateUserComponent']);
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          Swal.fire({
            icon: 'error',
            title: error.error.message,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error);
        }
      );
  }
}
