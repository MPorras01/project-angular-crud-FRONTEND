import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-view-all-persons',
  templateUrl: './view-all-persons.component.html',
  styleUrls: ['./view-all-persons.component.scss'],
})
export class ViewAllPersonsComponent implements OnInit {
  constructor(private personService: PersonService) {}

  listPerson: Person[] = [];

  ngOnInit(): void {
    this.personService.getAllPerson().subscribe((response) => {
      console.log(response);

      this.listPerson = response;
    });
  }
}
