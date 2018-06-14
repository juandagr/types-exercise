import { Component, OnInit, Input } from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() descriptor:ResponseDescriptor;
  
  constructor() { }

  ngOnInit() {
  }

}
