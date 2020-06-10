import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MovieTitles {

    public static movieTitles = [
        'Pulp Fiction', 'A Clockwork Orange', 'The Revenant', `Pan's Labyrinth`,
        `Inception`, `Shutter Island`, `Reservoir Dogs`, `Kill Bill: Vol. 1`,
        `The Matrix`, `The Dark Knight`, `Parasite`, `Interstellar`, `The Silence of the Lambs`,
        `Joker`, `Whiplash`, `The Departed`, `American History X`, `Django Unchained`,
        `Inglourious Basterds`, `Requiem for a Dream`, `V for Vendetta`, `Survive the Night`,
        `Bad Boys for Life`, `It`, `Superbad`, `Big Lebowski`, `No Country For Old Men`
    ];

    set movieTitles(updateArray: string[]) {
        this.movieTitles = updateArray;
    }

}
