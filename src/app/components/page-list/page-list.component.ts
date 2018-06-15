import { Component, OnInit } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';
import { GenresDescriptor } from '../../types/genres.type';
import { GenresService } from '../../services/genres.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  search="";

  descriptorSend: ResponseDescriptor;
  public genres: GenresDescriptor = new GenresDescriptor();

  constructor(
    private genresService: GenresService
  ) { }

  listenSearch(event){
    this.descriptorSend = event;
  }

  ngOnInit() {
    this.genresService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.genres = data;
      }
    );
    console.log("this.genres");

    
  }

}
