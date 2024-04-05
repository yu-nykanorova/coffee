import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductDataService } from '../../product-data.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../../../global.service';

@Component({
  selector: 'app-coffee-beans-item',
  templateUrl: './coffee-beans-item.component.html',
  styleUrl: './coffee-beans-item.component.scss'
})

export class CoffeeBeansItemComponent implements OnInit {

  public coffeeSize = [
    { value: '250' },
    { value: '500' },
    { value: '1000' }
  ]

  public selectedSize: any = this.coffeeSize[0];
  public size: any;  
  public data: any;
  isLiked: boolean = false;
  
  constructor(private location: Location, public productData: ProductDataService, private route: ActivatedRoute, private likedService: GlobalService) {  }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.data = this.productData.coffeeBeans.find((data: { id: number; }) => data.id === productIdFromRoute);
  }

  goBack(): void {
    this.location.back();
  }

  selectSize(size:any) {
    this.selectedSize = size;
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }
 
}
