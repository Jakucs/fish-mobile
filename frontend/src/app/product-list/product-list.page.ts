import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Productapi } from '../shared/productapi';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonicModule, CommonModule, FormsModule]
})
export class ProductListPage implements OnInit {

  productList: any[] = []

  constructor(private productsapi: Productapi) { }

  ngOnInit() {
    this.productsapi.getProducts().subscribe({
      next: (data:any) => {
        console.log(data);
        this.productList = data.data;
        console.log("ProductList tartalma: ", this.productList)
      },
      error: (error) => {
        console.log("Hiba a termék betöltésekor: ", error)
      }
    });
  }

}
