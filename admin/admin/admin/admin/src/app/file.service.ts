import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';


import {Bill} from './bill'
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class FileService {


  private baseUrl:String="http://localhost:8080/ERP-Company/";
  private headers = new Headers({'Content-Type':'application/json; charset=utf8'});
  private options = new RequestOptions({headers:this.headers});
  private bill :Bill;
  constructor(private _http:Http) { }

  createProposal(bill:Bill){
    return this._http.post(this.baseUrl+'file/save_proposal',JSON.stringify(bill)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  updateProposal(bill:Bill){
    return this._http.post(this.baseUrl+'file/update_proposal',JSON.stringify(bill)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  createProposal1(bill:Bill){
    return this._http.post(this.baseUrl+'file/save_proposal1',JSON.stringify(bill)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  createProposal2(bill:Bill){
    return this._http.post(this.baseUrl+'file/save_proposal2',JSON.stringify(bill)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  createProposal3(bill:Bill){
    return this._http.post(this.baseUrl+'file/save_proposal3',JSON.stringify(bill)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  createProposal4(bill:Bill){
    return this._http.post(this.baseUrl+'file/save_proposa4',JSON.stringify(bill)).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  errorHandler(error:Response) {
    return Observable.throw(error||"SERVER ERROR");
  }
  getter(){
    return this.bill;
  }
  getUrl(){
    return this.baseUrl;
  }
  setter(bill:Bill){
     this.bill=bill;
  }
}
