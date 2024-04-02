import { Component } from '@angular/core';
import { fadeInOut } from '../animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [fadeInOut]
})
export class HeaderComponent {
  public navIsActive = false;
}
