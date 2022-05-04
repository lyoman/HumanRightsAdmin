import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private fb: FormBuilder, private http: HttpClient) { }

  httpUploadOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      // 'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('token')

    })
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': '*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': '*'
    })
  };


  httpPutOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + localStorage.getItem('token')
    })
  };



  httpLogin = {
    headers: new HttpHeaders({
      'Accept': '*/*',
      // 'Content-Type': 'text/plain',
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Origin': '*'
    })
  };



  httpRegister = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  readonly testUrl = 'https://smartaccounting.pythonanywhere.com/api';

  readonly BaseURI = 'https://smartaccounting.pythonanywhere.com/api';

  // readonly BaseURI = 'http://localhost:8000/api';


  // login(formData): Observable<any> {
  //   return this.http.post(this.testUrl + '/login', formData);
  // }

  login(formData): Observable<any> { 
    return this.http.post(this.BaseURI + '/auth/token/', formData, this.httpLogin);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }

  public register(formData){
    return this.http.post(this.BaseURI+ "/users/register/", formData, this.httpLogin)
  }
}
