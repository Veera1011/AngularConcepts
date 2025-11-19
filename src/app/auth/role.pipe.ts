import { Pipe, PipeTransform } from '@angular/core';
import { Permission } from './auth.model';

@Pipe({
  name: 'role',
  standalone: true
})
export class RolePipe implements PipeTransform {

  transform(permission: Permission): string {
    switch(permission) {
      case 'admin':
        return 'Administrator';
      case 'user':
        return 'Standard User';
      case 'guest':
        return ' Guest';
      default:
        return ' Unknown';
    }
  }

}
