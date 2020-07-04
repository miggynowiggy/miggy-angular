import { Component, OnInit } from '@angular/core';
import { Skill } from './../skill';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  skills: Array<Skill>;

  ngOnInit(): void {
    this.skills  = [
      new Skill('HTML', 'fab fa-html5', '#F06529', 'Proficient'),
      new Skill('CSS', 'fab fa-css3', '#0780C7', 'Proficient'),
      new Skill('JavaScript', 'fab fa-js-square', '#FBD601', 'Expert'),
      new Skill('Vue', 'fab fa-vuejs', '#41b883', 'Expert'),
      new Skill('React', 'fab fa-react', '#00D9FF', 'Intermmediate'),
      new Skill('Node.js', 'fab fa-node-js', '#00D9FF', 'Advance'),
      new Skill('Firebase', 'fas fa-server', '#00D9FF', 'Expert'),
    ];
  }

}
