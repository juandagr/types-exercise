import { Component, OnInit, Input } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';
import { GenresDescriptor } from '../../types/genres.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() descriptor:ResponseDescriptor;
  @Input() genres: GenresDescriptor = new GenresDescriptor();
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  onClick(movie) {
    this.router.navigate(['/detail', movie]);
  }
}
