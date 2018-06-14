import { Component, OnInit } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  search="";

  descriptorSend: ResponseDescriptor;
  constructor() { }

  listenSearch(event){
    this.descriptorSend = event;
  }

  ngOnInit() {
  }

}
