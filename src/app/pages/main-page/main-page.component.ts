import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})




export class MainPageComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
