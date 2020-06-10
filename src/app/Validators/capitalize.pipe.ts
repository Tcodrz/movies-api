import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform (value: any, args?: any): string {
        if (!value) {
            return null;
        }

        let words = value.split(' ');
        let sentence = [];

        for (let i = 0; i < words.length; i++) {
            let word = words[i];

            sentence.push(word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase())
        }
        let i = 0;

        while (i < sentence.length) {
            if (sentence[i] === "") {
              sentence.splice(i, 1);
              i--;
            }
            i++;
          }
        return sentence.join(' ');


    }
}