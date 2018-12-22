import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { QserviceService } from './qservice/qservice.service';
import { QuestionPaper, Subject } from '../../models/mastersmodels'
import { MastersService } from './../../shared/masters.service'
import { MenuItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

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
      private service: QserviceService,
      private route: ActivatedRoute,
      private confirmationService: ConfirmationService,
      private messageService: MessageService
    ) {
    this.route.params.subscribe(params => { this.questionpaper.Id = params.id });
    service.getHtml().subscribe(html => this.questionpaper.Html = html._html);
  }

  private items: MenuItem[];
  subjects: any = [];
  _subjects: Subject[];
  editMode: boolean = false;
  questionpaper: QuestionPaper = { Id: 0, Name: "", Html: "", SubjectId: 0, RCB: 0, RUB: 0, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
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
    if (this.questionpaper.Id != undefined) {
      this.service.updateQuestionPaper(this.questionpaper).subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Saved' });
      })
    } else {
      this.service.saveQuestionPaper(this.questionpaper).subscribe(data => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Updated' });
      })
    }
  }

  printQuestionPaper() {
    var x = window.open();
    x.document.open().write(this.cssforckeditor + this.questionpaper.Html + '<script>print() </script>');
  }

  mailQuestionPaper() {
    this.service.emailQuestionPaper(this.questionpaper.Id).subscribe();
  }

  deleteQuestionPaper() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to detele this paper?',
      accept: () => {
        this.service.deleteQuestionPaper(this.questionpaper.Id).subscribe();
        this.service.clearHtml();
      }
    });
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
        this.service.clearHtml();
      }
    });
  }

  setMenue() {
    this.items = [
      {
        label: '',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Reset', icon: 'fa fa-eraser', command: (event) => {
              this.clearHtml();
            }
          },
          {
            label: 'Save', icon: 'fa fa-save', command: (event) => {
              this.saveQuestionPaper();
            }
          },
          {
            label: 'Delete', icon: 'fa fa-trash', command: (event) => {
              this.deleteQuestionPaper();
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
        ]
      }
    ];
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

    if (this.questionpaper.Id != undefined) {
      this.service.getQuestionPaper(this.questionpaper.Id).subscribe((data: QuestionPaper) => {
        this.questionpaper = data;
        this.service.setHtml(this.questionpaper.Html);
      })
    }
    else {
      this.service.setHtml("<h3 style='text-align:center;'>College Name</h3><p><span class='text-small'><strong>Subject: _________</strong></span><br><span class='text-small'><strong>Time: ____________</strong></span><br><span class='text-small'><strong>Venue: ___________</strong></span></p><p style='text-align:center;'><strong>--------------------------------------------------------------------------------------------------------------------</strong></p>");
    }

    this.masterservice.getSubjectList().subscribe((data: Subject[]) => {
      data.forEach(function (value, index) {
        this.subjects.push({ subject: value.Name, code: value.Id })
      }, this)
    })

    this.setMenue();
  }

  cssforckeditor: string = `<style type='text/css'>.image-style-align-right{float:right;}</style>`;
}




