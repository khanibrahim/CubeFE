import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor() { }
userName:string='Nazih';
  ngOnInit() {
  }
  logOut(){
    alert('')
    localStorage.setItem('userToken',null) ;
  }
}
