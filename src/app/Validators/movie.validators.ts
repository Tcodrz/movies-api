import { CapitalizePipe } from './capitalize.pipe';
import { MovieTitles } from './../model/movie-titles';


import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MovieValidators {

    static titleAllreadyExist(control: AbstractControl): ValidationErrors | null {

        let capitalize = new CapitalizePipe();
        let value = capitalize.transform(control.value); 
        let movieTitles = MovieTitles.movieTitles;

        if (movieTitles.indexOf(value) >= 0) {
            return { titleAllreadyExist: true }
        }
        return null;
    }

    static dateValidator(control: AbstractControl): ValidationErrors | null {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        
        if (control.value.length > 10) {
            return {notValidDate: true};
        }
        let inputYear = control.value[0] + control.value[1] + control.value[2] + control.value[3];
        let inputMonth = control.value[5] + control.value[6];
        let inputDay = control.value[8] + control.value[9];
        if (inputYear > year || inputYear < 1900) {
            return {notValidYear: true};
        }
        if (inputYear == year && inputMonth > month) {
            return {notValidMonth: true};
        }
        if ((inputYear == year && inputMonth == month) && inputDay > day) {
            return {notValidDay: true};
        } 
        return null;
    }
}