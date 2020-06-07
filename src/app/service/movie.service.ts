import { AddMovieComponent } from './../components/add-movie/add-movie.component';
import { EditMovieComponent } from './../components/edit-movie/edit-movie.component';
import { Movie } from './../model/movie';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements OnInit{

  

  public movieList: Movie[] = [];

  omdbApi = `http://www.omdbapi.com/?apikey=9cdb88b1`;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    ) {

  }

  ngOnInit(): void {
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
      }
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
    const dialogRef = this.dialog.open(AddMovieComponent);
    return dialogRef.afterClosed();
  }

  onDeleteMovie(index: number) {
    this.movieList.splice(index,1);
  }
  
}
