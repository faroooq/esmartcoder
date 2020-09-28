import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SeoGuard } from './shared/seo-service/seo.guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['Esmartcoder'],
      desc: 'Esmartcoder is an unique..',
      keywords: 'Live Projects, Esmart Child, Trainings, Online Courses, Code Fixes..'
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
