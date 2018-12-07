import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Property } from '../models/property.model'
import { Form, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private rootUrl = environment.apiBaseUrl;
  //property: Property;

  constructor(private http: HttpClient) { }

  getPropertyClaims() {
    return this.http.get(this.rootUrl + '/api/property');
  }

  setPropertyClaims(property:any) {
    return this.http.put(this.rootUrl + '/api/property', property);
  }

}
