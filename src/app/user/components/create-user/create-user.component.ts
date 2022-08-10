import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { MyErrorStateMatcher } from 'src/app/resources/myErrorStateMatcher';
import { UserServiceService } from '../../service/user-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  public user: FormGroup = new FormGroup({});
  showPassword: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private userService: UserServiceService
  ) {}

  matcher = new MyErrorStateMatcher();

  userToSave: any;

  saveUser(): void {
    this.userService.saveUser(this.user.value).subscribe((response) => {
      this.user.reset();
      Swal.fire({
        icon: 'success',
        title: 'Se guardo el usuario correctamente',
        showConfirmButton: false,
        timer: 1500,
      });

      this.userToSave = response.filter(
        (item: { id: any }) => response.id != item.id
      );

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

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = this.user.get('password')?.value;
    let confirmPass = this.user.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { isValid: false };
  };

  createForm() {
    this.user = this._fb.group(
      {
        name: ['', Validators.required],
        documentNumber: ['', Validators.required],
        userName: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: [''],
      },
      { validators: this.checkPasswords }
    );
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
    this.createForm();
  }
}
