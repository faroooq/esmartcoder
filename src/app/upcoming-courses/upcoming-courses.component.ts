import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { environment } from 'src/environments/environment';
import { Courses, coursesAttributesMapping } from './courses.model';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {

  constructor(private router: Router, private googleSheetsDbService: GoogleSheetsDbService) { }

  courses: any = [[]];
  course: any = [];
  enrollData: any = [];

  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit(): void {

    // this.googleSheetsDbService.get<EnrollData>(
    //   environment.enrollForm.spreadsheetId, environment.enrollForm.worksheetId, enrollAttributesMapping).subscribe(data => {
    //     this.enrollData = data;
    //   });
    // console.log("Angular enroll data: " + this.enrollData.length)

    this.googleSheetsDbService.get<Courses>(
      environment.courses.spreadsheetId, environment.courses.worksheetId, coursesAttributesMapping).subscribe(data => {
        this.course = data;
        this.courses = this.chunk(this.course, 3);
      });
  }

  enrollCourse() {
    this.router.navigateByUrl('enroll-course');
  }

}
