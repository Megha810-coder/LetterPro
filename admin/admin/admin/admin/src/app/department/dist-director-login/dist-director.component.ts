import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dist-director',
  templateUrl: './dist-director.component.html',
  styleUrls: ['./dist-director.component.scss']
})
export class DistDirectorComponent implements OnInit {
uname:any;
password:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  megha(data){
  
    this.uname=data["uname"];
    this.password=data["password"];
    if (this.uname=="Rahul" && this.password=="123") {   //authentication
    //console.log("Hii");
    alert("Login Successfuly");   //alert box
    this.router.navigate(['department/dist-director-list'])  //page navigate
 
  } else {
   console.log("Bye");
   alert("Please Enter Correct Username Password");
   //window.scrollTo(1, 2);
   window.location.reload();   //window reload
  }
 }
 }