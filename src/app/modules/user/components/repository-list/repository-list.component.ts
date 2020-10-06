import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gs-user-repositories',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent implements OnInit {
  reposList: number[] = [1,2,3,4,5,6];

  constructor() { }
  ngOnInit() { }
}
