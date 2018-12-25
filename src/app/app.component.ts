import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './shared/common.service'
import { Injectable, Type, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
    , '../../node_modules/bootstrap-css-only/css/bootstrap.min.css'
    , '../../node_modules/font-awesome/css/font-awesome.css'
    , '../../node_modules/admin-lte-css/dist/css/AdminLTE.css'
    , '../../node_modules/admin-lte-css/dist/css/skins/_all-skins.css'
  ]
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    public commonservice: CommonService
  ) {
    this.subscription = this.commonservice.getBlockUI().subscribe((data: any) => {
      debugger;
      this.blockUnblockUI = data.blockUnblockUI
    })
  }
  title = 'QMaster';
  blockUnblockUI: boolean;
  subscription: Subscription;


  ngOnInit() {
    var token = localStorage.getItem('userToken')
    if (!token) {
      this.router.navigate(['login'])
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

