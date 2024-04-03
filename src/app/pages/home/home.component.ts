import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('list') listRef!: ElementRef;

  selectedItem: any = null;

  private isMouseDown = false;
  private startX = 0;
  private scrollLeft = 0;

  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.startX = event.pageX - this.listRef.nativeElement.offsetLeft;
    this.scrollLeft = this.listRef.nativeElement.scrollLeft;

    this.listRef.nativeElement.style.cursor = 'grabbing';

    document.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  onMouseUp() {
    this.isMouseDown = false;
    this.listRef.nativeElement.style.cursor = 'grab';

    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) return;
    event.preventDefault();

    const x = event.pageX - this.listRef.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3;
    this.listRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }

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

}
