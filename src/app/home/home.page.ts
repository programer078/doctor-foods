import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  openWhatsApp() {
    const phoneNumber = "923447037456";
    const url = encodeURI(`https://wa.me/${phoneNumber}`);
    window.open(url, '_blank');
  }
  
  
  
  
  
  
  
}
