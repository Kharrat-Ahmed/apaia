// login.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login(): void {
    // Perform authentication logic here (you can use AuthService)
    // For simplicity, let's assume a successful login redirects to the home page
    this.router.navigate(['/home']);
  }
}
