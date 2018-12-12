import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SplitButtonModule,
    InputTextModule,
    MenuModule,
    TableModule
  ],
  exports: [
    SplitButtonModule,
    InputTextModule,
    MenuModule,
    TableModule
  ]
})
export class PrimengModule { }
