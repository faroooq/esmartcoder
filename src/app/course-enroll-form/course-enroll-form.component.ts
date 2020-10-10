import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { FireDatabaseService } from '../database/fire-database.service';

@Component({
  selector: 'app-course-enroll-form',
  templateUrl: './course-enroll-form.component.html',
  styleUrls: ['./course-enroll-form.component.scss']
})
export class CourseEnrollFormComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";

  validation_messages = {
    'firstName': [
      { type: 'required', message: 'FirstName is required.' }
    ],
    'lastName': [
      { type: 'required', message: 'LastName is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
    ],
    
    'countryCode': [
      { type: 'required', message: 'Country Code is required.' },
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
    ]
  };

  constructor(
    private fb: FormBuilder,
    // public firebaseService: FireDatabaseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      countryCode: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  resetFields() {
    this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    this.exampleForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  onSubmit(value) {
  //   this.firebaseService.createUser(value, this.avatarLink)
  //     .then(
  //       res => {
  //         this.resetFields();
  //         this.router.navigate(['/']);
  //       }
  //     )
  }

}
