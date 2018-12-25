import { Component, OnInit, OnDestroy } from '@angular/core';
import { QserviceService } from '../qservice/qservice.service'
import { Question } from './../../../models/mastersmodels'
import { Subscription } from 'rxjs/Subscription';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-qcanvas',
  templateUrl: './qcanvas.component.html',
  styleUrls: ['./qcanvas.component.css']
})
export class QcanvasComponent implements OnInit, OnDestroy {

  public Editor = DecoupledEditor;
  question: Question = new Question();
  subscription: Subscription;
  tempsubscription: Subscription;
  _html: string;
  config: any;
  blockedPanel: boolean = false;

  constructor(private qService: QserviceService) {
    this.config = {
      removePlugins: 'blockquote,save,flash,iframe,tabletools,pagebreak,templates,about,showblocks,newpage,language,div',
      removeButtons: 'Link,Unlink,Save,Find,Replace,Spell Checker,Cut,Copy,Paste,Undo,Redo,Form,TextField,Textarea,Button,CreateDiv,PasteText,PasteFromWord,Select,HiddenField,Radio,Checkbox,ImageButton,Anchor,BidiLtr,BidiRtl,Font,Styles,Preview,Indent,Outdent'
    };
    this.subscription = this.qService.getHtml().subscribe(question => { this._html = question._html; });
  }

  onChange(html: string) {
    console.log(html);
    if (html != null)
      this.qService.setHtml(html)
    else
      this.qService.setHtml("")
  }
  onEditorChange(event: Event) { { console.log(event) } }
  onFocus(event: Event) { console.log(event) }
  onBlur(event: Event) { console.log(event) }
  onContentDom(event: Event) { console.log(event) }
  onFileUploadRequest(event: Event) { console.log(event) }
  onFileUploadResponse(event: Event) { console.log(event) }
  onPaste(event: Event) { console.log(event) }
  onDrop(event: Event) { console.log(event) }



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
    // debugger;
    // this.tempsubscription = this.qService.getHtml().subscribe(question => {
    //   this.qService.setHtml(question); 
    //   this.blockedPanel = false;
    // });
    // this.tempsubscription.unsubscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

