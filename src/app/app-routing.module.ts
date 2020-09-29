import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SeoGuard } from './shared/seo-service/seo.guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['esmartcoder'],
      desc: 'esmartcoder is an unique..',
      keywords: 'Mobile, Web, Ecommerce, Online, Courses, Software, Corporate, Training'
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
