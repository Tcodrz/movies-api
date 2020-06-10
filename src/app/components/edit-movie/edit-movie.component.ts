import { MovieValidators } from './../../Validators/movie.validators';

import { Movie } from './../../model/movie';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  frmEditMovie: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    public dialogRef: MatDialogRef<EditMovieComponent>,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.frmEditMovie = this.fb.group({
      Title: [``, [
        Validators.required,
        Validators.pattern('^[- :a-zA-Z0-9]+$'),
        MovieValidators.titleAllreadyExist
      ]],
      imdbRating: [``, [
        Validators.required,
        Validators.max(10)
      ]],
      Released: [``, [
        Validators.required,
        MovieValidators.dateValidator
      ]],
      Runtime: [``, [Validators.required]],
      Genre: [``, [Validators.required]],
      Director: [``, [Validators.required]],
      imdbID: [`${this.data.imdbID}`,],
      Poster: [`${this.data.Poster}`]
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
