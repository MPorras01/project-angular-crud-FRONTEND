import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.scss'],
})
export class ViewAllUserComponent implements OnInit {
  
  listUser: User[] = [];

  constructor(private userService: UserServiceService) {}

  userToUpdate: User = {
    id: 0,
    name: '',
    documentNumber: 0,
    userName: '',
    password: '',
  };

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((response) => {
      console.log(response);

      this.listUser = response;
    }, (error: HttpErrorResponse) => {
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error);
        });
  }

  onSelectUser(user: User) {
    this.userToUpdate = user;
  }

  deletedUser(id: number): void {
    this.userService
      .deletedUser(id)
      .subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Se eliminó el usuario correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
      });
     setTimeout(() => {
       window.location.reload();
     }, 1000);
       
  }
}
