import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
 public character:Character[]=[
    {
        name:'juan',
        power:2334
    },
    {
        name:'werewr',
        power:555
    },
    {
        name:'fsddsf',
        power:777
    },
 ]


}