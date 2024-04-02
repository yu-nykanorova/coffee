import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../data.service';
import { HideService } from '../../../../hide.service';

@Component({
  selector: 'app-coffee-beans-item',
  templateUrl: './coffee-beans-item.component.html',
  styleUrl: './coffee-beans-item.component.scss'
})

export class CoffeeBeansItemComponent implements OnInit {

  public item: any;
  public coffeeBeans: any;

  constructor(private route: ActivatedRoute, private dataService: DataService, private location: Location, private hideServise: HideService) {
    this.coffeeBeans = this.dataService.getProductData();
   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('id'));
    this.item = this.coffeeBeans.find((item: { id: number; }) => item.id === itemIdFromRoute);

    this.hideServise.setComponentState({ state: false });
  }

  goBack(): void {
    this.location.back();
  }

}
