import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private subject = new Subject<any>();

  setBlockUI(blockUnblockUI: boolean) {
    this.subject.next({ blockUnblockUI });
  }

  getBlockUI(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
