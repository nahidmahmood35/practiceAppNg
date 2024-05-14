import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  userName = '';
  OnDisableChack() {
    debugger;
      if (this.userName == '') {
      return true
      } else {
        return false
      }
  }
  OnSetValue() {
    this.userName = '';
  }
  
}
