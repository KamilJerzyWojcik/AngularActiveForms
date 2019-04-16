import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-server-communication-rxjs',
  templateUrl: './server-communication-rxjs.component.html',
  styleUrls: ['./server-communication-rxjs.component.css']
})
export class ServerCommunicationRxjsComponent implements OnInit {

  public users: any[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit() {
    this.http.get<any[]>(this.baseUrl + 'api/user/Users').subscribe(result => {
      this.users = result;
    }, error => console.error(error));
  }
}
