import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReportRoutingModule } from './report-routing.module';
import { FileReportComponent } from './file-report/file-report.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [FileReportComponent, CodeComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    Ng2SearchPipeModule,
   
  ]
})
export class ReportModule { }
