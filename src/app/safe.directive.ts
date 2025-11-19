import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector:'a[appSafe]',
    standalone:true,
    host: {
        '(click)':'confirm($event)'
    }
})
export class SafeDirective{

    param=input<string>('myapp');
    private hostel= inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    constructor(){
        console.log('active');
        
    }

    confirm(e:MouseEvent){
       const con=window.confirm('Do you want to navigate')
       if(con){
        const add=this.hostel.nativeElement.href;
        this.hostel.nativeElement.href =add + '?from=' + this.param()
        // const add=(e.target as HTMLAnchorElement).href;
        // (e.target as HTMLAnchorElement).href =add + '?from=' + this.param()
        return;
       }
    }

}