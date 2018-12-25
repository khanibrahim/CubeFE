import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { QserviceService } from './qservice/qservice.service';
import { QuestionPaper, Subject } from '../../models/mastersmodels'
import { MastersService } from './../../shared/masters.service'
import { MenuItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CommonService } from './../../shared/common.service'

@Component({
  selector: 'app-qboard',
  templateUrl: './qboard.component.html',
  styleUrls: ['./qboard.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class QBoardComponent implements OnInit {

  constructor
    (
      private masterservice: MastersService,
      private questionservice: QserviceService,
      private route: ActivatedRoute,
      private confirmationService: ConfirmationService,
      private messageService: MessageService,
      private commonService: CommonService,
  ) {
    this.route.params.subscribe(params => { this.questionpaper.Id = params.id });
    questionservice.getHtml().subscribe(html => this.questionpaper.Html = html._html);
  }

  private items: MenuItem[];
  subjects: any = [];
  _subjects: Subject[];
  editMode: boolean = false;
  questionpaper: QuestionPaper = new QuestionPaper();//{ Id: 0, Name: "", Html: "", SubjectId: 0, RCB: 0, RUB: 0, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  orientationMeasure: any = { controls: "col col-sm-6", canvas: "canvas col col-sm-6" }
  togglelayout: boolean = true;

  toggleLayout() {
    if (this.togglelayout) {
      this.setOrientation("canvas");
      this.togglelayout = !this.togglelayout;
    }
    else {
      this.setOrientation("split");
      this.togglelayout = !this.togglelayout;
    }
  }

  saveQuestionPaper() {
    this.commonService.setBlockUI(true);
    if (this.questionpaper.Id != undefined) {
      this.questionservice.updateQuestionPaper(this.questionpaper).subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Saved' });
        this.commonService.setBlockUI(false);
      })
    } else {
      this.questionservice.saveQuestionPaper(this.questionpaper).subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Updated' });
        this.commonService.setBlockUI(false);
      })
    }
  }

  printQuestionPaper() {
    var x = window.open();
    x.document.open().write(this.questionpaper.Html + '<script>print() </script>');
  }

  mailQuestionPaper() {
    this.questionservice.emailQuestionPaper(this.questionpaper.Id).subscribe();
  }

  deleteQuestionPaper() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to detele this paper?',
      accept: () => {
        this.questionservice.deleteQuestionPaper(this.questionpaper.Id).subscribe();
        this.questionservice.clearHtml();
      }
    });
  }

  addNewQuestionPaper() {
    this.questionpaper = new QuestionPaper();
    this.clearHtml();
  }

  SubjectChange(event: any) {
    this.questionpaper.SubjectId = event.value.code;
  }

  SetSubjects(data: any[]) {
    data.forEach(function (value, index) {
      this.subjects.push({ subject: value.Name, code: value.Id })
    }, this)
  }

  clearHtml(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to reset all content?',
      accept: () => {
        this.questionservice.clearHtml();
      }
    });
  }

  setOrientation(orientation: string) {
    if (orientation == "controls") {
      this.orientationMeasure.controls = "col col-sm-12";
      this.orientationMeasure.canvas = "canvas col hide col-sm-0";
    }
    else if (orientation == "canvas") {
      this.orientationMeasure.canvas = "canvas col col-sm-12";
      this.orientationMeasure.controls = "col hide col-sm-0";
    }
    else if (orientation == "split") {
      this.orientationMeasure.canvas = "canvas col col-sm-6";
      this.orientationMeasure.controls = "col col-sm-6";
    }
  }

  ngOnInit() {
    this.commonService.setBlockUI(true);
    if (this.questionpaper.Id != undefined) {
      this.questionservice.getQuestionPaper(this.questionpaper.Id).subscribe((data: QuestionPaper) => {
        this.questionpaper = data;
        this.questionservice.setHtml(this.questionpaper.Html);
      })
    }
    else {
      this.questionservice.setHtml("<h3 style='text-align:center;'>College Name</h3><p><span class='text-small'><strong>Subject: _________</strong></span><br><span class='text-small'><strong>Time: ____________</strong></span><br><span class='text-small'><strong>Venue: ___________</strong></span></p><p style='text-align:center;'><strong>--------------------------------------------------------------------------------------------------------------------</strong></p>");
    }
    this.masterservice.getSubjectList().subscribe((data: Subject[]) => {
      data.forEach(function (value, index) {
        this.subjects.push({ subject: value.Name, code: value.Id })
      }, this);
      this.commonService.setBlockUI(false);
    })
  }
}




