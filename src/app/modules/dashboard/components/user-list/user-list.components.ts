import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'gs-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  userList: User[] = [];
  @Input() searchInput: string = 'lucas ferreira';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api
      .searchUsers(this.searchInput)
      .subscribe(res => res.items.forEach(user => {
        this.userList.push(new User().deserialize(user));
      }));
  }
}
