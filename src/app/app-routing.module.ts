import { StoreComponent } from './Component/store/store.component';
import { ItemUnitComponent } from './Component/item-unit/item-unit.component';
import { UnitComponent } from './Component/unit/unit.component';
import { ItemComponent } from './Component/item/item.component';
import { InvoiceComponent } from './Component/invoice/invoice.component';
import { NgModule ,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'Item' ,component:ItemComponent},
  {path:'Unit' ,component:UnitComponent},
  {path:'ItemUnit' ,component:ItemUnitComponent},
  {path:'Store' ,component:StoreComponent},
  {path:'' ,component:InvoiceComponent},
  {path:'**' ,component:InvoiceComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
