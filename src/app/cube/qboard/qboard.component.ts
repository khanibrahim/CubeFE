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

  constructor(private router: Router, private service: QserviceService) {
    service.getHtml().subscribe(html => this.questionpaper.Html = html._html);

    this.subjects = [
      { name: 'English', code: '1' },
      { name: 'Hindi', code: '2' },
      { name: 'Marathi', code: '3' },
      { name: 'Science', code: '4' },
      { name: 'Geography', code: '5' }
    ];
  }

  subjects: any[];
  editMode: boolean = false;
  questionpaper: QuestionPaper = { Id: 0, Name: "", Html: "", SubjectId: 0, RCB: 0, RUB: 0, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  saveQuestionPaper() {
    //this.questionpaper.Html = this._html;
    this.service.saveQuestionPaper(this.questionpaper).subscribe(data => (console.log(data)))
  }

  SubjectChange(event: any) {
    console.log(event.value.code);
    this.questionpaper.SubjectId = event.value.code;

  }
  ngOnInit() {

  }

}
