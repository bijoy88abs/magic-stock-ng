import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseCrudService {

  configUrl = 'https://magic-stock.herokuapp.com/purchase-stock/';
  constructor(private http: HttpClient) { }

  savePurchase(data) {
    return this.http.post(this.configUrl + 'purchaseItemPost', { itemName: data });
  }

  viewPurchase() {
    return this.http.get(this.configUrl + 'purchaseItemView');
  }

  editPurchase(payloadData) {
    return this.http.post(this.configUrl + 'purchaseItemEdit', payloadData);
  }

  deletePurchase(payloadData) {
    return this.http.post(this.configUrl + 'purchaseItemDelete', payloadData);
  }

}
