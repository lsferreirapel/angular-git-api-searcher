import { Deserializable } from './deserializable.model';

export class User implements Deserializable{
  id: string;
  avatar_url: string;   // githubAvatar
  name: string;         // name
  login: string;        // username
  bio: string;          // description
  company: string;      // company
  location: string;     // location
  email: string;        // email
  html_url: string;     // gitHubUrl
  twitter_username: string; // twitterUsername

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}

// Example
