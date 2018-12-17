import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'
import { MastersService } from 'src/app/shared/masters.service';
import { TableModule } from 'primeng/table';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private masterservice: MastersService) { }

  _course: Course = { Id: undefined, Name: "", Description: "", PropertyId: 0, RCB: 1, RUB: 1, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  _courses: Course[];

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild('CourseForm') form: any;

  viewForm: boolean = false;

  ShowForm() {
    this._course.Id = undefined;
    this._course.Name = "";
    this._course.Description = "";
    //this._course.PropertyId = undefined;
    this.viewForm = true;
  }
  HideForm() {
    this.viewForm = false;
  }

  AddCourse() {
    if (this.form.valid) {
      if (this._course.Id == undefined || this._course.Id == 0) {
        this.masterservice.addCourse(this._course).subscribe((data: Course[]) => {
          this._courses = data;
        })
      }
      else {
        this.masterservice.editCourse(this._course).subscribe((data: Course[]) => {
          this._courses = data;
        })
      }
      this.form.reset();
    }
  }

  EditCourse(name: string, Id: number, Description: string) {
    this.viewForm = true;
    this._course.Name = name;
    this._course.Id = Id;
    this._course.Description = Description;
  }

  DeleteCourse(id) {
    this.masterservice.deleteCourse(id).subscribe((data: Course[]) => {
      this._courses = data;
    })
  }

  GetCourseList() {
    this.masterservice.getCourseList().subscribe((data: Course[]) => {
      this._courses = data;
    })

  }

  ngOnInit() {
    this.GetCourseList();
  }

}