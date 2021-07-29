import { Component, OnInit } from '@angular/core';
import { MasterCrudService } from 'src/app/service/master-crud.service';

@Component({
  selector: 'app-size-master',
  templateUrl: './size-master.component.html',
  styleUrls: ['./size-master.component.scss']
})
export class SizeMasterComponent implements OnInit {

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
      this.masterService.saveMasterSize(this.propertyName).subscribe(
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
    this.masterService.viewMasterSize().subscribe(
      (responseData: any) => {
        this.itemLists = responseData.data;
      },
      (error) => {

      }
    );
  }

  editForm(data) {
    this.propertyName = data.sizeName;
    this.storeId = data._id;
    this.isEdit = true;
  }


  editProperty() {
    if (this.storeId && this.propertyName) {
      const payloadData = {
        sizeName: this.propertyName,
        id: this.storeId
      };

      this.masterService.editMasterSize(payloadData).subscribe(
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

      this.masterService.deleteMasterSize(payloadData).subscribe(
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
