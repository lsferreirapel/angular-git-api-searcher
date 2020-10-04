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

  githubAvatar: string = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';
  name: string = 'Full Name';
  login: string = 'User';
  company: string = 'None';
  bio: string = 'none';
  location: string = 'none';
  email: string = 'none@gmail.com';

  githubUrl: string = 'lsferreirapel';
  twitterUsername: string ='lsferreirapel';

  repositories: Repository[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    // this.api.getUser('lsferreirapel').subscribe(user => {
    //   this.githubAvatar = user.avatar_url;
    //   this.name = user.name;
    //   this.login = user.login;
    //   this.company = user.company;
    //   this.bio = user.bio;
    //   this.location = user.location;
    //   this.email = user.email;
    //   this.githubUrl = user.html_url;
    //   this.twitterUsername = user.twitter_username;

    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    //   this.searchUsers = this.searchUsers.concat(user);
    // })
    this.fakeUser();
  }

  fakeUser(): void {
    let user: User = {
      id: '123',
      avatar_url: this.githubAvatar,
      name: this.name,
      login: this.login,
      company: this.company,
      bio: this.bio,
      location: this.location,
      email: this.email,
      html_url: this.githubUrl,
      twitter_username: this.twitterUsername,
    };

    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);
    this.searchUsers = this.searchUsers.concat(user);

  }
}
