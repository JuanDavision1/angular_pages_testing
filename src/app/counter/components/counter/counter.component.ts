import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>counter :{{counter}}</p>
<button (click)="increiseby(1)">+1</button>
<button (click)="deincreiseby(1)">-1</button>
<button (click)="reset()">reset</button>
  `,

})
export class CounterComponent {
  public counter:number=10;

  increiseby(value:number):void{
    this.counter  +=value;
  }
  deincreiseby(value:number):void{
    this.counter   -=value;
  }
  reset():void{
    this.counter  =10;
  }
}
