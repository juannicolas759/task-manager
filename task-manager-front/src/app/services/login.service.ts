import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubjec = new Subject<boolean>();
  user$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getDataUser() {
    return this.user$.getValue();
  }

  //generamos el token
  public generateToken(loginData: any) {
    return this.http.post(`${baserUrl}/login`, loginData);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //cerrar sesion y eliminamos el token del localStorage
  public logout() {
    localStorage.removeItem('token');
    return true;
  }

  //obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }


}