import { Component, OnInit, ViewChild } from '@angular/core';
import { Question, Lesson } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'
import { MastersService } from 'src/app/shared/masters.service';

@Component({
  selector: 'app-questionmaster',
  templateUrl: './questionmaster.component.html',
  styleUrls: ['./questionmaster.component.css']
})
export class QuestionmasterComponent implements OnInit {

  constructor(private masterservice: MastersService) { }

  _question: Question = { Id: undefined, Question1: "", Type: 0, LessonId: 0, RCB: 1, RUB: 1, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  _questions: Question[];
  _lessons: any = [];
  lessons: any = [];
  lesson: any = { name: "", code: 0 };

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild('QuestionForm') form: any;

  viewForm: boolean = false;

  ShowForm() {
    this._question.Question1 = "";
    this._question.Id = undefined;
    this.viewForm = true;
  }

  HideForm() {
    this.viewForm = false;
  }

  AddQuestion() {
    if (this.form.valid) {
      if (this._question.Id == undefined || this._question.Id == null || this._question.Id == 0) {
        this.masterservice.addQuestion(this._question).subscribe((data: Question[]) => {
          this._questions = data;
        })
      }
      else {
        this.masterservice.editQuestion(this._question).subscribe((data: Question[]) => {
          this._questions = data;
        })
      }
      this.form.reset();
    }
  }

  EditQuestion(Id: number) {
    this.viewForm = true;
    this._question = this._questions.find(o => o.Id === Id);
    this.lesson = this.lessons.find(o => o.code == this._question.LessonId);
    console.log(this.lesson);
  }

  DeleteQuestion(id) {
    this.masterservice.deleteQuestion(id).subscribe((data: Question[]) => {
      this._questions = data;
    })
  }

  GetQuestionList() {
    this.masterservice.getQuestionList().subscribe((data: Question[]) => {
      this._questions = data;
    })

  }

  getLessonName(Id: number) {
    return this._lessons.find(o => o.Id === Id) != null ? this._lessons.find(o => o.Id === Id).Name : "";
  }

  SetLessons(data: any[]) {
    data.forEach(function (value, index) {
      this.lessons.push({ lesson: value.Name, code: value.Id })
    }, this)
  }

  LessonChange(event: any) {
    this._question.LessonId = event.value.code;
    console.log(this._question);
  }

  ngOnInit() {
    this.GetQuestionList();
    this.masterservice.getLessonList().subscribe((data: Lesson[]) => {
      this._lessons = data;
      this.SetLessons(this._lessons);
    })
  }

}