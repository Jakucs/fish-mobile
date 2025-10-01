import { Component, OnInit } from '@angular/core';
import { Productapi } from '../shared/productapi';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class ProductListComponent  implements OnInit {

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
