import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Dummy data
  data = [
    { name: 'Item 1', /* other properties */ },
    { name: 'Item 2', /* other properties */ },
    // Add more dummy data
  ];

  constructor() { }

  search(query: string): any[] {
    // Dummy search function, replace it with actual search logic
    return this.data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }
}
