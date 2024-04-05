import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public router: Router, private globalService: GlobalService) {}
  
}

