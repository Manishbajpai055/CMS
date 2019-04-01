import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './home/blog/blog.component';
import { AboutComponent } from './home/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './admin/pages/pages.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent,
    children: [{
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
    {
      path:'',component:HomeComponent
  },
    {
      path : 'blog',
      component : BlogComponent,
      
    },
  {
    path : 'about',
    component : AboutComponent
  }
],
  },
    {
      path: 'admin',
      component: AdminComponent,
      children: [{
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path : 'pages',
        component : PagesComponent
      }
    ],
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
