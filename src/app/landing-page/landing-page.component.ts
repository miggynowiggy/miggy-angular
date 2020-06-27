import { Component, OnInit } from '@angular/core';
import { particlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  name = 'Miggy';
  skills = ['Full Stack Developer', 'Student', 'Code-Bender'];
  ngOnInit(): void {
    this.invokeParticles();
  }
  public invokeParticles(): void {
    particlesJS('particles-js', particlesConfig, () => {
      console.log('particles-js has been started');
    });
  }
}
