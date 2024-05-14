import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  showhideval = false;
   log:number[] = [];
  
  OnShowHide() {
    this.showhideval = !this.showhideval;
    this.log.push(this.log.length + 1);
  }

}
