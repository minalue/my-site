import { Component } from '@angular/core';
import { ProjectComponent } from "../../components/project/project.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One',
      description: 'This is a description of project one.',
      imageUrl: 'assets/images/project1.jpg',
      link: 'https://example.com/project1'
    },
    {
      title: 'Project Two',
      description: 'This is a description of project two.',
      imageUrl: 'assets/images/project2.jpg',
      link: 'https://example.com/project2'
    },
    {
      title: 'Project Three',
      description: 'This is a description of project three.',
      imageUrl: 'assets/images/project3.jpg',
      link: 'https://example.com/project3'
    }
  ]
}
