import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';
import { PurchaseCrudService } from 'src/app/service/purchase-crud.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  purchaseItemName: string;
  purchaseItemColor: string;
  purchaseItemSize: string;
  purchaseItemMaterial: string;
  purchaseItemQty: string;
  purchaseItemPricePerUnit: string;
  purchaseItemGst: string;
  purchaseItemHsn: string;
  purchaseItemNote: string;
  purchaseItemDate: any;
  purchaseItemSupplier: String;
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
    this.purchaseItemDate ="2012/07/23";
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
    return !this.purchaseItemName || !this.purchaseItemDate || !this.purchaseItemColor || !this.purchaseItemSize || !this.purchaseItemMaterial || !this.purchaseItemQty || !this.purchaseItemGst || !this.purchaseItemPricePerUnit || !this.purchaseItemSupplier;
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
        purchaseItemColor: this.purchaseItemColor,
        purchaseItemSize: this.purchaseItemSize,
        purchaseItemMaterial: this.purchaseItemMaterial,
        purchaseItemQty: this.purchaseItemQty,
        purchaseItemPricePerUnit: this.purchaseItemPricePerUnit,
        purchaseItemGst: this.purchaseItemGst,
        purchaseItemHsn: this.purchaseItemHsn,
        purchaseItemNote: this.purchaseItemNote,
        purchaseItemSupplier: this.purchaseItemSupplier
      };

      this.isLoading = true;
      this.purchaseService.savePurchase(payloadData).subscribe(
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
    this.purchaseService.viewPurchase().subscribe(
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
    this.purchaseItemColor = data.purchaseItemColor;
    this.purchaseItemSize = data.purchaseItemSize;
    this.purchaseItemMaterial = data.purchaseItemMaterial;
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
        purchaseItemColor: this.purchaseItemColor,
        purchaseItemSize: this.purchaseItemSize,
        purchaseItemMaterial: this.purchaseItemMaterial,
        purchaseItemQty: this.purchaseItemQty,
        purchaseItemPricePerUnit: this.purchaseItemPricePerUnit,
        purchaseItemGst: this.purchaseItemGst,
        purchaseItemHsn: this.purchaseItemHsn,
        purchaseItemNote: this.purchaseItemNote,
        purchaseItemSupplier: this.purchaseItemSupplier,
        id: this.storeId
      };

      this.isLoading = true;
      this.purchaseService.editPurchase(payloadData).subscribe(
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
      this.purchaseService.deletePurchase(payloadData).subscribe(
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
    this.purchaseItemColor = '';
    this.purchaseItemSize = '';
    this.purchaseItemMaterial = '';
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
