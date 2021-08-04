import { Role } from './../../enums/role.enum';
import { AuthenticationService } from './../../services/authenticatio.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    if (
      !this.authService.isAuthorised ||
      this.authService.currentUser.role !== Role.SuperAdmin
    ) {
      this.router.navigate(['access-denied']);
      return false;
    }

    return true;
  }
}
