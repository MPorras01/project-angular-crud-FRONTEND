import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const USER_NAME = '';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:8090/user/saveUser';

  

  public saveUser(usuario: string,): Observable<User> {
    console.log(usuario);

    window.sessionStorage.setItem(USER_NAME, usuario);

       return this.http.post<User>(this.url, usuario);
  }

  public getUser() {
    window.sessionStorage.getItem(USER_NAME);
  }
}
