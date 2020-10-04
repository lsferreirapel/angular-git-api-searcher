import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  element: HTMLInputElement;

  constructor() { }

  ngOnInit() {

  }
}
