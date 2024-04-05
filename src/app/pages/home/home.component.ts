import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public coffeeDrinksData = [
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      img: 'assets/img/cappuccino_1.png',
      price: 4.20,
      raiting: 4.5,
      id: 1
    },
    {
      title: 'Latte',
      desc: 'With Foam',
      img: 'assets/img/cappuccino_2.png',
      price: 4.20,
      raiting: 4.2,
      id: 2
    },
    {
      title: 'Cappucino',
      desc: 'With Steamed Milk',
      img: 'assets/img/cappuccino_1.png',
      price: 4.20,
      raiting: 4.5,
      id: 3
    }
  ]

  public coffeeDrinks = [
    { name: 'All' },
    { name: 'Cappuccino'},
    { name: 'Espresso'},
    { name: 'Americano'},
    { name: 'Macchiato'},
  ]

  selectedItem: any = this.coffeeDrinks[0];

  selectItem(item: any) {
    this.selectedItem = item;
  }
  
}
