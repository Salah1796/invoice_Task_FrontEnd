import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/Services/invoice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  ID: Number = 0
  Name: string
  Items: any[]
  constructor(private invoiceService: InvoiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.invoiceService.GetItems().subscribe(res => {
      if (res.Successed) {
        this.Items = res.Data
        console.log(this.Items)
      }
      else {
        this.toastr.error(res.Message)
      }
    }, err => {

    })
  }
  Add() {
    this.invoiceService.AddItem({ ID: this.ID, Name: this.Name }).subscribe(res => {
      if (res.Successed) {
        this.Items.push(res.Data)
        this.toastr.success("Item Added Successfully")
      }
      else {
        this.toastr.error(res.Message)
      }
    }, err => {

    })
  }
}
