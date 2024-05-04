import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  productItems: Product[] = []; // Single source of truth
  products: Product[] = [];
  keyword: string = "";

  constructor(){

  }

  ngOnInit(): void {
      this.productItems = [
        {id: 1, name: 'Laptop', price: 2000},
        {id: 2, name: 'Smartphone', price: 1000},
        {id: 3, name: 'Headphones', price: 100},
        {id: 4, name: 'Camera', price: 500},
        {id: 5, name: 'Charger', price: 50}
      ]

      this.products = this.productItems
  }


  deleteProduct(productIndex: number){
      this.products = this.products.filter(p => p.id != productIndex)
  }

  searchProduct(): void{
      this.products = this.productItems.filter(p => p.name.toLowerCase().includes(this.keyword.toLowerCase()))
  }
}
