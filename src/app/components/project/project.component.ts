import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Project } from '../../model/Project';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: Project| undefined= undefined;

}
