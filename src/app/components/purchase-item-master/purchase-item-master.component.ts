import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';

@Component({
  selector: 'app-purchase-item-master',
  templateUrl: './purchase-item-master.component.html',
  styleUrls: ['./purchase-item-master.component.scss']
})
export class PurchaseItemMasterComponent implements OnInit {
  propertyName: string;
  itemLists = null;
  storeId: any;
  isEdit = false;

  constructor(private masterService: MasterCrudService) { }

  ngOnInit() {
    this.viewList();
  }

  save() {
    if (this.propertyName !== '') {
      this.masterService.saveMasterPurchaseItem(this.propertyName).subscribe(
        (responseData) => {
          this.propertyName = '';
          this.viewList();
        },
        (error) => {

        }
      );
    }
  }

  viewList() {
    this.masterService.viewMasterPurchaseItem().subscribe(
      (responseData: any) => {
        this.itemLists = responseData.data;
      },
      (error) => {

      }
    );
  }

  editForm(data) {
    this.propertyName = data.itemName;
    this.storeId = data._id;
    this.isEdit = true;
  }


  editProperty() {
    if (this.storeId && this.propertyName) {
      const payloadData = {
        itemName: this.propertyName,
        id: this.storeId
      };

      this.masterService.editMasterPurchaseItem(payloadData).subscribe(
        (responseData) => {
          this.propertyName = '';
          this.cancelEdit();
          this.viewList();
        },
        (error) => {

        }
      );
    }
  }

  deleteProperty(id) {
    if (id) {
      const payloadData = {
        id: id
      };

      this.masterService.deleteMasterPurchaseItem(payloadData).subscribe(
        (responseData) => {
          this.propertyName = '';
          this.viewList();
        },
        (error) => {

        }
      );
    }
  }

  cancelEdit() {
    this.isEdit = false;
    this.propertyName = '';
    this.storeId = '';
  }
}
