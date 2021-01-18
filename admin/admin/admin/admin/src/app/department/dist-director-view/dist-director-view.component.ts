import { Component, OnInit } from '@angular/core';
import { FileService } from '../../file.service';
import {Bill} from '../../bill';
@Component({
  selector: 'app-dist-director-view',
  templateUrl: './dist-director-view.component.html',
  styleUrls: ['./dist-director-view.component.scss']
})
export class DistDirectorViewComponent implements OnInit {

  private bill:Bill;
  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.bill=this.fileService.getter();
  }

}
