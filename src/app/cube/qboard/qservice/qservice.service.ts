import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { QuestionPaper } from '../../../models/mastersmodels'

@Injectable({
    providedIn: 'root'
})
export class QserviceService {

    constructor(private http: HttpClient) { }

    rootUrl = environment.apiBaseUrl;

    private subject = new Subject<any>();

    setHtml(_html: string) {
        this.subject.next({ _html });
    }

    clearHtml() {
        this.subject.next("&nbsp;<br>");
    }

    setQuestion(_question: string) {
        localStorage.setItem("Question", _question)
    }

    getHtml(): Observable<any> {
        return this.subject.asObservable();
    }

    saveQuestionPaper(questionpaper: QuestionPaper) {
        return this.http.post(this.rootUrl + '/api/questionpaper', questionpaper);
    }

    getQuestionPaperList() {
        return this.http.get(this.rootUrl + '/api/questionpaper')
    }

    getQuestionPaper(Id: number) {
        return this.http.get(this.rootUrl + '/api/questionpaper/' + Id)
    }

    updateQuestionPaper(questionpaper: QuestionPaper) {
        return this.http.put(this.rootUrl + '/api/questionpaper', questionpaper)
    }

    deleteQuestionPaper(id: number) {
        return this.http.delete(this.rootUrl + '/api/questionpaper/' + id);
    }

    emailQuestionPaper(Id: number){
        return this.http.get(this.rootUrl + '/api/sendmail/' + Id)
    }

}
