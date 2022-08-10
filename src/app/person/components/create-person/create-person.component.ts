import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/resources/myErrorStateMatcher';
import { PersonService } from '../../service/person.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss'],
})
export class CreatePersonComponent implements OnInit {
  public user: FormGroup = new FormGroup({});
 
  constructor(
    private _fb: FormBuilder,
    private PersonService: PersonService
  ) {}

  matcher = new MyErrorStateMatcher();

  userToSave: any;

  savePerson(): void {
    this.PersonService.savePerson(this.user.value).subscribe((response) => {
      this.user.reset();

      Swal.fire({
        icon: 'success',
        title: 'Se guardo la persona correctamente',
        showConfirmButton: false,
        timer: 1500,
      });

      this.userToSave = this.userToSave.filter(
        (item: { id: any }) => response.id != item.id
      );
    },(error: HttpErrorResponse) => {
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error);
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
