import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {
  @Output() navClose = new EventEmitter<void>();
}
