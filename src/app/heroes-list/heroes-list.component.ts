import { Component, OnInit, Input } from '@angular/core';
import Hero from '../types/hero.type';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  @Input() hero: Hero;

  heroes : Hero []= [
    { id : 1, name : 'Batman' , power : 'IDK'},
    { id : 2, name : 'Superman', power : 'Surhumain' },
    { id : 3, name : 'Spiderman', power : 'Homme araignée' },
    { id : 4, name : 'Catwoman', power : 'Femme-chat' },
    { id : 5, name : 'Wonder Woman', power : 'Surhumaine' },
    
    ];

  selectedHero: Hero;

  constructor() { }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  
  ngOnInit() {
  }

}
