import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { HttpHeaders } from '@angular/common/http'
import { retryWhen } from 'rxjs/operators';
import { throwError } from "rxjs";
import { environment } from '../../environments/environment';
@Injectable()
export class UserService {

  private rootUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      'username': user.username,
      'password': user.password,
      'email': user.email,
      'roleName': user.roleName,
      'confirmPassword': user.confirmPassword,
      'newPassword': user.newPassword,
      'oldPassword': user.oldPassword,
      'PropertyId': 0
    }
    console.log(user)
    //  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/api/account/Register', body, { headers: reqHeader });
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var formdata = { 'username': userName, 'password': password, 'grant_type': 'password' }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    console.log(userName, password, '2')
    return this.http.post(this.rootUrl + '/api/account/login', formdata, { headers: reqHeader });
  }

  getUserClaims() {
    return this.http.get(this.rootUrl + '/api/property');
  }

  changePassword(user) {
    var body = { OldPassword: user.OldPassword, NewPassword: user.NewPassword, ConfirmPassword: user.ConfirmPassword }
    console.log(user)
    console.log(body)
    return this.http.post(this.rootUrl + '/api/Account/ChangePassword', body);
  }
  getCurrentUser() {
    return this.http.get(this.rootUrl + '/api/Account/getCurrentUser');
  }

  updateUserDetail(user) {
    console.log(user);
    var body= {UserId:user.UserId,Email:user.Email,MobileNo:user.MobileNo};
    console.log(body);
    return this.http.put(this.rootUrl + '/api/Account/UpdateUserdetail',body);
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {

      console.log('ClientSide Error:', errorResponse.error.message);
    }
    else {
      console.log('Server Side Error:', errorResponse);
    }
    return throwError('Something went wrong.');
  }
}

