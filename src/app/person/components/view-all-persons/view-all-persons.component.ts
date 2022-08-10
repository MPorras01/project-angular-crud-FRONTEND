import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
import { PersonService } from '../../service/person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-persons',
  templateUrl: './view-all-persons.component.html',
  styleUrls: ['./view-all-persons.component.scss'],
})
export class ViewAllPersonsComponent implements OnInit {
  constructor(private personService: PersonService) {}

  listPerson: Person[] = [];

  personToUpdate: Person = {
    id: 0,
    name: '',
    lastName: '',
    document: 0,
    age: 0,
    stature: '',
    size: '',
    weight: 0,
  };

  ngOnInit(): void {
    this.personService.getAllPerson().subscribe((response) => {
      console.log(response);

      this.listPerson = response;
    });
  }

  onSelectPerson(person: Person) {
    this.personToUpdate = person;
  }

  deletedPerson(id: number): void {
    this.personService.deletedPerson(id).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Se elimino la persona correctamente',
        showConfirmButton: false,
        timer: 1500,
      });
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
