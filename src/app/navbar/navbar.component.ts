import { AuthenticationService } from './../services/authenticatio.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthenticationService) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onLogin(event) {
    event.preventDefault();
    this.authService.login(this.form.value).subscribe((response) => {
      console.log(this.form.getRawValue());
    });
  }
}
