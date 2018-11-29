import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutModule } from 'angular-admin-lte';    //Loading layout module
import { BoxModule } from 'angular-admin-lte';       //Box component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,"styles": [
    "node_modules/bootstrap-css-only/css/bootstrap.min.css",
    "node_modules/font-awesome/css/font-awesome.css", // optional
    "node_modules/ionicons/css/ionicons.css", // optional
    "node_modules/admin-lte-css/dist/css/AdminLTE.css",
    "node_modules/admin-lte-css/dist/css/skins/_all-skins.css"
  ]
})

export class AppComponent {
  constructor(private router:Router){}
  title = 'QMaster';

  ngOnInit() {
 var token=   localStorage.getItem('userToken')
    if(!token){
      this.router.navigate(['Login'])
    }
  }
}

