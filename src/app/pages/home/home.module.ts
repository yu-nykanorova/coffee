import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CoffeeBeansComponent } from './coffee-beans/coffee-beans.component';
import { CoffeeBeansItemComponent } from './coffee-beans/coffee-beans-item/coffee-beans-item.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'coffee-beans/coffee-beans-item/:id', component: CoffeeBeansItemComponent }
  
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    SearchComponent,
    CoffeeBeansComponent,
    CoffeeBeansItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
  
})
export class HomeModule { }
