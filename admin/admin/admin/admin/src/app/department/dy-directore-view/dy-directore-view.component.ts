import { Component, OnInit } from '@angular/core';
import { FileService } from '../../file.service';
import { Bill} from '../../bill';

@Component({
  selector: 'app-dy-directore-view',
  templateUrl: './dy-directore-view.component.html',
  styleUrls: ['./dy-directore-view.component.scss']
})
export class DyDirectoreViewComponent implements OnInit {
  private bill:Bill;
  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.bill=this.fileService.getter();
  }
}