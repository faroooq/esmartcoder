import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-software-solutions',
  templateUrl: './software-solutions.component.html',
  styleUrls: ['./software-solutions.component.scss']
})
export class SoftwareSolutionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enrollCourse() {
    this.router.navigateByUrl('enroll-course');
  }

}
