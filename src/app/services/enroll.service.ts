import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://spreadsheets.google.com/feeds/list/1ZC_hB_LagM-qByeKTVEufDirFMKtxr-wplH_i0WFuKE/1/public/full?alt=json';

  getUsers(): Observable<any> {
    /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeUsers).delay(5000);*/
    return this.http.get(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  createUser() {
    return this.http.post(this.baseUrl, "test");
  }

  updateUser() {
    // return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}