import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../file.service';
import {Bill} from '../../bill';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edu-form',
  templateUrl: './edu-form.component.html',
  styleUrls: ['./edu-form.component.scss']
})
export class EduFormComponent implements OnInit {
  private bill:Bill;
  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.bill=this.fileService.getter();
  }
  onClickSubmit(){
    this.fileService.createProposal1(this.bill).subscribe((bill)=>{
      console.log(this.bill);
    },(error)=>{
      console.log(error);
    })

}
@ViewChild('infoModal') public infoModal: ModalDirective;

}