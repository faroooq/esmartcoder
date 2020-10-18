import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContactName: string;
  formContactEmail: string;
  formContactPhone: string;
  formContactSubject: string;
  formContactMessage: string;

  contactInfo: AngularFireList<any>;

  constructor(public db: AngularFireDatabase,
    private toastrService: ToastService,
    private router: Router) {
    this.contactInfo = db.list('contact-form')
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const response = this.contactInfo.push({
      name: this.formContactName,
      email: this.formContactEmail,
      phone: this.formContactPhone,
      subject: this.formContactSubject,
      message: this.formContactMessage
    })
    if (response != null) {
      const options = { opacity: 1, extendedTimeOut: 10000 };
      this.toastrService.success('', 'Thank you for being with Us. Our support team will contact you shortly.', options);
      this.router.navigateByUrl('/');
    }
    this.formContactName = "",
    this.formContactEmail = "",
    this.formContactPhone = "",
    this.formContactSubject = "",
    this.formContactMessage = ""
  }

}
