import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SeoGuard } from './shared/seo-service/seo.guard';
import { HomeComponent } from './home/home.component';
import { CourseEnrollFormComponent } from './course-enroll-form/course-enroll-form.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder'],
      desc: 'We are a team of software engineers who are passionate about teaching technologies. We not only teach but also motivates the young to build their carriers and helps them to make their dreams come true.',
      keywords: 'Online, Software, Training, Solutions, Mobile, Web, Courses, Projects, Coding, Kids'
    }
  },
  {
    path: 'enroll-course',
    component: CourseEnrollFormComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder - Online Software Trainings'],
      desc: 'We are a team of software engineers who are passionate about teaching technologies. We not only teach but also motivates the young to build their carriers and helps them to make their dreams come true.',
      keywords: 'Online, Software, Training, Solutions, Mobile, Web, Courses, Projects, Coding, Kids'
    }
  },
  {
    path: 'book-slot',
    component: BookSlotComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder - Online Software Trainings'],
      desc: 'We are a team of software engineers who are passionate about teaching technologies. We not only teach but also motivates the young to build their carriers and helps them to make their dreams come true.',
      keywords: 'Online, Software, Training, Solutions, Mobile, Web, Courses, Projects, Coding, Kids'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder - Online Software Trainings'],
      desc: 'We are a team of software engineers who are passionate about teaching technologies. We not only teach but also motivates the young to build their carriers and helps them to make their dreams come true.',
      keywords: 'Online, Software, Training, Solutions, Mobile, Web, Courses, Projects, Coding, Kids'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder - Online Software Trainings'],
      desc: 'We are a team of software engineers who are passionate about teaching technologies. We not only teach but also motivates the young to build their carriers and helps them to make their dreams come true.',
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
