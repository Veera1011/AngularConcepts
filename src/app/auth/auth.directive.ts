import { Directive, effect, inject, input, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
  
})
export class AuthDirective {

  usertype = input.required<Permission>({ alias: 'appAuth' });
 
  private auth=inject(AuthService);
  private tr=inject(TemplateRef);
  private viewcont=inject(ViewContainerRef)

  constructor() {
    effect(()=>{
      if(this.auth.activePermission() === this.usertype()){
        this.viewcont.createEmbeddedView(this.tr)
        console.log('show');
        
      }
      else{
        console.log('hide');
        this.viewcont.clear()
      }
    })
   }

}
