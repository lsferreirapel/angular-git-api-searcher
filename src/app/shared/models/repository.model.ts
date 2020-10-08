import { User } from './user.model';

export class Repository {
  id: string;
  name: string;
  owner: User
  html_url: string;
  description: string;
  language: string;
}
