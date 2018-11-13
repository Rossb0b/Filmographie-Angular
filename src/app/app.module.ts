import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmsComponent } from './add-films/add-films.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
