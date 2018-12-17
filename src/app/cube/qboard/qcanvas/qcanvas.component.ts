import { Component, OnInit, OnDestroy } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { Question } from '../qquestion'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-qcanvas',
  templateUrl: './qcanvas.component.html',
  styleUrls: ['./qcanvas.component.css']
})
export class QcanvasComponent implements OnInit, OnDestroy {

  question: Question = { id: 1, question: "No Questions" };
  subscription: Subscription;
  tempsubscription: Subscription;
  _html: string;

  constructor(private qService: QserviceService) {
    this.subscription = this.qService.getHtml().subscribe(question => { this._html = question._html; });
  }

  textChange(html: string) {
    if (html != null)
      this.qService.setHtml(html)
    else
      this.qService.setHtml("")
  }

  ngOnInit() {
    
    //this._html = "<div style='border-bottom: 1px solid black; padding-bottom: 15px;'><h2 style='text-align: center;'><strong>Bunts Sangha College</strong></h2><span style='text-align: left;'><strong>Subject:</strong></span><span style='float: right;'><strong>Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span></div>";
    //this.qService.setHtml(this._html);
    this.tempsubscription = this.qService.getHtml().subscribe(question => { this.qService.setHtml(question) });
    this.tempsubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

