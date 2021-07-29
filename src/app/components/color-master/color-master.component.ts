import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';

@Component({
  selector: 'app-color-master',
  templateUrl: './color-master.component.html',
  styleUrls: ['./color-master.component.scss']
})
export class ColorMasterComponent implements OnInit {

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
      this.masterService.saveMasterColor(this.propertyName).subscribe(
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
    this.masterService.viewMasterColor().subscribe(
      (responseData: any) => {
        this.itemLists = responseData.data;
      },
      (error) => {

      }
    );
  }

  editForm(data) {
    this.propertyName = data.colorName;
    this.storeId = data._id;
    this.isEdit = true;
  }


  editProperty() {
    if (this.storeId && this.propertyName) {
      const payloadData = {
        colorName: this.propertyName,
        id: this.storeId
      };

      this.masterService.editMasterColor(payloadData).subscribe(
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

      this.masterService.deleteMasterColor(payloadData).subscribe(
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
