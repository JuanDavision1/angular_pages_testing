import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name : string = 'juan';
public age :number=22;
get capitalizarname():string{
return this.name.toUpperCase()
}
getheroinfo():string{
return `${this.name}, ${this.age}`
}

changename():void{
 this.name =' leo'
}
changeage():void{
 this.age =88
}
}
