import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DepartmentRoutingModule } from './department-routing.module';
import { AgriComponent } from './agri/agri.component';
import { AgriFormComponent } from './agri-form/agri-form.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EduComponent } from './edu/edu.component';
import { EduFormComponent } from './edu-form/edu-form.component';
import { FormsModule } from '@angular/forms';
import { EduListComponent } from './edu-list/edu-list.component';
import { SingAclkComponent } from './sing-aclk/sing-aclk.component';
import { HeadClearkLoginComponent } from './head-cleark-login/head-cleark-login.component';
import { HeadClearkListComponent } from './head-cleark-list/head-cleark-list.component';
import { SignHeadClkComponent } from './sign-head-clk/sign-head-clk.component';
import { DyDerectorComponent } from './dy-derector-login/dy-derector.component';
import { DyDirectorListComponent } from './dy-director-list/dy-director-list.component';
import { SignDyDirectorComponent } from './sign-dy-director/sign-dy-director.component';
import { DistDirectorComponent } from './dist-director-login/dist-director.component';
import {DistDirectorListComponent} from './dist-director-list/dist-director-list.component';
import  {SignDistDirectorComponent} from './sign-dist-director/sign-dist-director.component';
import { from } from 'rxjs';
import { AgriViewComponent } from './agri-view/agri-view.component';
import { EduViewComponent } from './edu-view/edu-view.component';
import { HeadClerkViewComponent } from './head-clerk-view/head-clerk-view.component';
import { DyDirectorUpdateComponent } from './dy-director-update/dy-director-update.component';
import { DyDirectoreViewComponent } from './dy-directore-view/dy-directore-view.component';
import { DistDirectorUpdateComponent } from './dist-director-update/dist-director-update.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DistDirectorViewComponent } from './dist-director-view/dist-director-view.component';
import { HeadClearkUpdateComponent } from './head-cleark-update/head-cleark-update.component';
@NgModule({
  declarations: [AgriComponent, AgriFormComponent, EduComponent, EduFormComponent, EduListComponent, SingAclkComponent, HeadClearkLoginComponent, HeadClearkListComponent, SignHeadClkComponent, DyDerectorComponent, DyDirectorListComponent,  SignDyDirectorComponent, DistDirectorComponent
   , DistDirectorListComponent,SignDistDirectorComponent, AgriViewComponent, EduViewComponent, HeadClerkViewComponent, DyDirectorUpdateComponent, DyDirectoreViewComponent, DistDirectorUpdateComponent, DistDirectorViewComponent, HeadClearkUpdateComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    Ng2SearchPipeModule,
    TabsModule,FormsModule,ModalModule.forRoot()
   
  ]
})
export class DepartmentModule { }
