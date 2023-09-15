import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
@Input()
public chareacterlist:Character[]=[
  {
    name:'sdff',
    power:4242
  }
]
}
