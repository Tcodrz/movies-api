import { MovieTitles } from './../model/movie-titles';
import { DeleteAuthComponent } from './../components/delete-auth/delete-auth.component';
import { AddMovieComponent } from './../components/add-movie/add-movie.component';
import { EditMovieComponent } from './../components/edit-movie/edit-movie.component';
import { Movie } from './../model/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AbsoluteSourceSpan } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public movieList: Movie[] = [];

  omdbApi = `http://www.omdbapi.com/?apikey=9cdb88b1`;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    ) {
  }

  updateMovieTitles() {
    let array = [];
    this.movieList.forEach(movie => {
      array.push(movie.Title);
    })
    MovieTitles.movieTitles = array;
  }

  openDialog(movie: Movie) : Observable<any> {

    const dialogRef = this.dialog.open(EditMovieComponent, {
      data: {
        Title: movie.Title,
        Poster: movie.Poster,
        imdbRating: movie.imdbRating,
        Released: movie.Released,
        Runtime: movie.Runtime,
        Genre: movie.Genre,
        Director: movie.Director,
        imdbID: movie.imdbID,
      },
      maxWidth: '75vw',
      maxHeight: '95vh',
      backdropClass: 'backdrop'
    });
    return dialogRef.afterClosed();
  }

  getMovie(title){
    return this.http.get(`${this.omdbApi}&t=${title}&type=movie`)
    .subscribe((res: Movie) => {
      this.movieList.push(res);
    });
  }

  onAddMovie() : Observable<any> {
    const dialogRef = this.dialog.open(AddMovieComponent,{
      maxHeight: '95vh',
      minWidth: '20vw',
      maxWidth: '90vw',
      backdropClass: 'backdrop',
      hasBackdrop: true
    });
    return dialogRef.afterClosed();
  }

  onDeleteMovie(index: number) : Observable<any> {
    const dialogRef = this.dialog.open(DeleteAuthComponent, {
      data: {
        movie: this.movieList[index],
        delete: Boolean,
        index: index
      },
      minWidth: '35vw',
      maxWidth: '90vw',
      backdropClass: 'backdrop'
    })
    return dialogRef.afterClosed();
  }
  
}
