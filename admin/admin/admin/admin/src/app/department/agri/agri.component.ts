import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bill} from '../../bill';
import { FileService } from '../../file.service';
import { Router } from '@angular/router';
import * as XLSX from 'ts-xlsx';
 import {ModalDirective} from 'ngx-bootstrap/modal';
import { ExportService } from '../../export.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-agri',
  templateUrl: './agri.component.html',
  styleUrls: ['./agri.component.scss']
})
export class AgriComponent implements OnInit {
myresponse:any;
searchtext;
arrayBuffer:any;
myresponse1:any;
  date1:any;
  date2:any;
  code:any;
  name:any;
  variable:any;
  response:any;

 


readonly APP_URL = 'http://localhost:8080/ERP-Company/';
  constructor(private http:HttpClient,private fileService:FileService,private router:Router,private exportService:ExportService,private modalService: NgbModal) { }
private bill:Bill[];
id:any;
  ngOnInit() {
    this.http.get(this.APP_URL + 'file/mng_proposal').subscribe(
      result =>{
        this.myresponse= result;
        console.log('this.myresponse',this.myresponse);
            },
            error =>{
              console.log('error ',error);
            }
            
    )
  }
  save(){
    let bill=new Bill();
    this.fileService.setter(bill);
   this.router.navigate(['/department/agri-form']);
  }

  updateProposal(file){
    this.fileService.setter(file);
    this.router.navigate(['/department/agri-form']);
    
  }
  viewProposal(file){
    this.fileService.setter(file);
    this.router.navigate(['/department/agri-view']);
  }
  deleteProposal(id){
    this.id=id;

  }
  deleteProposal1(){
    this.http.get(this.APP_URL + 'file/delete_proposal?pro_id='+this.id).subscribe(
      result => {
        alert("delete successfully!!!!");
        window.location.reload()
        this.myresponse = result ;
        console.log('this.myresponse', this.myresponse);
       
      },
      error => {
        console.log('Error occured', error);
      }
    );
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
 
 fileToUpload: File = null;


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

Upload(){
     let fileReader = new FileReader();
     fileReader.onload = (e) =>{
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i=0 ; i!=data.length ;i++)
      arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    var workbook = XLSX.read(bstr , {type:"binary"});
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    var value =XLSX.utils.sheet_to_json(worksheet,{raw:true});
    console.log(value);
    this.http.post(this.APP_URL +'file/import_proposal',value)
    .subscribe(res => {
           console.log("Done");//only objects
        })
  }
  fileReader.readAsArrayBuffer(this.fileToUpload);
}
closeResult: string;

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
// Search(value){
//   this._http.post(this.APP_URL+'file/search',JSON.stringify(value)).subscribe(
//     result =>{
//       this.myresponse= result;
//       console.log('this.myresponse',this.myresponse);
//           },
//           error =>{
//             console.log('error ',error);
//           }
          
//   )

// }




  @ViewChild('infoModal') public infoModal: ModalDirective;

}
