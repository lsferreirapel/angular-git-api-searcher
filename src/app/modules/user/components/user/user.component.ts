import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/modules/repository/components/repository/repository';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { User } from './user';

@Component({
  selector: 'gs-user',
  templateUrl: './user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
  searchUsername: string = '';
  searchUsers: User[] = [];
  searchRepositories: Repository[] = [];

  githubAvatar: string = ''
  name: string = '';
  login: string ='';
  company: string = '';
  bio: string = '';
  location: string = '';
  email: string = '';

  githubUrl: string = '';
  twitterUsername: string ='';

  repositories: Repository[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUser('lsferreirapel').subscribe(user => {
      this.githubAvatar = user.avatar_url;
      this.name = user.name;
      this.login = user.login;
      this.company = user.company;
      this.bio = user.bio;
      this.location = user.location;
      this.email = user.email;
      this.githubUrl = user.html_url;
      this.twitterUsername = user.twitter_username;

      this.searchUsers = this.searchUsers.concat(user);
    })
  }
}
