import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';
import { PurchaseCrudService } from 'src/app/service/purchase-crud.service';

@Component({
  selector: 'app-purchase-raw-materials',
  templateUrl: './purchase-raw-materials.component.html',
  styleUrls: ['./purchase-raw-materials.component.scss']
})
export class PurchaseRawMaterialsComponent implements OnInit {
  purchaseItemName: string;
  purchaseItemQty: string;
  purchaseItemPricePerUnit: string;
  purchaseItemGst: string;
  purchaseItemHsn: string;
  purchaseItemNote: string;
  purchaseItemSupplier: string;
  purchaseItemDate: any;
  purchaseItemDateEdit: any;
  purchaseItemTotal: any;

  masterDataList: any;

  isLoading = false;
  itemLists = null;
  storeId: any;
  isEdit = false;

  constructor(private masterService: MasterCrudService, private purchaseService: PurchaseCrudService) {
    this.purchaseItemDate = new Date().toISOString().substring(0, 10);
   }

  ngOnInit() {
    this.loadMasterData();
    this.viewList();
  }

  loadMasterData() {
    this.masterService.loadMasterData().subscribe(
      (responseData) => {
        this.masterDataList = responseData;
      },
      (error) => { }
    );
  }

  validityCheck() {
    this.totalPriceCalculation();
    return !this.purchaseItemName || !this.purchaseItemDate || !this.purchaseItemQty || !this.purchaseItemGst || !this.purchaseItemPricePerUnit || !this.purchaseItemSupplier;
  }

  totalPriceCalculation() {
    if(this.purchaseItemQty && this.purchaseItemPricePerUnit) {
      this.purchaseItemTotal = (parseInt(this.purchaseItemQty) * parseFloat(this.purchaseItemPricePerUnit)).toFixed(2);
    }
  }

  totalPriceCalculationView(purchaseItemQty, purchaseItemPricePerUnit, purchaseItemGst) {
    if(purchaseItemQty && purchaseItemPricePerUnit) {
      return (parseInt(purchaseItemQty) * parseFloat(purchaseItemPricePerUnit)).toFixed(2);
    }
  }

  save() {
    if (this.validityCheck()) {
      return;
    } else {
      const payloadData = {
        purchaseItemName: this.purchaseItemName,
        purchaseItemDate: this.purchaseItemDate,
        purchaseItemQty: this.purchaseItemQty,
        purchaseItemPricePerUnit: this.purchaseItemPricePerUnit,
        purchaseItemGst: this.purchaseItemGst,
        purchaseItemHsn: this.purchaseItemHsn,
        purchaseItemNote: this.purchaseItemNote,
        purchaseItemSupplier: this.purchaseItemSupplier
      };

      this.isLoading = true;
      this.purchaseService.savePurchaseRaw(payloadData).subscribe(
        (responseData) => {
          this.clearForm();
          this.viewList();
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
    }
  }

  viewList() {
    this.isLoading = true;
    this.purchaseService.viewPurchaseRaw().subscribe(
      (responseData: any) => {
        this.itemLists = responseData.data;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  editForm(data) {
    this.purchaseItemName = data.purchaseItemName;
    this.purchaseItemDate = data.purchaseItemDate;
    this.purchaseItemQty = data.purchaseItemQty;
    this.purchaseItemPricePerUnit = data.purchaseItemPricePerUnit;
    this.purchaseItemGst = data.purchaseItemGst;
    this.purchaseItemHsn = data.purchaseItemHsn;
    this.purchaseItemNote = data.purchaseItemNote;
    this.purchaseItemSupplier = data.purchaseItemSupplier;
    this.storeId = data._id;
    this.isEdit = true;
    this.purchaseItemDateEdit = this.purchaseItemDate ? new Date(this.purchaseItemDate) : '';
    this.totalPriceCalculation();
  }


  editProperty() {
    if (this.storeId && !this.validityCheck() && this.purchaseItemDate) {
      const payloadData = {
        purchaseItemName: this.purchaseItemName,
        purchaseItemDate: this.purchaseItemDate,
        purchaseItemQty: this.purchaseItemQty,
        purchaseItemPricePerUnit: this.purchaseItemPricePerUnit,
        purchaseItemGst: this.purchaseItemGst,
        purchaseItemHsn: this.purchaseItemHsn,
        purchaseItemNote: this.purchaseItemNote,
        purchaseItemSupplier: this.purchaseItemSupplier,
        id: this.storeId
      };

      this.isLoading = true;
      this.purchaseService.editPurchaseRaw(payloadData).subscribe(
        (responseData) => {
          this.cancelEdit();
          this.viewList();
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
    }
  }

  deleteProperty(id) {
    if (id) {
      const payloadData = {
        id: id
      };

      this.isLoading = true;
      this.purchaseService.deletePurchaseRaw(payloadData).subscribe(
        (responseData) => {
          this.viewList();
          this.cancelEdit();
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
    }
  }

  cancelEdit() {
    this.isEdit = false;
    this.clearForm();
  }

  clearForm() {
    this.purchaseItemName = '';
    this.purchaseItemDate = '';
    this.purchaseItemQty = '';
    this.purchaseItemPricePerUnit = '';
    this.purchaseItemGst = '';
    this.purchaseItemHsn = '';
    this.purchaseItemNote = '';
    this.purchaseItemSupplier = '';
    this.storeId = '';
    this.purchaseItemDateEdit = '';
    this.purchaseItemTotal = '';
  }

}
