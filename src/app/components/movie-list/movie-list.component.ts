import { MovieTitles } from './../../model/movie-titles';
import { ShowImageComponent } from './../show-image/show-image.component';
import { Movie } from './../../model/movie';
import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieTitlesArray;
  movieList: Movie[] = [];

  constructor(
    private movieServie: MovieService,
    private dialog: MatDialog,
  ) {
    this.movieTitlesArray = MovieTitles.movieTitles;
  }

  ngOnInit(): void {
    this.getMovie();
  }
  
  ngOnChanges() {
    this.movieList = this.movieServie.movieList;
  }

  getMovie() {
    this.movieTitlesArray.forEach(movie => {
      this.movieServie.getMovie(movie)
    });

    this.movieList = this.movieServie.movieList;
  }

  onEdit(movie) {
    const movieToDialog = {
      Title: this.movieList[movie].Title,
      Poster: this.movieList[movie].Poster,
      imdbRating: this.movieList[movie].imdbRating,
      Released: this.movieList[movie].Released,
      Runtime: this.movieList[movie].Runtime,
      Genre: this.movieList[movie].Genre,
      Director: this.movieList[movie].Director,
      imdbID: this.movieList[movie].imdbID
    };

    this.movieServie.openDialog(movieToDialog)
      .subscribe((data: Movie) => {
        if(data === undefined){
          return;
        }
        let changedMovie = this.movieList.find(movie => {
          return movie.imdbID === data.imdbID
        });

        let index = this.movieList.indexOf(changedMovie);
        this.movieList.splice(index, 1, data);
        this.movieServie.updateMovieTitles();
      })
  }

  onRemove(i) {
    this.movieServie.onDeleteMovie(i)
      .subscribe(data => {
        if (data.delete) {
          this.movieServie.movieList.splice(data.index, 1);
          this.movieServie.updateMovieTitles();
        }
      });
    this.movieList = this.movieServie.movieList;
  }

  onImageClick(i) {
    this.dialog.open(ShowImageComponent, {
      data: {
        image_path: this.movieServie.movieList[i].Poster
      }
    })
  }

}
