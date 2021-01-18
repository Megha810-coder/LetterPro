import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgriComponent } from './agri/agri.component';
import { AgriFormComponent } from './agri-form/agri-form.component';
import { EduComponent } from './edu/edu.component';
import { EduFormComponent } from './edu-form/edu-form.component';
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
import { AgriViewComponent } from './agri-view/agri-view.component';
import { EduViewComponent } from './edu-view/edu-view.component';
// import { HeadClerkLoginComponent } from './head-clerk-update/head-clerk-login.component';
import { HeadClerkViewComponent } from './head-clerk-view/head-clerk-view.component';
import { DyDirectorUpdateComponent } from './dy-director-update/dy-director-update.component';
import { DyDirectoreViewComponent } from './dy-directore-view/dy-directore-view.component';
import { DistDirectorUpdateComponent } from './dist-director-update/dist-director-update.component';
import { DistDirectorViewComponent } from './dist-director-view/dist-director-view.component';
import { HeadClearkUpdateComponent } from './head-cleark-update/head-cleark-update.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'department'
    },
    children: [
     {
         path:'',
         redirectTo:''
     },
     {
      path: 'head-cleark-update',
      component: HeadClearkUpdateComponent,
      data: {
        title: 'head-cleark-update'
      }
    },
      {
        path: 'Agri',
        component: AgriComponent,
        data: {
          title: 'Agri'
        }
      },
      {
        path: 'agri-form',
        component: AgriFormComponent,
        data: {
          title: 'agri-form'
        }
      },
      {
        path: 'edu',
        component: EduComponent,
        data: {
          title: 'edu'
        }
      },
      {
        path: 'edu-form',
        component: EduFormComponent,
        data: {
          title: 'edu-form'
        }
      },
      {
        path: 'edu-list',
        component: EduListComponent,
        data: {
          title: 'edu-list'
        }
      },
      
     
      {
        path: 'sing-aclk',
        component:SingAclkComponent,
        data: {
          title: 'sing-aclk'
        }
      },
      {
        path: 'sing-aclk',
        component:SingAclkComponent,
        data: {
          title: 'sing-aclk'
        }
      },
      {
        path: 'head-cleark-login',
        component:HeadClearkLoginComponent,
        data: {
          title: 'head-cleark-login'
        }
      },
      
      {
        path: 'head-cleark-list',
        component:HeadClearkListComponent,
        data: {
          title: 'head-cleark-list'
        }
      },
     
      {
        path: 'sign-head-clk',
        component:SignHeadClkComponent,
        data: {
          title: 'sign-head-clk'
        }
      },
      {
        path: 'dy-derector-login',
        component:DyDerectorComponent,
        data: {
          title: 'dy-derector-login'
        }
      },
      {
        path: 'dy-director-list',
        component:DyDirectorListComponent,
        data: {
          title: 'dy-derector-login'
        }
      },
      
      {
        path: 'sign-dy-director',
        component:SignDyDirectorComponent,
        data: {
          title: 'sign-dy-director'
        }
      },
      {
        path: 'dist-director-login',
        component:DistDirectorComponent,
        data: {
          title: 'dist-director-login'
        }
      },
      {
        path: 'dist-director-list',
        component:DistDirectorListComponent,
        data: {
          title: 'dist-director-list'
        }
      },
      
      {
        path: 'sign-dist-director',
        component:SignDistDirectorComponent,
        data: {
          title: 'sign-dist-director'
        }
      },
      {
        path: 'agri-view',
        component:AgriViewComponent,
        data: {
          title: 'agri-view'
        }
      },
      {
        path: 'edu-view',
        component:EduViewComponent,
        data: {
          title: 'edu-view'
        }
      },
      // {
      //   path: 'head-clerk-update',
      //   component:HeadClerkLoginComponent,
      //   data: {
      //     title: 'head-clerk-update'
      //   }
      // },
      {
        path: 'head-clerk-view',
        component:HeadClerkViewComponent,
        data: {
          title: 'head-clerk-view'
        }
      },
      {
        path: 'dy-director-update',
        component:DyDirectorUpdateComponent,
        data: {
          title: 'dy-director-update'
        }
      },
      {
        path: 'dy-director-view',
        component:DyDirectoreViewComponent,
        data: {
          title: 'dy-director-view'
        }
      },
      {
        path: 'dist-director-update',
        component:DistDirectorUpdateComponent,
        data: {
          title: 'dist-director-update'
        }
      },
      {
        path: 'dist-director-view',
        component:DistDirectorViewComponent
,        data: {
          title: 'dist-director-view'
        }
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
