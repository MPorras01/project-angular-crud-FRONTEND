import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/resources/myErrorStateMatcher';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  public user: FormGroup = new FormGroup({});

  @Input() userToUpdate: User = {
    id: 0,
    name: '',
    documentNumber: 0,
    userName: '',
    password: '',
  };

  matcher = new MyErrorStateMatcher();

  userToSave: any;
  showPassword: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges() {
    this.setFormsValues();
  }

  createForm() {
    this.user = this._fb.group(
      {
        id: ['', Validators.nullValidator],
        name: ['', Validators.required],
        documentNumber: ['', Validators.required],
        userName: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: [''],
      },
      { validators: this.checkPasswords }
    );
  }

  setFormsValues() {
    this.user.patchValue({
      id: this.userToUpdate.id,
      name: this.userToUpdate.name,
      documentNumber: this.userToUpdate.documentNumber,
      userName: this.userToUpdate.userName,
      password: this.userToUpdate.password,
      confirmPassword: this.userToUpdate.password,
    });
  }

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = this.user.get('password')?.value;
    let confirmPass = this.user.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { isValid: false };
  };

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  updateUser(): void {
    this.userService.updateUser(this.user.value).subscribe(
      (response: any) => {
        this.user.reset();
        Swal.fire({
          icon: 'success',
          title: 'Se edito el usuario correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un error',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      }
    );

    setTimeout(() => {
    window.location.reload();
  }, 1000);

  }
}
