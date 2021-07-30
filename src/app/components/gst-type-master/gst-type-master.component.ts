import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';
@Component({
  selector: 'app-gst-type-master',
  templateUrl: './gst-type-master.component.html',
  styleUrls: ['./gst-type-master.component.scss']
})
export class GstTypeMasterComponent implements OnInit {

  propertyType: string;
  propertyValue: string;
  itemLists = null;
  storeId: any;
  isEdit = false;

  constructor(private masterService: MasterCrudService) { }

  ngOnInit() {
    this.viewList();
  }

  save() {
    if (this.propertyType !== '' && this.propertyValue !== '') {
      const payloadData = {
        gstType: this.propertyType,
        gstValue: this.propertyValue.toString()
      };
      this.masterService.saveMasterGst(payloadData).subscribe(
        (responseData) => {
          this.propertyType = '';
          this.propertyValue = '';
          this.viewList();
        },
        (error) => { }
      );
    }
  }

  viewList() {
    this.masterService.viewMasterGst().subscribe(
      (responseData: any) => {
        this.itemLists = responseData.data;
      },
      (error) => { }
    );
  }

  editForm(data) {
    this.propertyType = data.gstType;
    this.propertyValue = data.gstValue;
    this.storeId = data._id;
    this.isEdit = true;
  }


  editProperty() {
    if (this.storeId && this.propertyType && this.propertyValue) {
      const payloadData = {
        gstType: this.propertyType,
        gstValue: this.propertyValue,
        id: this.storeId
      };

      this.masterService.editMasterGst(payloadData).subscribe(
        (responseData) => {
          this.propertyType = '';
          this.propertyValue = '';
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

      this.masterService.deleteMasterGst(payloadData).subscribe(
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
    this.propertyType = '';
    this.propertyValue = '';
    this.storeId = '';
  }
}
