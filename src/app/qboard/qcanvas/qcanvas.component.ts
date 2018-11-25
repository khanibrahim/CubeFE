import { Component, OnInit } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { Question } from '../qquestion'

@Component({
  selector: 'app-qcanvas',
  templateUrl: './qcanvas.component.html',
  styleUrls: ['./qcanvas.component.css']
})
export class QcanvasComponent implements OnInit {

  constructor(private qService : QserviceService ) { }

  _html : string;
  question : Question = {id:1,question:"hey"};



  

  getHeroes(): void {
    this.question = this.qService.getQuestion();
    this._html = this.question.question;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
