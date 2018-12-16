import { Component, OnInit, ViewChild } from '@angular/core';
import { Question, QuestionType, Subject, Board, Grade } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'
import { MastersService } from 'src/app/shared/masters.service';
import { TableModule } from 'primeng/table';
import { Form } from '@angular/forms';

//import { Question } from 'src/app/cube/qboard/qquestion';


@Component({
  selector: 'app-questionmaster',
  templateUrl: './questionmaster.component.html',
  styleUrls: ['./questionmaster.component.css']
})
export class QuestionmasterComponent implements OnInit {

  constructor(private masterservice: MastersService) { }

  _questions: Question[];
  _question: Question = { Id: undefined, question: "", RCB: 1, RUB: 1, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  //_question = new Question(undefined, "Question 4", 1, 1, "2018-12-12T00:08:38.607", "2018-12-12T00:08:38.607", true );

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild('QuestionForm') form: any;

  viewForm: boolean = false;

  ShowForm() {
    this._question.question = "";
    this._question.Id = undefined;
    this.viewForm = true;
  }
  HideForm() {
    this.viewForm = false;
  }

  AddQuestion() {
    if (this.form.valid) {
      console.log(this._question.Id);
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
    this.viewForm = true;
    //this.form.controls['QuestionField'].setValue(Id);

    this._question.question = Question;
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





// questions: Question[] = [
//   { id: 1, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
//   { id: 2, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
//   { id: 3, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
//   { id: 4, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
// ];
// displayedColumns: string[] = ['Id', 'Question', 'Type', 'Subject', 'Grade', 'Board'];

// questionTypes: QuestionType[] = [
//   { code: '0', type: 'MCQ' },
//   { code: '1', type: 'Fill in The Blanks' },
//   { code: '2', type: 'One Line Answers' },
//   { code: '3', type: 'Brief Answer' }
// ];

// subjects: Subject[] = [
//   { code: '0', name: 'Hindi', part: "1" },
//   { code: '1', name: 'English', part: "1" },
//   { code: '2', name: 'Science', part: "1" },
//   { code: '3', name: 'Geography', part: "1" },
//   { code: '4', name: 'Geography', part: "2" }
// ];

// boards: Board[] = [
//   { code: '0', name: 'Maharashtra' },
//   { code: '1', name: 'Delhi' },
//   { code: '2', name: 'CBSE' },
//   { code: '3', name: 'Central' }
// ];

// grades: Grade[] = [
//   { code: '0', name: '1st Standard' },
//   { code: '1', name: '2nd Standard' },
//   { code: '2', name: 'One Line Answers' },
//   { code: '3', name: 'Brief Answer' }
// ];
