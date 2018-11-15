import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FILMS } from '../mock-films';

@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})


export class AddFilmsComponent implements OnInit {
  
    
  constructor() 
  {
  }
  
  ngOnInit() {
    
  }

  onSubmit(f: NgForm) {
    f.value.id = FILMS.length +1;
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    FILMS.push(f.value);
    f.reset();
  }
  
}