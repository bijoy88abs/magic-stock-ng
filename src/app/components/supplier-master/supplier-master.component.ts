import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.scss']
})
export class SupplierMasterComponent implements OnInit {

  supplierName: string;
  supplierContacts: string;
  supplierAddress: string;
  itemLists = null;
  storeId: any;
  isEdit = false;

  constructor(private masterService: MasterCrudService) { }

  ngOnInit() {
    this.viewList();
  }

  save() {
    if (this.supplierName && this.supplierContacts && this.supplierAddress) {
      const payloadData = {
        supplierName: this.supplierName,
        supplierContacts: this.supplierContacts,
        supplierAddress: this.supplierAddress
      };
      this.masterService.saveMasterSupplier(payloadData).subscribe(
        (responseData) => {
          this.supplierName = '';
          this.supplierContacts = '';
          this.supplierAddress = '';
          this.viewList();
        },
        (error) => { }
      );
    }
  }

  viewList() {
    this.masterService.viewMasterSupplier().subscribe(
      (responseData: any) => {
        this.itemLists = responseData.data;
      },
      (error) => { }
    );
  }

  editForm(data) {
    this.supplierName = data.supplierName;
    this.supplierContacts = data.supplierContacts;
    this.supplierAddress = data.supplierAddress;
    this.storeId = data._id;
    this.isEdit = true;
  }


  editProperty() {
    if (this.storeId && this.supplierName && this.supplierContacts && this.supplierAddress) {
      const payloadData = {
        supplierName: this.supplierName,
        supplierContacts: this.supplierContacts,
        supplierAddress: this.supplierAddress,
        id: this.storeId
      };

      this.masterService.editMasterSupplier(payloadData).subscribe(
        (responseData) => {
          this.supplierName = '';
          this.supplierContacts = '';
          this.supplierAddress = '';
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

      this.masterService.deleteMasterSupplier(payloadData).subscribe(
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
    this.supplierName = '';
    this.supplierContacts = '';
    this.supplierAddress = '';
    this.storeId = '';
  }

}
