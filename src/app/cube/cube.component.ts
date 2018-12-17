import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.css']
})
export class CubeComponent implements OnInit {

  constructor(public router: Router) { }


  items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'User Profile', icon: 'fa fa-user', routerLink: ['settings/userprofile'] },
      { label: 'Property Profile', icon: 'fa fa-building', routerLink: ['settings/propertyprofile'] },
      {
        label: 'Logout', icon: 'fa fa-sign-out',  command: (event) => {
          localStorage.setItem('userToken', null);
          this.router.navigate(['../../login']);
        }
      }
    ];

  }

}
