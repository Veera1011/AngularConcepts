import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';
import { AuthDirective } from "./auth/auth.directive";
import { RolePipe } from './auth/role.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, NgIf, AuthDirective,RolePipe],
})
export class AppComponent {
  public auth=inject(AuthService)

  admin=computed(()=>this.auth.activePermission() === 'admin')
}
