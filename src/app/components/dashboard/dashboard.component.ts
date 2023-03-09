import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listProduct: Product[] = []

  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this._productService.getProduct().subscribe(data=>{
      this.listProduct = data;
      console.log(data)
    })
  }

}
