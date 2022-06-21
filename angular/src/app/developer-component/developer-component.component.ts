import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';


@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.scss']
})
export class DeveloperComponentComponent implements OnInit {
  public skills: Skill[] = [
    new Skill ("Angular","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png","https://angular.io/start#devenv")
  ];
  developer: Developer = new Developer("iliess","laulhe",21,"homme","developer full-stack",this.skills);
 

  constructor() { }

  ngOnInit(): void {
  }

}
