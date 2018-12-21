import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { file } from '../models/filemodel'

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private rootUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  getFileList() {
    return this.http.get(this.rootUrl + '/api/file');
  }

  getFile(Id: number) {
    return this.http.get(this.rootUrl + '/api/file/' + Id);
  }

  addFile(formData: FormData) {
    return this.http.post(this.rootUrl + '/api/file', formData);
  }

  editFile(formData: FormData) {
    return this.http.put(this.rootUrl + '/api/file', formData);
  }

  deleteFile(id: number) {
    return this.http.delete(this.rootUrl + '/api/file/' + id);
  }

}
