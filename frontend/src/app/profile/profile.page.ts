import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Authapi } from '../shared/authapi';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {

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
