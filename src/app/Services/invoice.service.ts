import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private apiService: ApiService) { }
  GetItems(): any {
    return this.apiService.get("Item/GetAll")
  }
  GetStores(): any {
    return this.apiService.get("Store/GetAll")
  }
  GetItemUnits(ItemID): any {
    return this.apiService.get(`ItemUnit/GetItemUnits?ItemID=${ItemID}`)
  }
  AddInvoice(Invoice): any {
    return this.apiService.post(`Invoice/Add`, JSON.stringify(Invoice))
  }

  AddItem(Item): any {
    return this.apiService.post(`Item/Add`, JSON.stringify(Item))
  }
  GetUnits(): any {
    return this.apiService.get("Unit/GetAll")

  }
  AddUnit(unit): any {
    return this.apiService.post(`Unit/Add`, JSON.stringify(unit))
  }
  GetItemsUnits(): any {
    return this.apiService.get(`ItemUnit/GetAll`)
  }

  AddItemUnit(ItemUnit): any {
    return this.apiService.post(`ItemUnit/Add`, JSON.stringify(ItemUnit))
  }
  AddStore(store):any{
    return this.apiService.post(`Store/Add`, JSON.stringify(store))

  }
}
