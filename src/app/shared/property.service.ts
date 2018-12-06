import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import{environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private rootUrl = environment.apiBaseUrl ;
  constructor(private http:HttpClient) { }

  getDate(){
   return this.http.get(this.rootUrl+'/api/property');
  }

}
