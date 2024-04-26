import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  ngOnInit(): void {
    this.getTodayDate();
  }

    dateString: string = '';
  
    getTodayDate(): void {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      this.dateString = today.toLocaleDateString("en-uk", options);
    }
}
