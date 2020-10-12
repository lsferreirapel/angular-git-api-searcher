import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Repository } from 'src/app/modules/user/components/repository-list/components/repository/repository';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  searchUsers(username): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/search/users?q=${username}`);
  }

  getRepository(username, repositoryName): Observable<Repository> {
    return this.http
      .get<Repository>(`${this.baseUrl}/repos/${username}/${repositoryName}`);
  }

  getRepositories(username) : Observable<Repository[]> {
    return this.http
      .get<Repository[]>(`${this.baseUrl}/${username}/repos`)
  }

  getReadme() : Observable<any> {

    return this.http
    .get(`https://api.github.com/repos/axios/axios/readme`,
      {
        headers:  { Accept: 'application/vnd.github.VERSION.raw' },
        responseType: 'text'
      },
    )


    // return this.http
    //   .get<string>(
    //     // `${this.baseUrl}/repos/${username}/${repositoryName}/readme`,
    //     `https://api.github.com/repos/diego3g/rocketredis/readme`,
    //     { headers: { Accept: 'application/vnd.github.VERSION.raw' } }
    //   );

  }
}
