import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { NameValidatorDirective } from './Validators/name-validator.directive';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ShowImageComponent } from './components/show-image/show-image.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieListComponent,
    EditMovieComponent,
    NameValidatorDirective,
    AddMovieComponent,
    ShowImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    EditMovieComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
