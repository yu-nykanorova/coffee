import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  coffeeBeans: any = [
    {
      id: 1,
      img: 'assets/img/robusta_beans.png',
      title: 'Robusta Beans',
      roast: 'Medium Roasted',
      price: 4.20,
      region: 'Africa',
      raiting: 4.5,
      votes: 6.879,
      desc: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!'
    },
    {
      id: 2,
      img: 'assets/img/cappuccino_beans.png',
      title: 'Cappuccino',
      roast: 'With Steamed Milk',
      price: 4.20,
      region: 'Africa',
      raiting: 4.5,
      votes: 6.879,
      desc: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!' 
    },
    {
      id: 3,
      img: 'assets/img/robusta_beans.png',
      title: 'Robusta Beans',
      roast: 'Medium Roasted',
      price: 4.20,
      region: 'Africa',
      raiting: 4.5,
      votes: 6.879,
      desc: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!'
    }
  ]

  constructor() { }
}
