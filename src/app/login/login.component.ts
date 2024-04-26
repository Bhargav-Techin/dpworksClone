import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  errorMessage: string = '';
  currentUser: any = null; // Add this line to declare the currentUser object

  onSubmit(form: NgForm) {
    const { value } = form;
    let users = [];
  
    // Check if there are already users in local storage
    const usersFromStorage = localStorage.getItem('users');
    if(usersFromStorage !== null) {
      users = JSON.parse(usersFromStorage);
    }
  
    // Check if the entered credentials match any user
    const user = users.find((user: any) => user.email === value.email && user.password === value.password);
    if(user) {
      this.currentUser = user; // Set the currentUser object to the logged in user
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store the currentUser in localStorage
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Unauthorized. Invalid credentials';
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }

    form.reset();

  }
  
}
