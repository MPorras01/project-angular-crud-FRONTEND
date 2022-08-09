import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/resources/myErrorStateMatcher';
import { UserServiceService } from 'src/app/user/service/user-service.service';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
})
export class CreatePersonComponent implements OnInit {
  public user: FormGroup = new FormGroup({});
  showPassword: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private PersonService: PersonService
  ) {}

  matcher = new MyErrorStateMatcher();

  userToSave: any;

  savePerson(): void {
    this.PersonService.savePerson(this.user.value).subscribe((response) => {
      this.user.reset();

      this.userToSave = this.userToSave.filter(
        (item: { id: any }) => response.id != item.id
      );
    });
  }


  createForm() {
    this.user = this._fb.group(
      {
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        document: ['', Validators.required],
        age: ['', Validators.required],
        stature: ['', Validators.required],
        size: ['', Validators.required],
        weight: ['', Validators.required],
        }
    );
  }


  ngOnInit(): void {
    this.createForm();
  }
}
