import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonButton,
} from '@ionic/angular/standalone';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    FormsModule,
    CommonModule,
    HttpClientModule,
    UploadComponent
  ]
})
export class HomePage {
  searchText: string = '';
  isLoggedIn = false;

  constructor() {}

  onSearch() {
    console.log('Keresett kifejezés:', this.searchText);
  }

  login() {
    console.log('Bejelentkezés gomb megnyomva');
    this.isLoggedIn = true;
  }
}
