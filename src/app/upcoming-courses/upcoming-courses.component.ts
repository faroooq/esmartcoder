import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.component.html',
  styleUrls: ['./upcoming-courses.component.scss']
})
export class UpcomingCoursesComponent implements OnInit {

  constructor(private router: Router) { }

  course = [
    {
      title: 'ANGULAR',
      title1: 'ANGULAR COURSE',
      title2: 'Intermediate - 30 days',
      date: '26.07.2017',
      time: '8PM - 9PM',
      fee: '300',
      description: 'Course designed Angular realtime expert.',
      buttonText: 'Enroll NOW',
      totalSeats: '30',
      availableSeats: '10',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'REACT',
      title1: 'REACT COURSE',
      title2: 'Beginner - 15 days',
      date: '26.07.2017',
      time: '8PM - 9PM',
      fee: '300',
      description: 'Course designed Angular realtime expert.',
      buttonText: 'Comming Soon',
      totalSeats: '30',
      availableSeats: '10',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'HTML',
      title1: 'HTML COURSE',
      title2: 'Intermediate - 30 days',
      date: '26.07.2017',
      time: '8PM - 9PM',
      fee: '300',
      description: 'Course designed Angular realtime expert.',
      buttonText: 'Enroll NOW',
      totalSeats: '30',
      availableSeats: '10',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'CSS',
      title1: 'CSS COURSE',
      title2: 'Intermediate - 30 days',
      date: '26.07.2017',
      time: '8PM - 9PM',
      fee: '300',
      description: 'Course designed Angular realtime expert.',
      buttonText: 'Enroll NOW',
      totalSeats: '30',
      availableSeats: '10',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'ANGULAR',
      title1: 'ANGULAR PROJECT',
      title2: 'Live Coding - 10 days',
      date: '26.07.2017',
      time: '8PM - 9PM',
      fee: '300',
      description: 'Course designed Angular realtime expert.',
      buttonText: 'Enroll NOW',
      totalSeats: '30',
      availableSeats: '10',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'SPRING',
      title1: 'SPRING',
      title2: 'Advanced - 30 days',
      date: '26.07.2017',
      time: '8PM - 9PM',
      fee: '300',
      description: 'Course designed Angular realtime expert.',
      buttonText: 'Enroll NOW',
      totalSeats: '30',
      availableSeats: '10',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    }
  ];
  courses: any = [[]];

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.courses = this.chunk(this.course, 3);
  }

  enrollCourse() {
    this.router.navigateByUrl('enroll-course');
  }

}
