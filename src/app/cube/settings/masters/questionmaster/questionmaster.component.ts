import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'
import { MastersService } from 'src/app/shared/masters.service';

@Component({
  selector: 'app-questionmaster',
  templateUrl: './questionmaster.component.html',
  styleUrls: ['./questionmaster.component.css']
})
export class QuestionmasterComponent implements OnInit {

  constructor(private masterservice: MastersService) { }

  _question: Question = { Id: undefined, Question: "", Type: 0, LessonId: 0, RCB: 1, RUB: 1, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  _questions: Question[];

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild('QuestionForm') form: any;

  viewForm: boolean = false;

  ShowForm() {
    this._question.Question = "";
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

  EditQuestion(Question: string, Id: number) {
    debugger;
    this.viewForm = true;
    //this.form.controls['QuestionField'].setValue(Id);

    this._question.Question = Question;
    this._question.Id = Id;
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

  ngOnInit() {

    this.GetQuestionList();
  }

}