import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../server-communication-rxjs/models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'api/User/users');
  }
}
