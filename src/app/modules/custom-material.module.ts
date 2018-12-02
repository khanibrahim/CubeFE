import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatTabsModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatTabsModule,
    MatTableModule
  ],
})
export class CustomMaterialModule { }