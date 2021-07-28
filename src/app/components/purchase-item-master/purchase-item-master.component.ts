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

  deleteProperty(id) {

  }

}
