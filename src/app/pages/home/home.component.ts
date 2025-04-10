import { Component } from '@angular/core';
import { MyPathComponent } from "../../components/my-path/my-path.component";
import { ProjectComponent } from "../../components/project/project.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [MyPathComponent, ProjectComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
