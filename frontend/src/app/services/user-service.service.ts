import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http : HttpClient) { }

  signup(user : User){
    return this.http.post("http://localhost:5000/user/signup", user)
  }

  login(user : User){
    return this.http.post("http://localhost:5000/user/login",user)
  }

  setToken(token : string){
    return window.sessionStorage.setItem('token',token)
  }
  getToken(){
    return window.sessionStorage.getItem('token')
  }
}
