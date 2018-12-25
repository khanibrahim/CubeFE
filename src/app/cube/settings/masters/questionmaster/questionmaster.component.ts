import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Question, Lesson } from '../../../../models/mastersmodels'
import { MatTable } from '@angular/material'
import { MastersService } from 'src/app/shared/masters.service';
import { FileUploadService } from 'src/app/shared/fileupload.service';

import { environment } from './../../../../../environments/environment'
import { ConfirmationService } from 'primeng/api';
import { file } from '../../../../models/filemodel'
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-questionmaster',
  templateUrl: './questionmaster.component.html',
  styleUrls: ['./questionmaster.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class QuestionmasterComponent implements OnInit {

  rootUrl = environment.apiBaseUrl;
  constructor(
    private masterservice: MastersService,
    private fileuploadservice: FileUploadService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  _question: Question = new Question()// { Id: undefined, Question1: "", Type: 0, LessonId: 0, RCB: 1, RUB: 1, RCT: "2018-12-12T00:08:38.607", RUT: "2018-12-12T00:08:38.607", IsActive: true };
  _questions: Question[];
  _lessons: any = [];
  lessons: any = [];
  lesson: any = { name: "", code: 0 };
  formData: FormData = new FormData();
  file: any = { Id: undefined, FileName: "", FileBinary: "", FileType: "", ParentTableCode: 0, ParentTableName: "", RCB: 0, RUB: 0, RCT: new Date(), RUT: new Date(), IsActive: true };
  images: any[] = [];
  viewForm: boolean = false;

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild('QuestionForm') form: any;

  fileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      if (file.size < 30000) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.formData = this.file;
          this.formData['FileName'] = file.name;
          this.formData['FileType'] = file.type;
          this.formData['ParentTableName'] = "Question";
          this.formData['ParentTableCode'] = this._question.Id;
          this.formData['FileBinary'] = reader.result;
          this.fileuploadservice.addFile(this.formData).subscribe((data: any) => {
            this.images = [];
            data.forEach(function (value, index) {
              this.images.push({ source: 'data:' + value.FileType + ';base64,' + value.FileBinary, alt: value.FileName, title: value.FileName, Id: value.Id });
            }, this)
          });
        };
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Upload Failed', detail: 'Select Image Smaller than 30 Kb' });
      }
    }
  }

  ShowForm() {
    this._question.Question1 = "";
    this._question.Id = undefined;
    this.images = [];
    this.viewForm = true;
  }

  HideForm() {
    this.viewForm = false;
  }

  AddQuestion() {
    if (this.form.valid) {
      if (this._question.Id == undefined || this._question.Id == null || this._question.Id == 0) {
        this.masterservice.addQuestion(this._question).subscribe((data: Question[]) => {
          this._questions = data;
        })
      }
      else {
        this.masterservice.editQuestion(this._question).subscribe((data: Question[]) => {
          this._questions = data;
        })
      }
      this.form.reset();
    }
  }

  EditQuestion(Id: number) {
    this.viewForm = true;
    this._question = this._questions.find(o => o.Id === Id);
    this.lesson = this.lessons.find(o => o.code == this._question.LessonId);
    this.fileuploadservice.getFile(Id).subscribe((data: any) => {
      this.images = [];
      data.forEach(function (value, index) {
        this.images.push({ source: 'data:' + value.FileType + ';base64,' + value.FileBinary, alt: value.FileName, title: value.FileName, Id: value.Id });
      }, this)

    });
  }

  DeleteQuestion(id) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to detele this question?',
      accept: () => {
        this.masterservice.deleteQuestion(id).subscribe((data: Question[]) => {
          this._questions = data;
        })
      }
    });
  }

  GetQuestionList() {
    this.masterservice.getQuestionList("subjectid=0").subscribe((data: Question[]) => {
      this._questions = data;
    })

  }

  getLessonName(Id: number) {
    return this._lessons.find(o => o.Id === Id) != null ? this._lessons.find(o => o.Id === Id).Name : "";
  }

  SetLessons(data: any[]) {
    data.forEach(function (value, index) {
      this.lessons.push({ lesson: value.Name, code: value.Id })
    }, this)
  }

  LessonChange(event: any) {
    this._question.LessonId = event.value.code;
    console.log(this._question);
  }

  ImageClicked(Id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to detele this question?',
      accept: () => {
        this.fileuploadservice.deleteFile(Id).subscribe(data => {
          this.images.splice(this.images.indexOf(this.images.find(x => x.id == Id)), 1);
        });
      }
    });

  }

  ngOnInit() {
    this.GetQuestionList();
    this.masterservice.getLessonList().subscribe((data: Lesson[]) => {
      this._lessons = data;
      this.SetLessons(this._lessons);
    });
  }

}
