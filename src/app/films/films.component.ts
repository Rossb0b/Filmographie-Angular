import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FILMS } from '../mock-films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {

  films = FILMS;
  selectedFilm : Film;
  
  constructor() 
  { 
    
  }
  
  ngOnInit() 
  {
    
  }
  addFilm(Film)
  {
    this.films.push(Film);
  }
  onSelect(film: Film): void 
  {
    this.selectedFilm = film;
  }
  
}
