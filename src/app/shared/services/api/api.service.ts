import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Repository } from 'src/app/modules/repository/components/repository/repository';
import { User } from 'src/app/modules/user/components/user/user';



@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUser(username): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}/users/${username}`);
  }

  getRepository(username, repositoryName): Observable<Repository> {
    return this.http
      .get<Repository>(`${this.baseUrl}/repos/${username}/${repositoryName}`);
  }

  getRepositories(username) : Observable<Repository[]> {
    return this.http
      .get<Repository[]>(`${this.baseUrl}/${username}/repos`)
  }

  getReadme() : Observable<string> {
    // let header = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/vnd.github.VERSION.raw',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // }

    return this.http
      .get<string>(
        // `${this.baseUrl}/repos/${username}/${repositoryName}/readme`,
        `https://api.github.com/repos/diego3g/rocketredis/readme`,
        { headers: new HttpHeaders({ Accept: 'application/vnd.github.VERSION.raw' }) }
      );
  }
}
