import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';

declare let AOS: any;

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent implements OnInit {
  skills: Array<Skill>;

  ngOnInit(): void {
    this.skills  = [
      new Skill('HTML', 'fab fa-html5', '#F06529', 'Proficient', 'html5'),
      new Skill('CSS', 'fab fa-css3', '#0780C7', 'Proficient', 'CSS3'),
      new Skill('JavaScript', 'fab fa-js-square', '#FBD601', 'Expert', 'JS'),
      new Skill('Vue', 'fab fa-vuejs', '#41b883', 'Expert', 'VUE'),
      new Skill('React', 'fab fa-react', '#00D9FF', 'Intermmediate', 'REACT'),
      new Skill('Node.js', 'fab fa-node-js', '#00D9FF', 'Advance', 'NODE'),
      new Skill('Firebase', 'fas fa-server', '#00D9FF', 'Expert', 'FIREBASE'),
    ];

    AOS.init();

  }

}
