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
import { GalleryComponent } from './home/gallery/gallery.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { StudentComponent } from './student/student.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { QuestionTabComponent } from './student/question-tab/question-tab.component';
import { AnswerTabComponent } from './student/answer-tab/answer-tab.component';
import { StudentNotesComponent } from './student/student-notes/student-notes.component';


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
     path : 'gallery',
     component : GalleryComponent
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
        path:'',
        component:AdmindashboardComponent
     },
      {
        path:'gallery',
        component: AdminGalleryComponent
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
    },
    {
      path : 'student',
      component: StudentComponent,
      children: [{
        path: 'student',
        loadChildren: './student/student.module#StudentModule'
      },
      {
        path:'',
        component:StudentDashboardComponent,
      },{
        path:'questions',
        component:QuestionTabComponent
      },
      {
        path:'answers',
        component:AnswerTabComponent
      },{
        path:'notes',
        component:StudentNotesComponent
      }
    ],
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
