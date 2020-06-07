import { Movie } from './../../model/movie';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    public dialogRef: MatDialogRef<EditMovieComponent>) { 
  }

  

  ngOnInit(): void {}

  onSaveEdit() {
    
  }

  onCancel() {

  }

}
