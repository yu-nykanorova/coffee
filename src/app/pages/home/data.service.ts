import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productData: any;

  constructor() { }

  setProductData(data: any) {
    this.productData = data;
  }

  getProductData() {
    return this.productData;
  }
}
