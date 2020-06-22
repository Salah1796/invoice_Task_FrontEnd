import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-unit',
  templateUrl: './item-unit.component.html',
  styleUrls: ['./item-unit.component.css']
})
export class ItemUnitComponent implements OnInit {

 
  Name: string
  Items: any[]
  Units: []
  ItemsUnits: []
  ItemID: Number=0
  UnitID: Number=0
  Price: Number


  constructor(private invoiceService: InvoiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.invoiceService.GetItemsUnits().subscribe(res => {
      if (res.Successed) {
        this.ItemsUnits = res.Data
        console.log(this.Items)
      }
    }, err => {

    })

    this.invoiceService.GetItems().subscribe(res => {
      if (res.Successed) {
        this.Items = res.Data
        console.log(this.Items)
      }
    }, err => {

    })
    this.invoiceService.GetUnits().subscribe(res => {
      if (res.Successed) {
        this.Units = res.Data
        console.log(this.Items)
      }
    }, err => {

    })
  }
  Add() {
    this.invoiceService.AddItemUnit({ ID:0, ItemID: this.ItemID,UnitID:this.UnitID,Price:this.Price }).subscribe(res => {
      if (res.Successed) {
        this.Items.push(res.Data)
        this.toastr.success("Item & Unit  Added Successfully")
      }
      else
      this.toastr.error(res.Message)

    }, err => {

    })

  }
}
