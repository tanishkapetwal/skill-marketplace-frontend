import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkFilter'
})
export class LinkFilterPipe implements PipeTransform {

  transform(links: any[], searchText: string): any[] {
    if (!links) {
      return [];
    }
    if (!searchText) return links;
    searchText = searchText.toLowerCase();
    return links.filter(link => (link.title && link.title.toLowerCase().includes(searchText)) ||
      (link.url && link.url.toLowerCase().includes(searchText))
    );
  }

}
