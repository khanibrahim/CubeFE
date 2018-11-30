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

  constructor(private qService: QserviceService) {
    this.subscription = this.qService.getHtml().subscribe(question => { this._html = question._html; });
  }

  question: Question = { id: 1, question: "No Questions" };
  subscription: Subscription;
  _html: string;

  ngOnInit() {
    this._html = "<strong>hi</strong>";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

