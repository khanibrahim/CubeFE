import { Component, OnInit, ViewChild } from '@angular/core';
import { Lesson, Subject } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'
import { MastersService } from 'src/app/shared/masters.service';

@Component({
  selector: 'app-lessonmaster',
  templateUrl: './lessonmaster.component.html',
  styleUrls: ['./lessonmaster.component.css']
})
export class LessonmasterComponent implements OnInit {

  constructor(private masterservice: MastersService) {
  }

  _lesson: Lesson = { Id: undefined, Name: "", Unit: 1, SubjectId: 0, RCB: 1, RUB: 1, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  _lessons: Lesson[];
  _subjects: any = [];
  subjects: any = [];

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild('LessonForm') form: any;

  viewForm: boolean = false;

  ShowForm() {
    this._lesson.Name = "";
    this._lesson.Unit = 1;
    this._lesson.SubjectId = undefined;
    this._lesson.Id = undefined;
    this.viewForm = true;
  }

  HideForm() {
    this.viewForm = false;
  }

  SubjectChange(event: any) {
    console.log(event.value.code);
    this._lesson.SubjectId = event.value.code;
  }

  AddLesson() {
    if (this.form.valid) {
      if (this._lesson.Id == undefined || this._lesson.Id == null || this._lesson.Id == 0) {
        this.masterservice.addLesson(this._lesson).subscribe((data: Lesson[]) => {
          this._lessons = data;
        })
      }
      else {
        this.masterservice.editLesson(this._lesson).subscribe((data: Lesson[]) => {
          this._lessons = data;
        })
      }
      this.form.reset();
    }
  }

  EditLesson(Name: string, Unit: number, SubjectId: number, Id: number) {
    this.viewForm = true;
    this._lesson.Name = Name;
    this._lesson.SubjectId = SubjectId;
    this._lesson.Unit = Unit;
    this._lesson.Id = Id;
  }

  DeleteSbuejct(id) {
    this.masterservice.deleteLesson(id).subscribe((data: Lesson[]) => {
      this._lessons = data;
    })
  }

  GetLessonList() {
    this.masterservice.getLessonList().subscribe((data: Lesson[]) => {
      this._lessons = data;
    })
  }

  getSubjectName(Id: number) {
    return this._subjects.find(o => o.Id === Id).Name;
  }

  SetSubjects(data: any[]) {
    data.forEach(function (value, index) {
      this.subjects.push({ subject: value.Name, code: value.Id })
    }, this)
  }

  ngOnInit() {

    this.GetLessonList();

    this.masterservice.getSubjectList().subscribe((data: Subject[]) => {
      this._subjects = data;
      this.SetSubjects(this._subjects);
    })

  }

}