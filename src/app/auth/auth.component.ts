import { ChangeDetectionStrategy, Component, inject, NgZone, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);
  private zone=inject(NgZone);

  constructor(){
    this.zone.runOutsideAngular(() =>{
setInterval(() => {
       
        console.log('outside Angular');
      }, 1000);
    })
  }

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
