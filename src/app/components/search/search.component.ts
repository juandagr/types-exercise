import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ResponseDescriptor } from '../../types/search.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public term: string = 'amelie';
  public movies: any[];

  @Output() onSearch: EventEmitter<ResponseDescriptor> = new EventEmitter();
  
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.term).subscribe(
      (data)=>{
        console.log('c: ', data);
        this.onSearch.emit(data);
      }
    );
  }
}
