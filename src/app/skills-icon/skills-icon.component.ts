import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills-icon',
  templateUrl: './skills-icon.component.html',
  styleUrls: ['./skills-icon.component.scss']
})


export class SkillsIconComponent implements OnInit {
  @Input() name: string;
  @Input() color: string;
  @Input() iconName: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.name, this.iconName, this.color);
    document.documentElement.style.setProperty('--primary-color', this.color);
  }

}
