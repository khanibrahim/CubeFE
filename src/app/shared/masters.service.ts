import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Property } from '../models/property.model'
import { Form, NgForm } from '@angular/forms';
import { Question,Course,Subject,Lesson,QuestionType } from '../models/mastersmodels'

@Injectable({
  providedIn: 'root'
})
export class MastersService {

  private rootUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getQuestionList() {
    return this.http.get(this.rootUrl + '/api/question');
  }

  addQuestion(question: Question) {
    return this.http.post(this.rootUrl + '/api/question', question);
  }

  editQuestion(question: Question) {
    return this.http.put(this.rootUrl + '/api/question', question);
  }

  deleteQuestion(id: number) {
    return this.http.delete(this.rootUrl + '/api/question/' + id);
  }


  
  getCourseList() {
    return this.http.get(this.rootUrl + '/api/course');
  }

  addCourse(course: Course) {
    return this.http.post(this.rootUrl + '/api/course', course);
  }

  editCourse(course: Course) {
    return this.http.put(this.rootUrl + '/api/course', course);
  }

  deleteCourse(id: number) {
    return this.http.delete(this.rootUrl + '/api/course/' + id);
  }


  getSubjectList() {
    return this.http.get(this.rootUrl + '/api/subject');
  }

  addSubject(subject: Subject) {
    return this.http.post(this.rootUrl + '/api/subject', subject);
  }

  editSubject(subject: Subject) {
    return this.http.put(this.rootUrl + '/api/subject', subject);
  }

  deleteSubject(id: number) {
    return this.http.delete(this.rootUrl + '/api/subject/' + id);
  }

}
