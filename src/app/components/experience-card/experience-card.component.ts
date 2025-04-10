import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() experience : any;
}
