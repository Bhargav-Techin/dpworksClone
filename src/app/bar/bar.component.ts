import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
      this.getCurrentUserName();
  }
  showSidebar = false;
  username: string = '';
  getCurrentUserName(): void {
    let currentUser = localStorage.getItem('currentUser');
    let currentUserObj = currentUser ? JSON.parse(currentUser) : null;
    this.username = currentUserObj ? currentUserObj.name : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  
  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
