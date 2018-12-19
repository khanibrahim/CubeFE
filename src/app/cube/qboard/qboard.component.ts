import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QserviceService } from './qservice/qservice.service';
import { QuestionPaper, Subject } from '../../models/mastersmodels'
import { MastersService } from './../../shared/masters.service'
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-qboard',
  templateUrl: './qboard.component.html',
  styleUrls: ['./qboard.component.css']
})
export class QBoardComponent implements OnInit {

  constructor
    (
      private masterservice: MastersService,
      private service: QserviceService,
      private route: ActivatedRoute
    ) {
    this.route.params.subscribe(params => { this.questionpaper.Id = params.id });
    service.getHtml().subscribe(html => this.questionpaper.Html = html._html);
  }

  private items: MenuItem[];
  subjects: any = [];
  _subjects: Subject[];
  editMode: boolean = false;
  questionpaper: QuestionPaper = { Id: 0, Name: "", Html: "", SubjectId: 0, RCB: 0, RUB: 0, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };

  saveQuestionPaper() {
    if (this.questionpaper.Id != undefined) {
      this.service.updateQuestionPaper(this.questionpaper).subscribe(data => (console.log(data)))
    } else {
      this.service.saveQuestionPaper(this.questionpaper).subscribe(data => (console.log(data)))
    }
  }

  printQuestionPaper() {
    var x = window.open();
    x.document.open().write(this.questionpaper.Html + '<script>print() </script>');
  }

  mailQuestionPaper() {
    this.service.emailQuestionPaper(this.questionpaper.Id).subscribe();
  }

  SubjectChange(event: any) {
    this.questionpaper.SubjectId = event.value.code;
  }

  SetSubjects(data: any[]) {
    data.forEach(function (value, index) {
      this.subjects.push({ subject: value.Name, code: value.Id })
    }, this)
  }

  ngOnInit() {

    if (this.questionpaper.Id != undefined) {
      this.service.getQuestionPaper(this.questionpaper.Id).subscribe((data: QuestionPaper) => {
        this.questionpaper = data;
        this.service.setHtml(this.questionpaper.Html);
      })
    }

    this.masterservice.getSubjectList().subscribe((data: Subject[]) => {
      data.forEach(function (value, index) {
        this.subjects.push({ subject: value.Name, code: value.Id })
      }, this)
    })

    this.items = [
      {
        label: 'Save', icon: 'fa fa-save', command: (event) => {
          this.saveQuestionPaper();
        }
      },
      {
        label: 'Print', icon: 'fa fa-print', command: (event) => {
          this.printQuestionPaper();
        }
      },
      {
        label: 'Email', icon: 'fa fa-envelope', command: (event) => {
          this.mailQuestionPaper();
        }
      }
    ];

  }

}
