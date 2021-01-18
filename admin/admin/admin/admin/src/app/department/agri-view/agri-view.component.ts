import { Component, OnInit } from '@angular/core';
import { FileService } from '../../file.service';
import {Bill} from '../../bill';
@Component({
  selector: 'app-agri-view',
  templateUrl: './agri-view.component.html',
  styleUrls: ['./agri-view.component.scss']
})
export class AgriViewComponent implements OnInit {

  private bill:Bill;
  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.bill=this.fileService.getter();
  }

}
