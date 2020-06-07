import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  frmAddMovie : FormGroup;

  constructor(
    private fb: FormBuilder,
    private movieService : MovieService
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.frmAddMovie = this.fb.group({
      title: ['', [Validators.required]],
      released: ['', [Validators.required]],
      runtime: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      director: ['', [Validators.required]],
      imdbRating: ['', [Validators.required]],
      imdbID: ['', [Validators.required]],
      poster: ['', ]
    })
  }

  randomImage = 'https://source.unsplash.com/random/350x530'

  onSubmit(frmAddMovie) {
    let newMovie = frmAddMovie.value;
    let movieToList = {
      imdbID: this.generateID(),
      Title: newMovie.title,
      Poster: (newMovie.poster === '') ? this.randomImage : newMovie.poster,
      imdbRating: `${newMovie.imdbRating}`,
      Released: newMovie.released,
      Runtime: `${newMovie.runtime} min`,
      Genre: newMovie.genre,
      Director: newMovie.director
    }
    console.log(movieToList);
    this.movieService.movieList.splice(0,0,movieToList);

  }

  generateID() : string {
    let id = Math.floor(Math.random() * 1000000);
    return `rn${id}`; 
  }
}
