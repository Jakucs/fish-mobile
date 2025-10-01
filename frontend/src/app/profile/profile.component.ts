import { Component, OnInit } from '@angular/core';
import { Authapi } from '../shared/authapi';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(private authapi: Authapi) {}

  ngOnInit() {
    // Ellenőrizzük, hogy be van-e jelentkezve
    this.isLoggedIn = this.authapi.isLoggedIn();

    if (this.isLoggedIn) {
      this.userName = this.authapi.getUserName(); // felhasználó neve
    }
  }

  logout() {
    this.authapi.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        this.isLoggedIn = false;
        this.userName = '';
      },
      error: err => console.error('Logout hiba', err)
    });
  }

}
