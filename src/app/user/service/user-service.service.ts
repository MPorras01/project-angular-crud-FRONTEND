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
  
  autenticate: boolean = false;

  public changeAutenticate(){

  this.autenticate = !this.autenticate;

  }

  public login(user: any): Observable<any> {
    return this.http.post(this.API_SERVER + 'login', user);
  }

  public getAllUser(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }

  public saveUser(user: any): Observable<any> {
    return this.http.post(this.API_SERVER, user);
  }

  public updateUser(user: any): Observable<any> {
    return this.http.put(this.API_SERVER, user);
  }

  public deletedUser(id: any): Observable<any> {
    return this.http.delete<any>(this.API_SERVER + id);
  }

  public getUser() {
    return sessionStorage.getItem('userName');
  }

  public saveUserSesion(userName: string) {
    window.sessionStorage.setItem('userName', userName);
  }
}
