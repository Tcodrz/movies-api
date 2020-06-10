import { Movie } from './../../model/movie';
import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }
  onAddMovie() {
    this.movieService.onAddMovie()
      .subscribe((data: Movie) => {
        if(data == undefined) return;
        
        let movie: Movie = {
          Title: data.Title,
          imdbRating: `${data.imdbRating}`,
          Released: data.Released,
          Runtime: data.Runtime,
          Genre: data.Genre,
          Director: data.Director,
          imdbID: this.generateID(),
          Poster: (data.Poster === '') ? this.generatePoster() : data.Poster
        }
        
        this.movieService.movieList.splice(0, 0, movie);
        this.movieService.updateMovieTitles();
      })
  }

  generateID(): string {
    let id = Math.floor(Math.random() * 1000000);
    return `rn${id}`;
  }

  generatePoster(): string {
    return `https://source.unsplash.com/random/350x530`;
  }

}
