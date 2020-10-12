import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-enroll-form',
  templateUrl: './course-enroll-form.component.html',
  styleUrls: ['./course-enroll-form.component.scss']
})
export class CourseEnrollFormComponent implements OnInit {

  exampleForm: FormGroup;

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
    this.exampleForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      countryCode: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
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
