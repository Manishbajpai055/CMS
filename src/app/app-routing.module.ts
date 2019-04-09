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
import { BlogliistComponent } from './home/blog/blogliist/blogliist.component';
import { LoginComponent } from "./authentication/login/login.component";
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderFooterComponent } from './admin/header-footer/header-footer.component';
import { CarouselComponent } from './admin/carousel/carousel.component';
import { AboutComponentadmin } from './admin/about/about.component';
import { AuthGuard } from './auth.guard';
import { PageComponent } from './home/page/page.component';


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
      children:[
        {
          path : 'blog',
          loadChildren:'./home/blog/blog.module#BlogModule',
      },
      {
        path:'',component:BlogliistComponent
      },
      {
          path : 'post/:slug',
          component:BlogdetailComponent
      },
      ]

      
    },
    {
      path : 'page/:slug',
      component : PageComponent, 
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
      canActivate:[AuthGuard],
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
      },
      {
        path : 'header-footer',
        component : HeaderFooterComponent
      },
      {
        path : 'carousel',
        component : CarouselComponent
      },
      {
        path : 'about',
        component : AboutComponentadmin
      }
    ],
    },{
      path:'auth',
      component:AuthenticationComponent,
      children:[
        {
          path: 'auth',
          loadChildren: './authentication/authentication.module#AuthenticationModule'
        },{
          path:'',
          component:LoginComponent
        },
        {
          path:'logout',
          redirectTo:'/auth'
        }
      ]
    }
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
