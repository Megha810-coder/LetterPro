import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileService } from '../../file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dist-director-list',
  templateUrl: './dist-director-list.component.html',
  styleUrls: ['./dist-director-list.component.scss']
})
export class DistDirectorListComponent implements OnInit {
  myresponse:any;
  searchtext;
  readonly APP_URL='http://localhost:8080/ERP-Company/'
  constructor(private http:HttpClient,private fileService:FileService,private router:Router) { }

  ngOnInit() {
    this.http.get(this.APP_URL+'file/mng_dist_director').subscribe
    (result=>{
      this.myresponse=result;
      console.log(this.myresponse)
    },(error)=>{
      console.log(error);
    })
  }
  updateDistDirector(file){
      this.fileService.setter(file);
      this.router.navigate(['/department/dist-director-update']);
  }
  viewDistDirector(file){
    this.fileService.setter(file);
    this.router.navigate(['/department/dist-director-view']);
  }
}
