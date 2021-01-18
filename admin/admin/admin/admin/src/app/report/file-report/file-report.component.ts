import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ExportService } from '../../export.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-file-report',
  templateUrl: './file-report.component.html',
  styleUrls: ['./file-report.component.scss']
})
export class FileReportComponent implements OnInit {
  closeResult: string;
  myresponse:any;
  response:any;
  myresponse1:any;
  date1:any;
  date2:any;
  code:any;
  name:any;
  variable:any;
 
  

  searchText;
  constructor(private modalService:NgbModal,private http:HttpClient,private exportService:ExportService) { }
readonly APP_URL = 'http://localhost:8080/ERP-Company/';
  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  reportSubmit(value){
    this.date1=value['date1'];
    console.log(this.date1);
    this.date2=value['date2'];
    console.log(this.date2);
    this.http.post(this.APP_URL+'file/report',JSON.stringify(value)).subscribe(
      result=>{
        this.myresponse=result;
        this.response="found";
        this.variable="By Date";
        console.log(this.myresponse);
        if(result==0){
          console.log("Result not found");
          this.response="Result not found";
        }
      },(error)=>{
        console.log(error);
      }
    );
  }

  nameSubmit(value){
    this.name=value['clg_name'];
    console.log("code="+ this.name);
    this.http.post(this.APP_URL+'file/name',JSON.stringify(value)).subscribe(
      result=>{
        this.myresponse=result;
        this.response="found";
        this.variable="By College Name";
        console.log(this.myresponse);
        if(result==0){
          console.log("Result not found");
          this.response="Result not found";
        }
      },(error)=>{
        console.log(error);
      }
    );

  }

  codeSubmit(value){
    this.name=value['clg_code'];
    console.log("code="+ this.code);
    this.http.post(this.APP_URL+'file/code',JSON.stringify(value)).subscribe(
      result=>{
        this.myresponse=result;
        this.response="found";
        this.variable="By College Name";
        console.log(this.myresponse);
        if(result==0){
          console.log("Result not found");
          this.response="Result not found";
        }
      },(error)=>{
        console.log(error);
      }
    );

  }

  exportAsXLSX():void {
    this.exportService.exportAsExcelFile(this.myresponse, 'sample');
 }

 
}
