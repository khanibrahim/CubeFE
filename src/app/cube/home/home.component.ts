import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QserviceService } from './../qboard/qservice/qservice.service';
import { QuestionPaper } from './../../models/mastersmodels'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _questionpapers: QuestionPaper;

  constructor(private router: Router, private qservice: QserviceService) { }

  ngOnInit() {
    this.qservice.getQuestionPaperList().subscribe((data: any) => {
      this._questionpapers = data;
    });
  }

  editQuestionPaper(Id: number) {
    this.router.navigate(['/cube/qboard/' + Id]);
  }
  
  addQuestionPaper(){
    this.router.navigate(['/cube/qboard']);
  }

  deleteQuestionPaper(id: number) {
    this.qservice.deleteQuestionPaper(id).subscribe((data: any) => {
      this._questionpapers = data;
    });
  }
}