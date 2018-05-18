import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'ons-page',
  templateUrl: 'tab1.page.html'
})

export class Tab1Page implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() { }

  tracking() {
    // this.http.get('https://web.servientrega.com/PortalServientrega/WebSitePortal/RastreoEnvioDetalle.html?Guia=23586505')
    //   .subscribe((data) => {
    //     console.log('response', data);
    //   })
  }
}