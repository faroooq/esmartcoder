import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-course-enroll-form',
  templateUrl: './course-enroll-form.component.html',
  styleUrls: ['./course-enroll-form.component.scss']
})
export class CourseEnrollFormComponent implements OnInit {

  userList: AngularFireList<any>;

  results: Observable<string[]>;
  data: any = ['Angular', 'React', 'Javascript', 'CSS', 'Html', 'Java', 'Python', 'Ionic'];

  registerForm: FormGroup;

  constructor(
    private router: Router,
    public db: AngularFireDatabase) {
    this.userList = db.list('enrolled-students')
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      course: new FormControl(),
      phone: new FormControl(),
      onetoone: new FormControl(),
      subscription: new FormControl()
    });

    this.results = this.registerForm.controls.course.valueChanges
      .pipe(
        startWith('red'),
        map((value: string) => this.filter(value))
      );
  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter((item: any) => item.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    this.userList.push({
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      course: this.registerForm.value.course,
      phone: this.registerForm.value.phone,
      onetoone: this.registerForm.value.onetoone,
      subscription: this.registerForm.value.subscription
    })
    this.router.navigate(['/'])
  }


}
