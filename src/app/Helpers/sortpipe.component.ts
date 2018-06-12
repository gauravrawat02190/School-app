import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
{
    name: 'SortPipes'
})

export class SortPipes implements PipeTransform {
    transform(value: any[], params: string, prop: string): any {

        switch (params.toLowerCase()) {
            case "asc":
                return value.sort(this.predicateBy(prop));
            case "desc":
                return value.sort(this.predicateBy(prop)).reverse();
            default: return value;
        }

    }

    private predicateBy(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
}
