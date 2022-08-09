import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  private API_SERVER = 'http://localhost:8090/person/';

  public savePerson(person: any): Observable<any> {
    return this.http.post(this.API_SERVER, person);
  }

  public getAllPerson(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }
}
