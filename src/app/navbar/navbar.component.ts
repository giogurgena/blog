import { AuthenticationService } from './../services/authenticatio.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(
    private authService: AuthenticationService,
    private route: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onLogin(event) {
    this.isLoading = true;
    event.preventDefault();
    this.authService.login(this.form.value).subscribe((response: any) => {
      this.route.navigate(['admin']);
      this.isLoading = false;
    });
  }

  isAuthorised(): boolean {
    return this.authService.isAuthorised;
  }

  onLogout() {
    this.authService.logout();
    this.route.navigate(['']);
  }
}
