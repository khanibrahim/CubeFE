import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SplitButtonModule,
    InputTextModule,
    MenuModule
  ],
  exports: [
    SplitButtonModule,
    InputTextModule,
    MenuModule
  ]
})
export class PrimengModule { }
