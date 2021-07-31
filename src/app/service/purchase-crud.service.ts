import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseCrudService {

  configUrl = 'https://magic-stock.herokuapp.com/purchase-stock/';
  constructor(private http: HttpClient) { }

  savePurchase(payloadData) {
    return this.http.post(this.configUrl + 'purchaseItemPost', payloadData);
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


  /********************* */
  savePurchaseRaw(payloadData) {
    return this.http.post(this.configUrl + 'purchaseRawPost', payloadData);
  }

  viewPurchaseRaw() {
    return this.http.get(this.configUrl + 'purchaseRawView');
  }

  editPurchaseRaw(payloadData) {
    return this.http.post(this.configUrl + 'purchaseRawEdit', payloadData);
  }

  deletePurchaseRaw(payloadData) {
    return this.http.post(this.configUrl + 'purchaseRawDelete', payloadData);
  }

  /********************* */
  savePurchaseMachine(payloadData) {
    return this.http.post(this.configUrl + 'purchaseMachinePost', payloadData);
  }

  viewPurchaseMachine() {
    return this.http.get(this.configUrl + 'purchaseMachineView');
  }

  editPurchaseMachine(payloadData) {
    return this.http.post(this.configUrl + 'purchaseMachineEdit', payloadData);
  }

  deletePurchaseMachine(payloadData) {
    return this.http.post(this.configUrl + 'purchaseMachineDelete', payloadData);
  }

}
