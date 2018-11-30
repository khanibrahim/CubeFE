import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userServer:UserService,private Router:Router) { }

  ngOnInit() {
  }
  OnSubmit(data:NgForm){
console.log(data.value);
debugger;
this.userServer.changePassword(data).subscribe((data:any)=>{
 

})
  }
}
