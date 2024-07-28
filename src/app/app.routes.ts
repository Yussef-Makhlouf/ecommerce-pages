import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component:ProductDetailsComponent  },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to home
];
