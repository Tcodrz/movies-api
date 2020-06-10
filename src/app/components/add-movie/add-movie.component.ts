import { MatDialogRef } from '@angular/material/dialog';
import { MovieValidators } from './../../Validators/movie.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  frmAddMovie: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddMovieComponent>,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.frmAddMovie = this.fb.group({
      Title: ['', [
        Validators.required,
        Validators.pattern('^[- a-zA-Z0-9]+$'),
        MovieValidators.titleAllreadyExist
      ]],
      Released: ['', [
        Validators.required,
        MovieValidators.dateValidator
      ]],
      Runtime: ['', [
        Validators.required,
        Validators.max(999)
      ]],
      Genre: ['', [Validators.required]],
      Director: ['', [Validators.required, Validators.pattern('^[- a-zA-Z]+$')]],
      imdbRating: ['', [Validators.required, Validators.max(10)]],
      imdbID: [''],
      Poster: ['',]
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
