import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/products'
  }
getProduct() : Observable<Product[]>{
// const token = localStorage.getItem('token')
 // const headers = new  HttpHeaders().set('authorization',`Bearer ${token}`)
//  return  this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, {headers : headers})
  return  this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`)
 }
}
