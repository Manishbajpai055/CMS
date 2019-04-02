import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './home/blog/blog.component';
import { AdminBlogComponent } from './admin/blog/blog.component';
import { AboutComponent } from './home/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { PagesComponent } from './admin/pages/pages.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { BlogdetailComponent } from './home/blog/blogdetail/blogdetail.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent,
    children: [{
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
    {
      path:'',component:HomepageComponent
  },
    {
      path : 'blog',
      component : BlogComponent,
      children:[{
        
          path : ':i',
          component : BlogdetailComponent
        
      }]
      
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
        path:'',component:AdmindashboardComponent
    },
      {
        path : 'pages',
        component : PagesComponent
      },
      {
        path : 'blogs',
        component : AdminBlogComponent,
      }
    ],
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
