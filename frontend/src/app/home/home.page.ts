import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProfilePage } from "../profile/profile.page";
import { ProductListPage } from "../product-list/product-list.page";
import { UploadPage } from '../upload/upload.page';

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
    UploadPage,
    NavbarComponent,
    ProductListPage,
    IonFooter,
    ProfilePage,
    ProfilePage,
    ProductListPage
]
})
export class HomePage {
  searchText: string = '';
  isLoggedIn = false;

  constructor(private router: Router) {}

  onSearch() {
    console.log('Keresett kifejezés:', this.searchText);
  }

  login() {
    console.log('Bejelentkezés gomb megnyomva');
    this.router.navigate([{outlets: {top: 'login' }}]); //navigálás a regisztrációs oldalra
    this.isLoggedIn = true;
  }
}
