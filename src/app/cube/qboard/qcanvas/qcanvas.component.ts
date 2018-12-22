import { Component, OnInit, OnDestroy } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { Question } from '../qquestion'
import { Subscription } from 'rxjs/Subscription';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-qcanvas',
  templateUrl: './qcanvas.component.html',
  styleUrls: ['./qcanvas.component.css']
})
export class QcanvasComponent implements OnInit, OnDestroy {

  public Editor = DecoupledEditor;
  question: Question = { id: 1, question: "No Questions" };
  subscription: Subscription;
  tempsubscription: Subscription;
  _html: string;

  constructor(private qService: QserviceService) {
    this.subscription = this.qService.getHtml().subscribe(question => { this._html = question._html; });
  }


  onChange(event:Event){}
  onEditorChange(event:Event){}
  onFocus(event:Event){}
  onBlur(event:Event){}
  onContentDom(event:Event){}
  onFileUploadRequest(event:Event){}
  onFileUploadResponse(event:Event){}
  onPaste(event:Event){}
  onDrop(event:Event){}



  public onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  textChange(html: string) {
    if (html != null)
      this.qService.setHtml(html)
    else
      this.qService.setHtml("")
  }

  ngOnInit() {
    this.tempsubscription = this.qService.getHtml().subscribe(question => { this.qService.setHtml(question) });
    this.tempsubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

