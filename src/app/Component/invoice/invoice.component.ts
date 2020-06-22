import { InvoiceService } from './../../Services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { disconnect } from 'process';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {


  Stores: { ID: Number, Name: String }[]
  Items: { ID: Number, Name: String }[]

  //Invoic Details
  InvoicTotalPrice: number = 0
  Taxes: number = 0
  InvoicNetPrice: number = 0
  StoreID: number = 0
  Number: Number
  Date
  InvoiceItems: InvoiceItem[] = new Array()

  //InvoiceItem Details
  ItemUnitID: Number = 0
  Quantity: Number = 1
  Total: Number = 0
  Discount: Number = 0
  Net: Number = 0

  ItemUnits: { ID: number, Unit: string, Price: Number }[]
  ItemID: Number = 0
  ItemUnitPrice: Number = 0


  public CategoryFormControl = new FormControl("");
  popoverTitle: string;
  popoverMessage: string
  confirmClicked: boolean;
  cancelClicked: boolean;
  confirmButtonType: string
  constructor(private invoiceService: InvoiceService, private toastr: ToastrService) {
    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Delete Invoice';
    this.confirmClicked = false;
    this.cancelClicked = false;
  }
  ngOnInit(): void {
    console.log(this.Date)
    this.invoiceService.GetItems().subscribe(res => {
      if (res.Successed) {

        this.Items = res.Data
        console.log(this.Items)
      }

    }, err => {

    })
    this.invoiceService.GetStores().subscribe(res => {
      if (res.Successed) {


        this.Stores = res.Data
        console.log(this.Date)
      }

    }, err => {

    })
  }

  GetUnits() {
    this.ItemUnitPrice = null
    console.log(this.ItemID)
    this.invoiceService.GetItemUnits(this.ItemID).subscribe(res => {
      console.log(res)
      if (res.Successed) {
        this.ItemUnits = res.Data

      }
    }, err => {

    })
  }
  GetPrice() {
    this.ItemUnits.forEach(ItemUnit => {
      if (ItemUnit.ID == this.ItemUnitID)
        this.ItemUnitPrice = ItemUnit.Price
      this.Total = this.Net = Number(this.ItemUnitPrice) * Number(this.Quantity)
    })
  }
  CalcTotal() {
    this.Total = Number(this.ItemUnitPrice) * Number(this.Quantity)
    this.Net = this.Total
  }
  CalcNet() {
    this.Net = Number(this.Total) - Number(this.Discount)
  }

  Add() {
    console.log(this.Date)
    if (this.ItemID != 0) {
      let inv = new InvoiceItem();
      inv.ID = 0;
      inv.InvoiceID = 0
      inv.TotalPrice = this.Total
      inv.ItemUnitID = this.ItemUnitID
      inv.Quantity = this.Quantity
      inv.Discount = this.Discount
      inv.NetPrice = this.Net
      inv.Price = this.ItemUnitPrice
      this.Items.forEach(Item => {
        if (Item.ID == this.ItemID)
          inv.Item = Item.Name
      })
      this.ItemUnits.forEach(ItemUnit => {
        if (ItemUnit.ID == this.ItemUnitID)
          inv.Unit = ItemUnit.Unit
      })
      this.InvoiceItems.push(inv)
      this.InvoicTotalPrice += Number(inv.NetPrice)
      this.toastr.success("Item Add Successfully")

      //Reset
      this.InvoicNetPrice = Number(this.InvoicTotalPrice) + Number(this.Taxes)
      this.ItemID = 0
      this.ItemUnitID = 0
      this.ItemUnitPrice = 0
      this.Quantity = 1
      this.Total = 0
      this.Discount = 0
      this.Net = 0
    }
  }
  CalcInvNet() {
    this.InvoicNetPrice = Number(this.InvoicTotalPrice) + Number(this.Taxes)
  }
  Save() {

    let NewInvoice = new Invoice();
    NewInvoice.ID = 0
    NewInvoice.StoreID = this.StoreID
    NewInvoice.Date = this.Date
    NewInvoice.InvoiceItems = this.InvoiceItems
    NewInvoice.Number = this.Number
    NewInvoice.TotalPrice = this.InvoicTotalPrice
    NewInvoice.Taxes = this.Taxes
    NewInvoice.NetPrice = this.InvoicNetPrice
    console.log(NewInvoice)
    this.invoiceService.AddInvoice(NewInvoice).subscribe(res => {
      if (res.Successed) {
        this.toastr.success("Invoice Saved Successfully")
        console.log(res.Data)
        this.InvoiceItems = []
      }
    }, err => {

    })
  }

  Delete() {
    this.InvoiceItems = []

  }
}

class InvoiceItem {
  ID: Number
  InvoiceID: Number
  ItemUnitID: Number
  Quantity: Number
  TotalPrice: Number
  Discount: Number
  NetPrice: Number
  Item: String
  Unit: String
  Price: Number
}

class Invoice {
  ID: Number
  StoreID: Number
  Number: Number
  Date: Date
  TotalPrice: Number
  Taxes: Number
  NetPrice: Number
  InvoiceItems: InvoiceItem[]
}