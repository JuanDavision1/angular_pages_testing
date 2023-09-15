import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases_2';
  public title_3:string ="gooo"
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
