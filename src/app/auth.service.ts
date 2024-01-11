import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  // Simulated login functionality (adjust as needed)
  login(username: string, password: string): boolean {
    // Perform authentication logic here
    if (username === 'example' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  // Logout functionality
  logout(): void {
    this.isAuthenticated = false;
  }

  // Check if the user is authenticated
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
