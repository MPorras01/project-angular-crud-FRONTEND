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
    console.log('useeer' + JSON.stringify(this.userToUpdate));

    this.createForm();
    this.user.reset();
  }

  createForm() {
    this.user = this._fb.group(
      {
        id: ['', Validators.nullValidator],
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
    console.log('this.user.value:   ' + JSON.stringify(this.user.value));

    this.userService.updateUser(this.user.value).subscribe((response: any) => {
      this.user.reset();

      this.userToSave = this.userToSave.filter(
        (item: { id: any }) => response.id != item.id
      );
    });
  }

}
