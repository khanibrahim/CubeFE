import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from './../../shared/common.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.commonService.setBlockUI(true);
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.commonService.setBlockUI(false);
      this.router.navigate(['/cube/home']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

}