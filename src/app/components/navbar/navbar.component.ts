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
    this.movieService.onAddMovie().subscribe((data: Movie)=>{
      console.log(data);
    })
  }

}
