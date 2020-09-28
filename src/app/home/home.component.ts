import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  elements: any[] = [];
  modalRef: MDBModalRef;
  sub: Subscription;

  constructor() {
  }

  
  ngOnInit() {
  }
}
