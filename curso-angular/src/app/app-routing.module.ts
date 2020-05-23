import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksComponent } from './shared/stocks/stocks.component';
import { CreateStockComponent } from './shared/stocks/create-stock/create-stock.component';


const routes: Routes = [
  { path: 'stocks/list', component: StocksComponent },
  { path: 'stocks/create', component: CreateStockComponent },
  { path: '**', redirectTo: 'stocks/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
