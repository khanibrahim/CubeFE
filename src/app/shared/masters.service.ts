import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Property } from '../models/property.model'
import { Form, NgForm } from '@angular/forms';
import { Question } from '../models/mastersmodels'

@Injectable({
  providedIn: 'root'
})
export class MastersService {

  private rootUrl = environment.apiBaseUrl;
  //property: Property;

  constructor(private http: HttpClient) { }

  getQuestionList() {
    return this.http.get(this.rootUrl + '/api/question');
  }

  setQuestion(question: Question) {
    return this.http.post(this.rootUrl + '/api/question', question);
  }

  deleteQuestion(id: number) {
    return this.http.delete(this.rootUrl + '/api/question/' + id);
  }

}
