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

  public moviesNameList = [
    'Pulp Fiction', 'A Clockwork Orange', 'The Revenant', `Pan's Labyrinth`, 
    `Inception`, `Shutter Island`, `Reservoir Dogs`, `Kill Bill: Vol. 1`, 
    `The Matrix `,`The Dark Knight`, `Parasite`, `Interstellar`, `The Silence of the Lambs`,
    `Joker`, `Whiplash`, `The Departed`, `American History X`, `Django Unchained`, 
    `Inglourious Basterds`, `Requiem for a Dream`, `V for Vendetta`,`Survive the Night`,
    `Bad Boys for Life`, `Bloodshot`
  ];
  movieList : Movie[] = [];

  constructor(
    private movieServie: MovieService,
    private dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getMovie();
  }


  getMovie() {
    this.moviesNameList.forEach(movie=>{
      this.movieServie.getMovie(movie)
    });

    this.movieList = this.movieServie.movieList;
    console.log(this.movieList)
  }

  onEdit(movie)  {
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
      .subscribe((data: Movie) =>{
        let changedMovie = this.movieList.find(movie => {
          return movie.imdbID === data.imdbID
        });

        let index = this.movieList.indexOf(changedMovie);
        this.movieList.splice(index, 1, data)  
    })
  }

  ngOnChanges(){
    this.movieList = this.movieServie.movieList;
  }

  onRemove(i) {
    this.movieServie.onDeleteMovie(i);
    this.movieList = this.movieServie.movieList;
  }

  onImageClick(i) {
    this.dialog.open(ShowImageComponent, {
      data: {
        image_path:this.movieServie.movieList[i].Poster 
      }
    })
  }

  

}
