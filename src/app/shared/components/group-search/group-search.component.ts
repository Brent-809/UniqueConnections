import { Component, Input } from '@angular/core';

interface Group {
  _id: string;
  name: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.scss'],
})
export class GroupSearchComponent {
  @Input() joinedGroups: Group[] = [];

  filteredGroups: Group[] = [];
  searchQuery = '';
  
  applySearchFilter() {
    const lowercaseQuery = this.searchQuery.toLowerCase();
    this.filteredGroups = this.joinedGroups.filter(group =>
      group.name.toLowerCase().includes(lowercaseQuery)
    );
  }
  
}
