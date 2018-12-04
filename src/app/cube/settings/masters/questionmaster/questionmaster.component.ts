import { Component, OnInit, ViewChild } from '@angular/core';
import { Question, QuestionType, Subject, Board, Grade } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'

@Component({
  selector: 'app-questionmaster',
  templateUrl: './questionmaster.component.html',
  styleUrls: ['./questionmaster.component.css']
})
export class QuestionmasterComponent implements OnInit {

  constructor() { }

  @ViewChild(MatTable) table: MatTable<any>
  viewForm: boolean = false;

  AddNew() {
    this.viewForm = true;
  }

  AddQuestion(QuestionField, TypeField, SubjectField, GradeField, BoardField) {

    this.questions.push(
      {
        id: this.questions.length++,
        question: QuestionField.value,
        type: TypeField.value,
        board: BoardField.value,
        subject: SubjectField.value,
        grade: GradeField.value
      },
    )
    this.table.renderRows();
  }

  Save() {
    this.viewForm = false;
  }

  questions: Question[] = [
    { id: 1, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
    { id: 2, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
    { id: 3, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
    { id: 4, question: 'question 1', type: 'MCQ', board: 'CBSE', subject: 'Urdu', grade: '1st standard' },
  ];
  displayedColumns: string[] = ['Id', 'Question', 'Type', 'Subject', 'Grade', 'Board'];

  questionTypes: QuestionType[] = [
    { code: '0', type: 'MCQ' },
    { code: '1', type: 'Fill in The Blanks' },
    { code: '2', type: 'One Line Answers' },
    { code: '3', type: 'Brief Answer' }
  ];

  subjects: Subject[] = [
    { code: '0', name: 'Hindi', part: "1" },
    { code: '1', name: 'English', part: "1" },
    { code: '2', name: 'Science', part: "1" },
    { code: '3', name: 'Geography', part: "1" },
    { code: '4', name: 'Geography', part: "2" }
  ];

  boards: Board[] = [
    { code: '0', name: 'Maharashtra' },
    { code: '1', name: 'Delhi' },
    { code: '2', name: 'CBSE' },
    { code: '3', name: 'Central' }
  ];

  grades: Grade[] = [
    { code: '0', name: '1st Standard' },
    { code: '1', name: '2nd Standard' },
    { code: '2', name: 'One Line Answers' },
    { code: '3', name: 'Brief Answer' }
  ];

  ngOnInit() {
  }

}
