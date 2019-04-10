import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { QuestionTabComponent } from './question-tab/question-tab.component';
import { AnswerTabComponent } from './answer-tab/answer-tab.component';
import { StudentComponent } from './student.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentNotesComponent } from './student-notes/student-notes.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewstudentComponent } from './newstudent/newstudent.component';
import { StudentlistComponent } from './newstudent/studentlist/studentlist.component';

@NgModule({
  declarations: [StudentDashboardComponent, QuestionTabComponent, AnswerTabComponent, StudentComponent, NavbarComponent, StudentNotesComponent, NewstudentComponent, StudentlistComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ]
})
export class StudentModule { }
