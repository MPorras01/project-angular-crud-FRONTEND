import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/resources/myErrorStateMatcher';
import { Person } from '../../model/person';
import { PersonService } from '../../service/person.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-person-modal',
  templateUrl: './edit-person-modal.component.html',
  styleUrls: ['./edit-person-modal.component.scss'],
})
export class EditPersonModalComponent implements OnInit {
  public person: FormGroup = new FormGroup({});

  @Input() personToUpdate: Person = {
    id: 0,
    name: '',
    lastName: '',
    document: 0,
    age: 0,
    stature: '',
    size: '',
    weight: 0,
  };

  matcher = new MyErrorStateMatcher();

  personToSave: any;

  constructor(private _fb: FormBuilder, private personService: PersonService) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges() {
    this.setFormsValues();
  }

  createForm() {
    this.person = this._fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      age: ['', Validators.required],
      stature: ['', Validators.required],
      size: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

  setFormsValues() {
    this.person.patchValue({
      id: this.personToUpdate.id,
      name: this.personToUpdate.name,
      lastName: this.personToUpdate.lastName,
      document: this.personToUpdate.document,
      age: this.personToUpdate.age,
      stature: this.personToUpdate.stature,
      size: this.personToUpdate.size,
      weight: this.personToUpdate.weight,
    });
  }

  updatePerson(): void {
    this.personService
      .updatePerson(this.person.value)
      .subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Se edito la persona correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.person.reset();
      },(error: HttpErrorResponse) => {
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error);
        });

     setTimeout(() => {
       window.location.reload();
     }, 1000);
  }
}
