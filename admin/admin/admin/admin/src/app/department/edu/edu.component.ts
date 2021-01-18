import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.scss']
})
export class EduComponent implements OnInit {
  uname:any;
  password:any;
  
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  megha(data){
  
   this.uname=data["uname"];
   this.password=data["password"];
   if (this.uname=="Rahul" && this.password=="123") {   //authentication
   //console.log("Hii");
   alert("Login Successfuly");   //alert box
   this.router.navigate(['department/edu-list'])  //page navigate

 } else {
  console.log("Bye");
  alert("Please Enter Correct Username Password");
  //window.scrollTo(1, 2);
  window.location.reload();   //window reload
 }
}
}
