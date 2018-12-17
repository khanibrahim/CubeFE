import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { SharedModule } from "primeng/components/common/shared";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SplitButtonModule,
    InputTextModule,
    MenuModule,
    TableModule,
    EditorModule,
    DropdownModule,
    SharedModule
  ],
  exports: [
    SplitButtonModule,
    InputTextModule,
    MenuModule,
    TableModule,
    EditorModule,
    DropdownModule,
    SharedModule
  ]
})
export class PrimengModule { }
