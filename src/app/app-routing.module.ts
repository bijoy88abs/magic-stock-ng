import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorMasterComponent } from './components/color-master/color-master.component';
import { GstTypeMasterComponent } from './components/gst-type-master/gst-type-master.component';
import { HsnTypeMasterComponent } from './components/hsn-type-master/hsn-type-master.component';
import { PurchaseItemMasterComponent } from './components/purchase-item-master/purchase-item-master.component';
import { PurchaseMachineMasterComponent } from './components/purchase-machine-master/purchase-machine-master.component';
import { PurchaseMachineComponent } from './components/purchase-machine/purchase-machine.component';
import { PurchaseRawMaterialsMasterComponent } from './components/purchase-raw-materials-master/purchase-raw-materials-master.component';
import { PurchaseRawMaterialsComponent } from './components/purchase-raw-materials/purchase-raw-materials.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ReportsPurchaseComponent } from './components/reports-purchase/reports-purchase.component';
import { ReportsSaleComponent } from './components/reports-sale/reports-sale.component';
import { SaleComponent } from './components/sale/sale.component';
import { SizeMasterComponent } from './components/size-master/size-master.component';


const routes: Routes = [

  { path: 'purchase-item', component: PurchaseComponent },
  { path: 'purchase-raw-materials', component: PurchaseRawMaterialsComponent },
  { path: 'purchase-machine', component: PurchaseMachineComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'reports-purchase', component: ReportsPurchaseComponent },
  { path: 'reports-sale', component: ReportsSaleComponent },

  { path: 'master-item', component: PurchaseItemMasterComponent },
  { path: 'master-raw-material', component: PurchaseRawMaterialsMasterComponent },
  { path: 'master-machine', component: PurchaseMachineMasterComponent },
  { path: 'master-size', component: SizeMasterComponent },
  { path: 'master-color', component: ColorMasterComponent },
  { path: 'master-gst', component: GstTypeMasterComponent },
  { path: 'master-hsn', component: HsnTypeMasterComponent },
  { path: '**', redirectTo: '/master-purchase' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
