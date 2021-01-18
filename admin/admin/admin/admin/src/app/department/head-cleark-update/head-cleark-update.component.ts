import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../file.service';
import {Bill } from '../../bill';
@Component({
  selector: 'app-head-cleark-update',
  templateUrl: './head-cleark-update.component.html',
  styleUrls: ['./head-cleark-update.component.scss']
})
export class HeadClearkUpdateComponent implements OnInit {

  private bill:Bill;
  constructor(private http:HttpClient,private fileService:FileService) { }

  ngOnInit() {
    this.bill=this.fileService.getter();
  }

  onClickSubmit(file){
    this.fileService.createProposal2(this.bill).subscribe((bill)=>{
      console.log(this.bill);
  },(error)=>{
      console.log(error);
    });
  }

}

