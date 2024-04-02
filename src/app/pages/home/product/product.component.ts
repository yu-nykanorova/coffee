import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private location: Location) { }
  goBack(): void {
    this.location.back();
  }
}
