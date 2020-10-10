import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SafePipe } from './pipe/safe.pipe';
import { ArraySortPipe } from './pipe/arraysort.pipe';
import { SeoService } from './seo-service/seo.service';
import { SeoGuard } from './seo-service/seo.guard';
import { RequestCache } from './services/cache.service';
import { ThemeService } from './services/theme.service';
import { CachingInterceptor } from './services/cache.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  declarations: [
    FooterComponent,
    SafePipe,
    ArraySortPipe
  ],
  providers: [
    MDBSpinningPreloader,
    HttpClient,
    SeoService,
    SeoGuard,
    ThemeService,
    CachingInterceptor,
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  exports: [
    CommonModule,
    MDBBootstrapModulesPro,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule,
    FooterComponent,
    SafePipe,
    ArraySortPipe
  ]
})

export class SharedModule { }
