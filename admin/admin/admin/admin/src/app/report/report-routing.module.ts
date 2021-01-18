import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileReportComponent } from './file-report/file-report.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'report'
    },
    children: [
     {
         path:'',
         redirectTo:''
     },
      {
        path: 'file-report',
        component: FileReportComponent,
        data: {
          title: 'file-report'
        }
      },
      {
        path: 'code',
        component: CodeComponent,
        data: {
          title: 'code'
        }
      },
      
      
     
     
     
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
