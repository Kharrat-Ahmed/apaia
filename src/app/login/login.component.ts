// login.component.ts

import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm', { static: false, read: NgForm }) loginForm: NgForm;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Access the form here if needed
    console.log(this.loginForm);
  }

  login(): void {
    // Perform authentication logic here (you can use AuthService)
    // For simplicity, let's assume a successful login redirects to the home page
    console.log(this.loginForm.value); // Accessing form value
  }
}
