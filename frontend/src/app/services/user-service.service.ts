import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : any;
  
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

  deleteToken(){
    return window.sessionStorage.removeItem('token')
  }

  getUser(){
    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this.getToken());
      console.log("get user service", headers);
      
    return this.http.get("http://localhost:5000/user/get-user",{headers})
  }

  update(user : any){
    return  this.http.put("http://localhost:5000/user/login",user)
  }

  delete(id: string) {
    console.log(id);
    
    return this.http.post('http://localhost:5000/user/delete',{id})
  }

  getAllUsers(){
    return this.http.get('http://localhost:5000/admin/users')
  }
  getSearchUsers(key: string){
    return this.http.get(`http://localhost:5000/admin/search?searchKey=${key}`)
  }
}
