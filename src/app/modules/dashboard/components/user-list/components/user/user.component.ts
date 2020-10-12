import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../../../../shared/models/user.model';

@Component({
  selector: 'gs-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
  @Input() user: User;

  constructor() { }
  ngOnInit() { }
}
