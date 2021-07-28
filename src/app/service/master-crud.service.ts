import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterCrudService {
  configUrl = 'https://magic-stock.herokuapp.com/master-stock/';
  constructor(private http: HttpClient) { }

  saveMasterPurchaseItem(data) {
    return this.http.post(this.configUrl + 'masterPurchaseItemPost', { itemName: data });
  }

  viewMasterPurchaseItem() {
    return this.http.get(this.configUrl + 'masterPurchaseItemView');
  }

}
