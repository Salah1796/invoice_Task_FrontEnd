import { ApiService } from './Services/api.service';
import { InvoiceService } from './Services/invoice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './Component/invoice/invoice.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ItemComponent } from './Component/item/item.component';
import { UnitComponent } from './Component/unit/unit.component';
import { ItemUnitComponent } from './Component/item-unit/item-unit.component';
import { StoreComponent } from './Component/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    NavbarComponent,
    FooterComponent,
    ItemComponent,
    UnitComponent,
    ItemUnitComponent,
    StoreComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ easeTime: 1000, timeOut: 2000 }),
    MatMenuModule,

    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatDialogModule,

    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    })

  ],
  providers: [
    {provide:
    
      LocationStrategy 
    , useClass :HashLocationStrategy

    },
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
