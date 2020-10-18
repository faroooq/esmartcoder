import { Component, HostListener, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.scss']
})
export class BookSlotComponent implements OnInit {

  studentInfo: AngularFireList<any>;
  results: Observable<string[]>;
  data: any = ['Technology', 'Training', 'Workshop', 'Bugfix', 'Software', 'Guidance', 'Personality'];
  buttonValue: string = "Please fill all the details";
  registerForm: FormGroup;
  disabledSubmitButton: boolean = true;

  @HostListener('input') oninput() {

    if (this.registerForm.valid) {
      this.disabledSubmitButton = false;
      this.buttonValue = "Book NOW"
    }
  }

  constructor(
    private router: Router,
    public db: AngularFireDatabase,
    private toastrService: ToastService,
    private fb: FormBuilder) {

    this.studentInfo = db.list('book-slot')

    this.registerForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'course': ['', Validators.required],
      'phone': ['', Validators.required],
      'onetoone': [''],
      'subscription': [''],
    });
  }

  ngOnInit() {
    this.results = this.registerForm.controls.course.valueChanges
      .pipe(
        startWith(''),
        map((value: string) => this.filter(value))
      );
  }

  filter(value: string): string[] {
    const filterValue = value;
    return this.data.filter((item: any) => item.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    this.disabledSubmitButton = true;
    const response = this.studentInfo.push({
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      course: this.registerForm.value.course,
      phone: this.registerForm.value.phone,
      onetoone: this.registerForm.value.onetoone,
      subscription: this.registerForm.value.subscription
    })
    if (response != null) {
      const options = { opacity: 1, extendedTimeOut: 10000 };
      this.toastrService.success('', 'You have successfully enrolled to ' + this.registerForm.value.course + ' course', options);
      this.registerForm.reset();
      this.router.navigateByUrl('/');
    }
  }
}
