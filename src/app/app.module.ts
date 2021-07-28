import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { SaleComponent } from './components/sale/sale.component';
import { PurchaseRawMaterialsComponent } from './components/purchase-raw-materials/purchase-raw-materials.component';
import { ReportsSaleComponent } from './components/reports-sale/reports-sale.component';
import { ReportsPurchaseComponent } from './components/reports-purchase/reports-purchase.component';
import { PurchaseMachineComponent } from './components/purchase-machine/purchase-machine.component';
import { PurchaseMachineMasterComponent } from './components/purchase-machine-master/purchase-machine-master.component';
import { PurchaseItemMasterComponent } from './components/purchase-item-master/purchase-item-master.component';
import { PurchaseRawMaterialsMasterComponent } from './components/purchase-raw-materials-master/purchase-raw-materials-master.component';
import { SizeMasterComponent } from './components/size-master/size-master.component';
import { ColorMasterComponent } from './components/color-master/color-master.component';
import { GstTypeMasterComponent } from './components/gst-type-master/gst-type-master.component';
import { HsnTypeMasterComponent } from './components/hsn-type-master/hsn-type-master.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PurchaseComponent,
    SaleComponent,
    PurchaseRawMaterialsComponent,
    ReportsSaleComponent,
    ReportsPurchaseComponent,
    PurchaseMachineComponent,
    PurchaseMachineMasterComponent,
    PurchaseItemMasterComponent,
    PurchaseRawMaterialsMasterComponent,
    SizeMasterComponent,
    ColorMasterComponent,
    GstTypeMasterComponent,
    HsnTypeMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
