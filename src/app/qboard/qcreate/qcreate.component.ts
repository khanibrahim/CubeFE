import { Component, OnInit,DoCheck } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { Question } from '../qquestion'

@Component({
  selector: 'app-qcreate',
  templateUrl: './qcreate.component.html',
  styleUrls: ['./qcreate.component.css']
})
export class QcreateComponent implements OnInit,DoCheck {

  constructor( private qservice : QserviceService) { }
  
  _question :string;

  ngOnInit() {
  }

  question : Question = {id:0,question:"hi"};

  sendMessage(): void {

    this.qservice.setQuestion(this._question);

}

ngDoCheck()
{
  this.question.question = this._question;
  this.sendMessage();
}

clearMessage(): void {
    // clear message
    this.qservice.clearQuestion();
}

}
