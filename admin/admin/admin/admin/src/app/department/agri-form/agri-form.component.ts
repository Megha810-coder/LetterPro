import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../file.service';
import {Bill} from '../../bill';

@Component({
  selector: 'app-agri-form',
  templateUrl: './agri-form.component.html',
  styleUrls: ['./agri-form.component.scss']
})
export class AgriFormComponent implements OnInit {
private bill:Bill;
  readonly APP_URL='http://localhost:8080/ERP-Company/';
  constructor(private http:HttpClient,private fileService: FileService) { }


   namePattern="['a-zA-Z']*";
codePattern="^[0-9]*";
phonePattern="^[0-9]*";

  ngOnInit() {
    this.bill = this.fileService.getter();
    console.log("bill=",this.bill);
  }
  // create(data)
  // {
  //   console.log(data); //print on console
  //   alert("Save Successfuly");   //alert box
  //   this.http.post(this.APP_URL+'file/save_proposal',JSON.stringify(data))  
  //   .subscribe(res=>{

  //     console.log('Save succsessfuly',res);
  //   });
  // }
   onClickSubmit(){
    if(this.bill.pro_id==undefined){
      this.fileService.createProposal(this.bill).subscribe((bill)=>{
        console.log(bill);
        this.fileService.getUrl();
      },(error)=>{
        console.log(error);
      });
          }
          else{
            this.fileService.updateProposal(this.bill).subscribe((bill)=>{
              console.log(bill);
            },(error)=>{
              console.log(error);
            });
          }
  }
  @ViewChild('infoModal') public infoModal: ModalDirective;
}
