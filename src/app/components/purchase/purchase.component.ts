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

  masterDataList: any;

  itemLists = null;
  storeId: any;
  isEdit = false;

  constructor(private masterService: MasterCrudService, private purchaseService: PurchaseCrudService) { }

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

  save() {
    if (
      this.purchaseItemName !== '' &&
      this.purchaseItemColor !== '' &&
      this.purchaseItemSize !== '' &&
      this.purchaseItemMaterial !== '' &&
      this.purchaseItemQty !== '' &&
      this.purchaseItemPricePerUnit !== '' &&
      this.purchaseItemGst !== '' &&
      this.purchaseItemNote !== ''
    ) {
      const payloadData = {
        purchaseItemName: this.purchaseItemName,
        purchaseItemColor: this.purchaseItemColor,
        purchaseItemSize: this.purchaseItemSize,
        purchaseItemMaterial: this.purchaseItemMaterial,
        purchaseItemQty: this.purchaseItemQty,
        purchaseItemPricePerUnit: this.purchaseItemPricePerUnit,
        purchaseItemGst: this.purchaseItemGst,
        purchaseItemHsn: this.purchaseItemHsn,
        purchaseItemNote: this.purchaseItemNote
      };
      this.purchaseService.savePurchase(payloadData).subscribe(
        (responseData) => {
          this.clearForm();
          this.viewList();
        },
        (error) => { }
      );
    }
  }

  viewList() {
    this.purchaseService.viewPurchase().subscribe(
      (responseData: any) => {
        this.itemLists = responseData.data;
      },
      (error) => { }
    );
  }

  editForm(data) {
    this.purchaseItemName = data.purchaseItemName;
    this.purchaseItemColor = data.purchaseItemColor;
    this.purchaseItemSize = data.purchaseItemSize;
    this.purchaseItemMaterial = data.purchaseItemMaterial;
    this.purchaseItemQty = data.purchaseItemQty;
    this.purchaseItemPricePerUnit = data.purchaseItemPricePerUnit;
    this.purchaseItemGst = data.purchaseItemGst;
    this.purchaseItemHsn = data.purchaseItemHsn;
    this.purchaseItemNote = data.purchaseItemNote;
    this.storeId = data._id;
    this.isEdit = true;
  }


  editProperty() {
    if (
      this.storeId &&
      this.purchaseItemName !== '' &&
      this.purchaseItemColor !== '' &&
      this.purchaseItemSize !== '' &&
      this.purchaseItemMaterial !== '' &&
      this.purchaseItemQty !== '' &&
      this.purchaseItemPricePerUnit !== '' &&
      this.purchaseItemGst !== '' &&
      this.purchaseItemNote !== ''
    ) {
      const payloadData = {
        purchaseItemName: this.purchaseItemName,
        purchaseItemColor: this.purchaseItemColor,
        purchaseItemSize: this.purchaseItemSize,
        purchaseItemMaterial: this.purchaseItemMaterial,
        purchaseItemQty: this.purchaseItemQty,
        purchaseItemPricePerUnit: this.purchaseItemPricePerUnit,
        purchaseItemGst: this.purchaseItemGst,
        purchaseItemHsn: this.purchaseItemHsn,
        purchaseItemNote: this.purchaseItemNote,
        id: this.storeId
      };

      this.purchaseService.editPurchase(payloadData).subscribe(
        (responseData) => {
          this.cancelEdit();
          this.viewList();
        },
        (error) => { }
      );
    }
  }

  deleteProperty(id) {
    if (id) {
      const payloadData = {
        id: id
      };

      this.purchaseService.deletePurchase(payloadData).subscribe(
        (responseData) => {
          this.viewList();
          this.cancelEdit();
        },
        (error) => { }
      );
    }
  }

  cancelEdit() {
    this.isEdit = false;
    this.clearForm();
  }

  clearForm() {
    this.purchaseItemName = '';
    this.purchaseItemColor = '';
    this.purchaseItemSize = '';
    this.purchaseItemMaterial = '';
    this.purchaseItemQty = '';
    this.purchaseItemPricePerUnit = '';
    this.purchaseItemGst = '';
    this.purchaseItemHsn = '';
    this.purchaseItemNote = '';
    this.storeId = '';
  }

}
