import { Component, OnInit } from '@angular/core';
import { FileService } from '../../file.service';
import { Bill} from '../../bill';
@Component({
  selector: 'app-head-clerk-view',
  templateUrl: './head-clerk-view.component.html',
  styleUrls: ['./head-clerk-view.component.scss']
})
export class HeadClerkViewComponent implements OnInit {

  private bill:Bill;
  constructor(private fileService:FileService) { }

  ngOnInit() {
   this.bill= this.fileService.getter();
  }

}