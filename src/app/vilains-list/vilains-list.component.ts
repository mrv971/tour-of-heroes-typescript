import { Component, OnInit } from '@angular/core';
import Vilain from '../types/vilain.type';

@Component({
  selector: 'app-vilains-list',
  templateUrl: './vilains-list.component.html',
  styleUrls: ['./vilains-list.component.css']
})
export class VilainsListComponent implements OnInit {

  constructor() { }
  vilains : Vilain[] =[
    { id : 1, name : 'Joker' , power : 'IDK'},
    { id : 2, name : "Surfer d'argent", power : 'IDK' },
    { id : 3, name : 'Loki', power : ' IDK' },
    { id : 4, name : 'Ultron', power : 'IDK' },
    { id : 5, name : 'Thanos', power : 'IDK' },
  ]
    ;

  ngOnInit() {
  }

}
