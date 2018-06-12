import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'Search'
})

export class SearchPipe implements PipeTransform {
    transform(value: any[], search: string, prop: string) {
        var result = value;
        // console.log(value.length +search+prop);
        if (value.length !== 0 && search && prop) {
            result = value.filter((item) => prop.split(',').some(key => item.hasOwnProperty(prop)
                && new RegExp(search, 'gi').test(item[prop])));
        }
        return result;
    }
}