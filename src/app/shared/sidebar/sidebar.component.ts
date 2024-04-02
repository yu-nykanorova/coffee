import { Component, OnInit } from '@angular/core';
import { HideService } from '../../hide.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isComponentVisible = true;
  subscription: Subscription = new Subscription;

  constructor(private hideServise: HideService) { }

  ngOnInit(): void {
    this.subscription = this.hideServise.componentState$.subscribe(state => { this.isComponentVisible = state;});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
