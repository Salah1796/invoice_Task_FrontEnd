import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/Services/invoice.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  ID: Number = 0
  Name: string
  Units: any[]
  constructor(private invoiceService: InvoiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.invoiceService.GetUnits().subscribe(res => {
      if (res.Successed) {
        this.Units = res.Data
        console.log(this.Units)
      }
    }, err => {

    })
  }
  Add() {
    this.invoiceService.AddUnit({ ID: this.ID, Name: this.Name }).subscribe(res => {
      if (res.Successed) {
        this.Units.push(res.Data)
        this.toastr.success("Unit Added Successfully")
      }
      else
      {
        this.toastr.error(res.Message)
      }
    }, err => {

    })
  }

}
