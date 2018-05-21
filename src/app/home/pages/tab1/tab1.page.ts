import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'ons-page',
  templateUrl: 'tab1.page.html'
})

export class Tab1Page implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() { }

  goToTrackingPage() {
    this.router.navigate(['/tracking']);
  }
}