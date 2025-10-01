import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonFooter } from '@ionic/angular/standalone';
import { UploadComponent } from '../upload/upload.component';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { ProductListComponent } from "../product-list/product-list.component";

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
    UploadComponent,
    NavbarComponent,
    ProductListComponent,
    IonFooter
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
