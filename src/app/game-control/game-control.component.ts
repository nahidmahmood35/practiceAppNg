import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval!: any;
  lastNumber = 0;

  onStartGame() {
    //debugger;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }
  onPossGame() { 
    clearInterval(this.interval);
  }


}
