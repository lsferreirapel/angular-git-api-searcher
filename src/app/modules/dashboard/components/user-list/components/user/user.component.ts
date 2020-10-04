import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api/api.service';
import { Repository } from '../../../repository-list/components/repository/repository';
import { User } from '../../../../../../shared/models/user.model';

@Component({
  selector: 'gs-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
  searchUsername: string = '';
  searchUsers: User[] = [];
  searchRepositories: Repository[] = [];

  user: User;

  repositories: Repository[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getUser('lsferreirapel').subscribe((user: User) => {
    //   this.user = new User().deserialize(user);
    // })
    this.fakeUser();
  }

  fakeUser(): void {
    let user: User = new User().deserialize({
      id: '123',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      name: 'Full Name',
      login: 'User',
      company: 'none',
      bio: 'nonw',
      location: 'none',
      email: 'none',
      html_url: 'nonw',
      twitter_username: 'none',
    })

    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);
  }
}
