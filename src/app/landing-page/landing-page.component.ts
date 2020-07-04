import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { particlesConfig } from './particles-config';
import * as Typewriter from 't-writer.js';
import * as particlesJS from 'particles.js';

declare let particlesJS: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor() {}
  name = 'Miggy';

  @ViewChild('tw') typewritingElement: ElementRef;
  @ViewChild('greeter') greeterWrapper: ElementRef;
  @ViewChild('text') greeterText: ElementRef;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  async ngAfterViewInit(): Promise<void> {
    setTimeout(() => this.invokeParticles(), 2000);
    setTimeout(() => this.startTyping(), 3000);
  }

  public invokeParticles(): void {
    particlesJS('particles-js', particlesConfig, () => {
      console.log('particles-js has been started');
    });
  }
  public async startTyping(): Promise<void> {
    const writingTarget = this.typewritingElement.nativeElement;
    console.log(writingTarget);
    const writer = new Typewriter(writingTarget,  {
      loop: true,
      typeColor: 'white',
      deleteSpeed: 70
    });

    writer
      .strings(
        800,
        'Full Stack Developer',
        'Computer Science Student',
        'Code-Bender'
      )
      .start();
  }
}
