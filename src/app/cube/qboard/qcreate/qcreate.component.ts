import { Component, OnInit, DoCheck } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { Question } from '../qquestion'

@Component({
  selector: 'app-qcreate',
  templateUrl: './qcreate.component.html',
  styleUrls: ['./qcreate.component.css']
})
export class QcreateComponent implements OnInit, DoCheck {

  constructor(private qservice: QserviceService) { }

  _question: string;

  _questionlist:string;

  ngOnInit() {
   this._question = localStorage.getItem("Question1")==undefined?localStorage.getItem("Question1"):"Write your first Question";
  }

  sendMessage(): void {

  }

  ngDoCheck() {
    this.qservice.setQuestion(this._question,1)
    this.qservice.setHtml(this._question);
  }

  clearMessage(): void {
    this.qservice.clearHtml();
  }

}
