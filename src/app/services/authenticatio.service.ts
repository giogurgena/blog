import { Login } from './../models/login';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.apiUrl;
  loggedUser: string;
  private helperJwt;
  private currentUserSubject: BehaviorSubject<User>;
  // currentUser$: Observable<User>;

  constructor(private http: HttpClient) {
    this.helperJwt = new JwtHelperService();
    const user = this.getExtractedUserFromToken();
    this.currentUserSubject = new BehaviorSubject<User>(user);
    // this.currentUser$ = this.currentUserSubject.asObservable();
  }

  get isAuthorised(): boolean {
    return !!this.currentUser;
  }

  get currentUser(): User {
    return this.currentUserSubject.value;
  }

  get userName(): string {
    return this.currentUser ? this.currentUser.userName : '';
  }

  get token() {
    return this.getToken();
  }

  login(model: Login) {
    return this.http.post(this.baseUrl + 'Authentication/Login', model).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        const user = this.getExtractedUserFromToken();
        this.currentUserSubject = new BehaviorSubject<User>(user);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  private getToken(): string {
    return localStorage.getItem('token');
  }

  private getExtractedUserFromToken(): User {
    const token = localStorage.getItem('token');
    if (this.helperJwt.isTokenExpired(token)) {
      return null;
    }

    let tokenPayload = this.helperJwt.decodeToken(token);
    let user: User = this.mapTokenPayloadToUser(tokenPayload);

    return user;
  }

  private mapTokenPayloadToUser(tokenPayload: any): User {
    const isApproved: boolean = tokenPayload.approved === 'True';
    return new User(
      tokenPayload.nameid,
      tokenPayload.unique_name,
      tokenPayload.role,
      isApproved
    );
  }
}
