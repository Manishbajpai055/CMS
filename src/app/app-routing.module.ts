import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AdminModule } from './admin/admin.module';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './home/blog/blog.component';
import { AboutComponent } from './home/about/about.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent,
    children: [{
      path: 'home',
      loadChildren: './home/home.module/#HomeModule'
    },
  {
    path : 'blog',
    component : BlogComponent,
    
  },
{
  path : 'about',
  component : AboutComponent
}],
    
  },
    {
      path: 'admin',
      component: AdmindashboardComponent,
      children: [{
        path: 'admin',
        loadChildren: './admin/admin.module/#AdminModule'
      }],
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
