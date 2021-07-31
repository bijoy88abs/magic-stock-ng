import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';
import { PurchaseCrudService } from 'src/app/service/purchase-crud.service';

@Component({
  selector: 'app-purchase-machine',
  templateUrl: './purchase-machine.component.html',
  styleUrls: ['./purchase-machine.component.scss']
})
export class PurchaseMachineComponent implements OnInit {
  purchaseItemName: string;
  purchaseItemQty: string;
  purchaseItemPricePerUnit: string;
  purchaseItemGst: string;
  purchaseItemHsn: string;
  purchaseItemNote: string;
  purchaseItemDate: any;
  purchaseItemDateEdit: any;
  purchaseItemTotal: any;
  purchaseItemSupplier: string;

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
      this.purchaseService.savePurchaseMachine(payloadData).subscribe(
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
    this.purchaseService.viewPurchaseMachine().subscribe(
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
      this.purchaseService.editPurchaseMachine(payloadData).subscribe(
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
      this.purchaseService.deletePurchaseMachine(payloadData).subscribe(
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
    this.purchaseItemSupplier = '';
    this.purchaseItemNote = '';
    this.storeId = '';
    this.purchaseItemDateEdit = '';
    this.purchaseItemTotal = '';
  }


}
