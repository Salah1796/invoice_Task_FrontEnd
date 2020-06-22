import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  ID: Number = 0
  Name: string
  Stores: any[]
  constructor(private invoiceService: InvoiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.invoiceService.GetStores().subscribe(res => {
      if (res.Successed) {
        this.Stores = res.Data
        console.log(this.Stores)
      }
      else {
        this.toastr.error(res.Message)
      }
    }, err => {

    })
  }
  Add() {
    this.invoiceService.AddStore({ ID: this.ID, Name: this.Name }).subscribe(res => {
      if (res.Successed) {
        this.Stores.push(res.Data)
        this.toastr.success("Store Added Successfully")
      }
      else {
        this.toastr.error(res.Message)
      }
    }, err => {

    })
  }
}

