import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router : Router) { }

  isQboard:boolean = false;
  isLogin:boolean = false;
  isRegister:boolean = false;
  
  routerurl:string = this.router.url;
  ngOnInit() {
    if(this.router.url == "/QBoard"){
      this.isQboard = true;
    }
    if(this.router.url == "/login"){
      this.isLogin = true;
    }
    if(this.router.url == "/Register"){
      this.isRegister = true;
    }
  }

}
