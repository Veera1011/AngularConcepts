import { Component } from '@angular/core';
import { SafeDirective } from '../safe.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports:[SafeDirective]
})
export class LearningResourcesComponent {}
