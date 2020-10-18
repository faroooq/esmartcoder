import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-courses',
  templateUrl: './main-courses.component.html',
  styleUrls: ['./main-courses.component.scss']
})
export class MainCoursesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enrollCourse() {
    this.router.navigateByUrl('enroll-course');
  }

}
