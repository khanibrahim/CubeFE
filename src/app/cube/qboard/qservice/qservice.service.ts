import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class QserviceService {

  constructor() { }

  private subject = new Subject<any>();

  setHtml(_html: string) {
      this.subject.next({ _html });
  }

  clearHtml() {
      this.subject.next();
  }

  setQuestion(_question:string,num:number)
  {
      localStorage.setItem("Question"+num,_question)
  }

  getHtml(): Observable<any> {
      return this.subject.asObservable();
  }

}
