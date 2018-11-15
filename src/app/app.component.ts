import { Component, OnInit } from '@angular/core';
import { Typed } from './typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Filmographie - Angular';

  ngOnInit() {
    let options = {
      strings: ["Bienvenue sur ma Filmographie", "Celle-ci est développée avec Angular 6"],
      typeSpeed:200,
      backSpeed:20,
      showCursor: true,
      cursorChar: "",
      loop:true
    }

    let typed = new Typed(".typing-element", options);
  }
}
