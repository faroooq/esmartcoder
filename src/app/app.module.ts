import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { UpcomingCoursesComponent } from './upcoming-courses/upcoming-courses.component';
import { SoftwareSolutionsComponent } from './software-solutions/software-solutions.component';
import { MainCoursesComponent } from './main-courses/main-courses.component';
import { CourseEnrollFormComponent } from './course-enroll-form/course-enroll-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UpcomingCoursesComponent,
    MainCoursesComponent,
    SoftwareSolutionsComponent,
    CourseEnrollFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'esmartcoder' }),
    BrowserAnimationsModule,
    SharedModule
  ],
  entryComponents: [],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    // console.log(`Running ${platform} with appId=${appId}`);
  }
}
