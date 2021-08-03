import { Login } from './../models/login';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(model: Login) {
    return this.http.post(this.baseUrl + 'Authentication/Login', model);
  }
}
