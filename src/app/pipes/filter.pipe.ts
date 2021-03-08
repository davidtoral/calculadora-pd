import { Pipe, PipeTransform } from '@angular/core';
import { Search } from '../utils/search';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(mainArr: any[], searchText: string, property: string): any {
    return Search.filterArrayByString(mainArr, searchText);
  }
}
