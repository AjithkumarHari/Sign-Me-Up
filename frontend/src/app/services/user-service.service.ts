import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : any;
  serverUrl : string = environment.serverUrl

  constructor( private http : HttpClient) { }

  signup(user : User){
    return this.http.post(`${this.serverUrl}/user/signup`, user)
  }

  login(user : User){
    return this.http.post(`${this.serverUrl}/user/login`,user)
  }

  setToken(token : string){
    return window.sessionStorage.setItem('token',token)
  }

  getToken(){
    return window.sessionStorage.getItem('token')
  }

  deleteToken(){
    return window.sessionStorage.removeItem('token')
  }

  getUser(){     
    return this.http.get(`${this.serverUrl}/user/get-user`)
  }

  update(user : any){
    return  this.http.put(`${this.serverUrl}/user/login`,user)
  }

  delete(id: string) {
    return this.http.post(`${this.serverUrl}/user/delete`,{id})
  }

  getAllUsers(){
    return this.http.get(`${this.serverUrl}/admin/users`)
  }

  getSearchUsers(key: string){
    return this.http.get(`${this.serverUrl}/admin/search?searchKey=${key}`)
  }
}
