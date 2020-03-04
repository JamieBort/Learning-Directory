import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; // Added by me per per the Display a Heroes List chapter of tutorial.

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES; // Added by me per per the Display a Heroes List chapter of tutorial.
  selectedHero: Hero; // Added by me per per the Display a Heroes List chapter of tutorial.

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void { // Added by me per per the Display a Heroes List chapter of tutorial.
    this.selectedHero = hero; // Added by me per per the Display a Heroes List chapter of tutorial.
  }
}