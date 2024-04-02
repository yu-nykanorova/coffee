import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public coffeeData = [
    {
      title: 'Cappucino',
      id: 1, 
    },
    {
      title: 'Latte',
      id: 2,
    }
  ]

}
