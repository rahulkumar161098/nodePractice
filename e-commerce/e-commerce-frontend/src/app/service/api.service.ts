import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: String= 'http://localhost:5000'

  constructor( private _http: HttpClient) { }

  // post serevice
  // postSereviceData(data:any, endpoint:any){
  //   return this._http.post(this.baseUrl+ endpoint, data)
  // }
}
