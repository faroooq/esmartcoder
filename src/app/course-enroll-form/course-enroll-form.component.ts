import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-enroll-form',
  templateUrl: './course-enroll-form.component.html',
  styleUrls: ['./course-enroll-form.component.scss']
})
export class CourseEnrollFormComponent implements OnInit {

  enrollForm: FormGroup;
  userList: AngularFireList<any>;

  constructor(
    private router: Router,
    public db: AngularFireDatabase,
    private formBuilder: FormBuilder
  ) {
    this.userList = db.list('users')
  }

  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['', Validators.required],
      phone: ['', Validators.required]
    }, {
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.userList.push({
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      countryCode: this.registerForm.value.countryCode,
      phone: this.registerForm.value.phone
    })
    this.router.navigate(['/'])
  }


}
