import { Injectable } from '@angular/core';
import { Question } from '../qquestion'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class QserviceService {

  constructor() { }

  //question: Question = {id:1, question:"Q1: Question one here? hehe"};
  private subject = new Subject<any>();

  setQuestion(_question: string) {
      this.subject.next({ _question });
  }

  clearQuestion() {
      this.subject.next();
  }

  getQuestion(): Observable<any> {
      return this.subject.asObservable();
  }

}
