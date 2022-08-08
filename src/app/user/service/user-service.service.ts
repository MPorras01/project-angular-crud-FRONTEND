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

  private API_SERVER = 'http://localhost:8090/user/';

  public getAllUser(): Observable<any> {
    this.http.get(this.API_SERVER).subscribe((response) => {
      console.log(response);
    });

    return this.http.get(this.API_SERVER);
  }

  public saveUser(user: any): Observable<any> {
    return this.http.post(this.API_SERVER, user);
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put(this.API_SERVER, user);
  }

  public deletedUser(id: any): Observable<any> {
console.log("sii llega el id " +id);

    return this.http.delete<any>(this.API_SERVER + id);
  }

  public getUser() {
    window.sessionStorage.getItem(USER_NAME);
  }
}
