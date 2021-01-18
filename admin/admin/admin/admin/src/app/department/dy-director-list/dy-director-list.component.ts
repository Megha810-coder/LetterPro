import { Component, OnInit } from '@angular/core';
import { FileService } from '../../file.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dy-director-list',
  templateUrl: './dy-director-list.component.html',
  styleUrls: ['./dy-director-list.component.scss']
})
export class DyDirectorListComponent implements OnInit {
  myresponse:any;
  searchtext;
  readonly APP_URL='http://localhost:8080/ERP-Company/'
  constructor( private http:HttpClient,private filService:FileService ,private router:Router) { }

  ngOnInit() {
    this.http.get(this.APP_URL+'file/mng_dy_director').subscribe
    (result=>{
      this.myresponse=result;
      console.log(this.myresponse);
    },(error)=>{
      console.log(error);
    })
  }
  updateDyDirector(file){
    this.filService.setter(file);
    this.router.navigate(['/department/dy-director-update'])
  }
  viewDyDirector(file){
    this.filService.setter(file);
    this.router.navigate(['/department/dy-director-view'])
  }
}
