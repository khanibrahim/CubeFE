import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { SelectItem } from 'primeng/api';
import { MatTable } from '@angular/material'
import { Question, QuestionType, Subject, Board, Grade } from '../../../models/mastersmodels'
import { MastersService } from 'src/app/shared/masters.service';
import { Subscription } from 'rxjs/Subscription';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-qcreate',
  templateUrl: './qcreate.component.html',
  styleUrls: ['./qcreate.component.css']
})


export class QcreateComponent implements OnInit {

  _questions: Question[];
  subscription: Subscription;
  items: MenuItem[];

  @ViewChild(MatTable) table: MatTable<any>

  constructor(private qservice: QserviceService, private masterservice: MastersService) {
    this.subscription = this.qservice.getHtml().subscribe(question => { this._question = question._html; });
  }

  _question: string = "";

  _questionlist: string;

  EditQuestion(question: string) {
    this._question = this._question.concat("<br>" + question);
    this.qservice.setHtml(this._question);
  }

  ngOnInit() {
    this.GetQuestionList();
  //  this.EditQuestion("");
    this.initializeMenu();
  }

  initializeMenu() {
    // this.items = [
    //   { label: 'Split', icon: 'fa fa-user' },
    //   { label: 'Property Profile', icon: 'fa fa-building' },
    //   {
    //     label: 'Logout', icon: 'fa fa-sign-out', command: (event) => {
    //       localStorage.setItem('userToken', null);
    //     }
    //   }
    // ];
  }

  sendMessage(): void {

  }

  // ngDoCheck() {
  //   this.qservice.setQuestion(this._question)
  //   this.qservice.setHtml(this._question);
  // }


  clearMessage(): void {
    this.qservice.clearHtml();
  }

  GetQuestionList() {
    this.masterservice.getQuestionList().subscribe((data: Question[]) => {
      this._questions = data;
    })
  }

}
