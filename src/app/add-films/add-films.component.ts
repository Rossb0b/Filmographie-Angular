import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FILMS } from '../mock-films';

@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})
 
// 1 -> Récupérer values
// 2 -> push into FILMS
// 2 -> Export FILMS


export class AddFilmsComponent implements OnInit {

  // getElements()
  // {

  //   (<HTMLInputElement>document.getElementById('submit')).addEventListener('click', function () 
  //   {
  //     let id = films.length + 1;
  //     let title = (<HTMLInputElement>document.getElementById('title')).value;
  //     let synopsis = (<HTMLInputElement>document.getElementById('synopsis')).value;
      
  //     let newFilm = new Info {id, title, synopsis};
  //     info.pushContent();
  //   });
  // }
  
  
    
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

// class Info 
// {

//     constructor(id, title, synopsis) 
//     {
//         this.id = id;
//         this.title = title;
//         this.synopsis = synopsis;
//     }
    
//     films = FILMS;

//     pushContent()
//     {
//       films.push(newFilm);
//     }


// }
