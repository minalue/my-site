import { Component } from '@angular/core';
import { MyPathComponent } from "../../components/my-path/my-path.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperiencesComponent } from "../experiences/experiences.component";

@Component({
  selector: 'app-home',
  imports: [MyPathComponent, ProjectsComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
