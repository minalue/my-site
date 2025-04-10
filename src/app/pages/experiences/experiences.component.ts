import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../../components/experience-card/experience-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [ExperienceCardComponent, CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Tech Innovations Inc.',
      duration: 'June 2023 - August 2023',
      description: 'Developed a web application using Angular and Node.js, improving user engagement by 30%.',
      technologies: ['Angular', 'Node.js', 'JavaScript']
    },
    {
      title: 'Data Analyst Intern',
      company: 'Data Insights LLC',
      duration: 'January 2023 - May 2023',
      description: 'Analyzed large datasets to extract insights and presented findings to stakeholders, enhancing decision-making processes.',
      technologies: ['Python', 'SQL', 'Tableau']
    },
    {
      title: 'Web Development Intern',
      company: 'Creative Solutions Co.',
      duration: 'June 2022 - August 2022',
      description: 'Assisted in the development of a responsive e-commerce website, leading to a 20% increase in sales.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
    ]
}
