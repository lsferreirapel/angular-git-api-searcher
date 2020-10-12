import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/shared/models/repository.model';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api/api.service';


@Component({
  templateUrl: './repository.page.html',
  styleUrls: ['./repository.page.css']
})
export class RepositoryPage implements OnInit{
  user: User = new User().deserialize({
    id: "1",
    avatar_url: "none",
    name: "Lucas Ferreira",
    login: "lsferreirapel",
    bio: "none",
    company: "none",
    location: "none",
    email: "none",
    html_url: "none",
    twitter_username: "none"
  })

  repository: Repository = {
    id: "1",
    name: "",
    owner: this.user,
    html_url: "none",
    description: "A default description just to test",
    language: "javascript"
  }

  readme: string = '';

  constructor(private api: ApiService) { }

  ngOnInit() { }

  getReadme() {
    this.api.getReadme().subscribe(res => this.readme = res)
  }
}
