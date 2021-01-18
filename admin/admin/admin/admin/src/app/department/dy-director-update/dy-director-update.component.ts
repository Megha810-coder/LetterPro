import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../file.service';
import {Bill} from '../../bill';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dy-director-update',
  templateUrl: './dy-director-update.component.html',
  styleUrls: ['./dy-director-update.component.scss']
})
export class DyDirectorUpdateComponent implements OnInit {
private bill:Bill;
  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.bill=this.fileService.getter();
    
  }
  onClickSubmit(){
    this.fileService.createProposal3(this.bill).subscribe((bill)=>{
      console.log(this.bill);
    },(error)=>{
      console.log(error);
    })

}
@ViewChild('infoModal') public infoModal: ModalDirective;

}

