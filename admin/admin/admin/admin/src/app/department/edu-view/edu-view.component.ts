import { Component, OnInit } from '@angular/core';
import { FileService } from '../../file.service';
import {Bill} from '../../bill';
@Component({
  selector: 'app-edu-view',
  templateUrl: './edu-view.component.html',
  styleUrls: ['./edu-view.component.scss']
})
export class EduViewComponent implements OnInit {

  private bill:Bill;
  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.bill=this.fileService.getter();
  }

}
