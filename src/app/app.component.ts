import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // OddNumber: number[] = [];
  // EvenNumber: number[] = [];

  // onintervalFired(fireNumbe: number) {
  //   if (fireNumbe % 2 === 0) {
  //     this.EvenNumber.push(fireNumbe);
  //   } else {
  //     this.OddNumber.push(fireNumbe);
  //  }
  // }
  //rowElement = [{name:'nahid',contain:'this is first name'},{name:'Mahmood',contain:'this is Last name'}] 
 
   loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
