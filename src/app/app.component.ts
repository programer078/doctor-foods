import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Force light theme globally
      document.body.classList.remove('dark');  // Remove dark mode class if present
      document.body.classList.add('light-theme');  // Add light theme class
    });
  }
}
