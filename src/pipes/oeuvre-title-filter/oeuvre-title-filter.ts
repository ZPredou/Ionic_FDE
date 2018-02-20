import { Pipe, PipeTransform, OnInit } from '@angular/core';

/**
 * Generated class for the OeuvreTitleFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
})
  export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
        return it.toLowerCase().includes(searchText);
    });
  }
}
