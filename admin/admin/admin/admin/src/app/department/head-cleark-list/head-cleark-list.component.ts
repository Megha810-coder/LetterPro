import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-cleark-list',
  templateUrl: './head-cleark-list.component.html',
  styleUrls: ['./head-cleark-list.component.scss']
})
export class HeadClearkListComponent implements OnInit {

  constructor(private http:HttpClient,private fileService:FileService,private router:Router) { }
  myresponse:any;
  readonly APP_URL  = 'http://localhost:8080/ERP-Company/';
  ngOnInit() {

    this.http.get(this.APP_URL+'file/mng_head_clerk').subscribe(
      result=>{
        this.myresponse=result;
        console.log("myresponse",this.myresponse);
      },(error)=>{
          console.log(error);
      }
    );
  }

  updateHeadClerk(file){
    this.fileService.setter(file);
    this.router.navigate(['/department/head-cleark-update']);
  }

  viewHeadClerk(file){
    this.fileService.setter(file);
    this.router.navigate(['/department/head-view']);
  }

}
