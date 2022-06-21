import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { Skill } from '../models/skill.model';
import { Developer } from '../models/developer.model';



@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {
  @Input()
  skill: Skill = new Skill("","","");

  constructor() { }

  ngOnInit(): void {
  }

}
