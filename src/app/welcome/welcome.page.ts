import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public router:Router) { }
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.fade-in, .slide-in, .zoom-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
  }

  ngOnInit() {
  }
 login() 
 {
  this.router.navigate(['/log-in'])
}
}
