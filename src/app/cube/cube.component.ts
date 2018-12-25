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
      { label: 'Home', icon: 'fa fa-th', routerLink: ['home'] },
      { label: 'Q-Board', icon: 'fa fa-font', routerLink: ['qboard'] },
      {
        label: 'Settings', icon: 'fa fa-cog', items: [
          {
            label: 'Masters', icon: 'fa fa-list', items: [
              { label: 'Courses', icon: 'fa fa-list', routerLink: ['settings/masters/courses'] },
              { label: 'Subjects', icon: 'fa fa-list', routerLink: ['settings/masters/subjects'] },
              { label: 'Lessons', icon: 'fa fa-list', routerLink: ['settings/masters/lessons'] },
              { label: 'Questions', icon: 'fa fa-list', routerLink: ['settings/masters/questions'] }
            ]
          },
          { label: 'User Profile', icon: 'fa fa-user', routerLink: ['settings/userprofile'] },
          { label: 'Property Profile', icon: 'fa fa-user', routerLink: ['settings/propertyprofile'] }
        ]
      },
      {
        label: 'Logout', icon: 'fa fa-sign-out', command: (event) => {
          localStorage.setItem('userToken', null);
          this.router.navigate(['../../login']);
        }
      }


    ];

  }
}
