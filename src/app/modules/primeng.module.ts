import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { SharedModule } from "primeng/components/common/shared";
import {PanelMenuModule} from 'primeng/panelmenu';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';


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
    SharedModule,
    PanelMenuModule,
    ConfirmDialogModule,
    ToastModule,
    SidebarModule,
    ToolbarModule,
    FileUploadModule,
    GalleriaModule
  ],
  exports: [
    SplitButtonModule,
    InputTextModule,
    MenuModule,
    TableModule,
    EditorModule,
    DropdownModule,
    SharedModule,
    PanelMenuModule,
    ConfirmDialogModule,
    ToastModule,
    SidebarModule,
    ToolbarModule,
    FileUploadModule,
    GalleriaModule
  ]
})
export class PrimengModule { }
