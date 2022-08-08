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

import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from 'src/app/resources/myErrorStateMatcher';
import { User } from '../../model/user';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  public user: FormGroup = new FormGroup({});
  showPassword: boolean = false;

  constructor(private _fb: FormBuilder, private userService: UserServiceService) {}


  matcher = new MyErrorStateMatcher();

  userToSave: any ;

  saveUser(): void{

    this.userService.saveUser(this.user.value).subscribe(response => {
      this.user.reset();

      this.userToSave = this.userToSave.filter((item: { id: any }) => response.id != item.id );

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
        userName: [
          '',
          [Validators.required, Validators.min(18), Validators.max(65)],
        ],
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


