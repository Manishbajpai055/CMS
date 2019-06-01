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
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [StudentDashboardComponent, QuestionTabComponent, AnswerTabComponent, StudentComponent, NavbarComponent, StudentNotesComponent ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    ProgressbarModule,
    PdfViewerModule,
    ModalModule.forRoot(),

  ]
})
export class StudentModule { }
