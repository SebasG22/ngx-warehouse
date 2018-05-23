import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ons-page[warehouse_tab]',
  templateUrl: 'warehouse-tab.page.html'
})

export class WareHouseTabPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loadScripts();
  }

  onGoToItemDetails() {
    this.router.navigate(['/warehouse/item-detail']);
  }

  loadScripts() {
    const dynamicScripts = [
      'assets/js/classie.js',
      'assets/js/demo7.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}