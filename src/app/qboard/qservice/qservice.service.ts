import { Injectable } from '@angular/core';
import { Question } from '../qquestion'

@Injectable({
  providedIn: 'root'
})
export class QserviceService {

  constructor() { }

  question: Question = {id:1, question:"Q1: Question one here?"};

  getQuestion(){
    return this.question;
  }

}
