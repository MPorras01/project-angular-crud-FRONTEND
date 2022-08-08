import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';

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
    });
  }

  onSelectUser(user: User) {
    this.userToUpdate = user;
  }

  deletedUser(id: number): void {
    this.userService
      .deletedUser(id)
      .subscribe((response: any) => {});
       window.location.reload();
  }
}
