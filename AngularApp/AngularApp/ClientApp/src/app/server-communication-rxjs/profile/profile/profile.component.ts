import { ProfileService } from './../../../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUsers().subscribe(result => {
      this.profile = result;
    },
    error => {
      console.log(error);
    });
  }

}
