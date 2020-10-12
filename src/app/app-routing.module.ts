import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SeoGuard } from './shared/seo-service/seo.guard';
import { HomeComponent } from './home/home.component';
import { CourseEnrollFormComponent } from './course-enroll-form/course-enroll-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder'],
      desc: 'We are a team of software engineers with realtime experience in IT industry. We Love Teaching and Coding, more than that We Love to teach the students who are passionate about learning Technology.',
      keywords: 'Online, Software, Training, Solutions, Mobile, Web, Courses, Projects, Coding, Kids'
    }
  },
  {
    path: 'enroll-course',
    component: CourseEnrollFormComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder - Online Software Trainings'],
      desc: 'We are a team of software engineers with realtime experience in IT industry. We Love Teaching and Coding, more than that We Love to teach the students who are passionate about learning Technology.',
      keywords: 'Online, Software, Training, Solutions, Mobile, Web, Courses, Projects, Coding, Kids'
    }
  },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
