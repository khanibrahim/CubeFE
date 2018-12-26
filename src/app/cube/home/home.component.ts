import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QserviceService } from './../qboard/qservice/qservice.service';
import { QuestionPaper } from './../../models/mastersmodels'
import { CommonService } from './../../shared/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CommonService]
})
export class HomeComponent implements OnInit {
  _questionpapers: QuestionPaper;

  constructor(
    private router: Router, 
    private qservice: QserviceService,
    private commonService: CommonService
    ) { }

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
    this.commonService.setBlockUI(true);
    this.qservice.deleteQuestionPaper(id).subscribe((data: any) => {
      this._questionpapers = data;
      this.commonService.setBlockUI(true);
    });
  }
}