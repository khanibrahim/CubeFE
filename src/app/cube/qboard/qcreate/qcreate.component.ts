import { Component, OnInit, DoCheck, ViewChild, Input, OnChanges, SimpleChange } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { SelectItem } from 'primeng/api';
import { MatTable } from '@angular/material'
import { Question, QuestionType, Subject } from '../../../models/mastersmodels'
import { MastersService } from 'src/app/shared/masters.service';
import { Subscription } from 'rxjs/Subscription';
import { MenuItem } from 'primeng/api';
import { FileUploadService } from 'src/app/shared/fileupload.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-qcreate',
  templateUrl: './qcreate.component.html',
  styleUrls: ['./qcreate.component.css'],
  providers: [ConfirmationService]
})

export class QcreateComponent implements OnInit, OnChanges {

  @ViewChild(MatTable) table: MatTable<any>

  constructor(
    private qservice: QserviceService,
    private masterservice: MastersService,
    private fileuploadservice: FileUploadService,
    private confirmationService: ConfirmationService
  ) {
    this.qservice.getHtml().subscribe(question => { this._question = question._html; });
  }

  @Input() SubjectId: Number;

  _question: string = "";
  _questionlist: string;
  images: any[] = [];
  _questions: Question[];

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      this.masterservice.getQuestionList("subjectid=" + to).subscribe((data: Question[]) => {
        this._questions = data;
      })
    }
  }

  AddQuestion(Id: number) {
    this._question == undefined ? this._question = "&nbsp;" : 1 == 1;
    this._question = this._question.concat("<br>" + this._questions.find(x => x.Id == Id).Question1);
    this.qservice.setHtml(this._question);
    this.fileuploadservice.getFile(Id).subscribe((data: any) => {
      this.images = [];
      data.forEach(function (value, index) {
        this.images.push({ source: 'data:' + value.FileType + ';base64,' + value.FileBinary, alt: value.FileName, title: value.FileName, Id: value.Id });
      }, this)

    });
  }

  ngOnInit() {
    this.GetQuestionList();
  }

  ImageClicked(Id: number) {
    this._question = this._question.concat("<br><img src='" + this.images.find(x => x.Id == Id).source + "'>");
    this.qservice.setHtml(this._question);
  }

  GetQuestionList() {
    this.masterservice.getQuestionList("subjectid=0").subscribe((data: Question[]) => {
      this._questions = data;
    })
  }

}
