import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QserviceService } from './qservice/qservice.service';
import { QuestionPaper } from '../../models/mastersmodels'

@Component({
  selector: 'app-qboard',
  templateUrl: './qboard.component.html',
  styleUrls: ['./qboard.component.css']
})
export class QBoardComponent implements OnInit {
  _html: string = "";
  constructor(private router: Router, private service: QserviceService) {
    service.getHtml().subscribe(html => this._html = html._html)
  }
  editMode: boolean = false;
  questionpaper: QuestionPaper = { Id: 0, html: "", RCB: 0, RUB: 0, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  saveQuestionPaper() {
    this.questionpaper.html = this._html;
    this.service.saveQuestionPaper(this.questionpaper).subscribe(data => (console.log(data)))
  }

  ngOnInit() {

  }

}
