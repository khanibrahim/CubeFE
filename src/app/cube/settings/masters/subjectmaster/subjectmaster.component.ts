import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, Course } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'
import { MastersService } from 'src/app/shared/masters.service';

@Component({
  selector: 'app-subjectmaster',
  templateUrl: './subjectmaster.component.html',
  styleUrls: ['./subjectmaster.component.css']
})
export class SubjectmasterComponent implements OnInit {

  constructor(private masterservice: MastersService) {
  }

  _subject: Subject = { Id: undefined, Name: "", Acronym: "", Part: 1, CourseId: 0, RCB: 1, RUB: 1, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  _subjects: Subject[];
  _courses: any = [];
  courses: any = [];

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild('SubjectForm') form: any;

  viewForm: boolean = false;

  ShowForm() {
    this._subject.Name = "";
    this._subject.Acronym = "";
    this._subject.CourseId = undefined;
    this._subject.Id = undefined;
    this._subject.Part = undefined;
    this.viewForm = true;
  }

  HideForm() {
    this.viewForm = false;
  }

  CourseChange(event: any) {
    console.log(event.value.code);
    this._subject.CourseId = event.value.code;
  }

  AddSubject() {
    if (this.form.valid) {
      if (this._subject.Id == undefined || this._subject.Id == null || this._subject.Id == 0) {
        this.masterservice.addSubject(this._subject).subscribe((data: Subject[]) => {
          this._subjects = data;
        })
      }
      else {
        this.masterservice.editSubject(this._subject).subscribe((data: Subject[]) => {
          this._subjects = data;
        })
      }
      this.form.reset();
    }
  }

  EditSubject(Name: string, Acronym: string, CourseId: number, Id: number, Part: number) {
    this.viewForm = true;
    this._subject.Name = Name;
    this._subject.Acronym = Acronym;
    this._subject.Part = Part;
    console.log(Part);
    this._subject.Id = Id;
    this._subject.CourseId = CourseId;
  }

  DeleteSbuejct(id) {
    this.masterservice.deleteSubject(id).subscribe((data: Subject[]) => {
      this._subjects = data;
    })
  }

  GetSubjectList() {
    this.masterservice.getSubjectList().subscribe((data: Subject[]) => {
      this._subjects = data;
    })
  }

  getCourseName(Id: number) {
    return this._courses.find(o => o.Id === Id).Name;
  }

  SetCourses(data: any[]) {
    console.log(data.length);
    data.forEach(function (value, index) {
      console.log(value);
      this.courses.push({ course: value.Name, code: value.Id })
    }, this)
  }

  ngOnInit() {

    this.GetSubjectList();

    this.masterservice.getCourseList().subscribe((data: Course[]) => {
      this._courses = data;
      console.log(this._courses)
      this.SetCourses(this._courses);
    })

  }

}