import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  constructor(private router: Router) { }
  onSubmit(form: NgForm) {
    console.log(form.value);
    const { value } = form;
    let users = [];
  
    const usersFromStorage = localStorage.getItem('users');
    if(usersFromStorage !== null) {
      users = JSON.parse(usersFromStorage);
    }

    const newUser = {
      name: value['username'],
      contact: value['contact'],
      email: value['email'],
      password: value['password'],
      address: value['address']
    };
    

    users.push(newUser);
  
    localStorage.setItem('users', JSON.stringify(users));
  
    form.reset();
    this.router.navigate(['/login']);
  }
  
}
