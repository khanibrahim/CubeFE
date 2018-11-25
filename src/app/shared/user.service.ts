import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from './user.model';
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:8086';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      'username': user.username,
      'password': user.password,
      'email': user.email,
      'roleName': user.roleName,
      'confirmPassword': user.confirmPassword
    }
    console.log(user)
  //  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/api/account/Register', body, {headers:reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var formdata = {'username':userName, 'password':password, 'grant_type':'password'}
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    console.log(userName,password,'2')
    return this.http.post(this.rootUrl + '/api/account/login', formdata, {headers:reqHeader});
  }

  getUserClaims(){
    return  this.http.get(this.rootUrl+'/api/guest');
   }
  
}