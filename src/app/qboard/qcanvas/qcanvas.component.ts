import { Component, OnInit, OnDestroy,DoCheck } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { Question } from '../qquestion'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-qcanvas',
  templateUrl: './qcanvas.component.html',
  styleUrls: ['./qcanvas.component.css']
})
export class QcanvasComponent implements OnInit,OnDestroy,DoCheck {

  constructor(private qService : QserviceService ) {
    this.subscription = this.qService.getQuestion().subscribe(question => { this._html = question._question; });
   }

  question: Question = {id:1,question:"No Questions"};
  subscription: Subscription;
  _html : string = "";
  //question : Question = {id:1,question:"hey"};

  
  ngOnInit() {
    //this.getHeroes();
  }

  ngDoCheck(){
  //  console.log(this.question.question);
  //  this._html += this.question.question;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}

