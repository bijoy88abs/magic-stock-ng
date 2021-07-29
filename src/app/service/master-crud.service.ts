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

  editMasterPurchaseItem(payloadData) {
    return this.http.post(this.configUrl + 'masterPurchaseItemEdit', payloadData);
  }

  deleteMasterPurchaseItem(payloadData) {
    return this.http.post(this.configUrl + 'masterPurchaseItemDelete', payloadData);
  }


  /************** */
  saveMasterPurchaseRawItem(data) {
    return this.http.post(this.configUrl + 'masterPurchaseRawItemPost', { itemName: data });
  }

  viewMasterPurchaseRawItem() {
    return this.http.get(this.configUrl + 'masterPurchaseRawItemView');
  }

  editMasterPurchaseRawItem(payloadData) {
    return this.http.post(this.configUrl + 'masterPurchaseRawItemEdit', payloadData);
  }

  deleteMasterPurchaseRawItem(payloadData) {
    return this.http.post(this.configUrl + 'masterPurchaseRawItemDelete', payloadData);
  }


  /************** */
  saveMasterPurchaseMachineItem(data) {
    return this.http.post(this.configUrl + 'masterPurchaseMachineItemPost', { itemName: data });
  }

  viewMasterPurchaseMachineItem() {
    return this.http.get(this.configUrl + 'masterPurchaseMachineItemView');
  }

  editMasterPurchaseMachineItem(payloadData) {
    return this.http.post(this.configUrl + 'masterPurchaseMachineItemEdit', payloadData);
  }

  deleteMasterPurchaseMachineItem(payloadData) {
    return this.http.post(this.configUrl + 'masterPurchaseMachineItemDelete', payloadData);
  }

  
  /************** */
  saveMasterSize(data) {
    return this.http.post(this.configUrl + 'masterSizePost', { sizeName: data });
  }

  viewMasterSize() {
    return this.http.get(this.configUrl + 'masterSizeView');
  }

  editMasterSize(payloadData) {
    return this.http.post(this.configUrl + 'masterSizeEdit', payloadData);
  }

  deleteMasterSize(payloadData) {
    return this.http.post(this.configUrl + 'masterSizeDelete', payloadData);
  }

  
  /************** */
  saveMasterColor(data) {
    return this.http.post(this.configUrl + 'masterColorPost', { colorName: data });
  }

  viewMasterColor() {
    return this.http.get(this.configUrl + 'masterColorView');
  }

  editMasterColor(payloadData) {
    return this.http.post(this.configUrl + 'masterColorEdit', payloadData);
  }

  deleteMasterColor(payloadData) {
    return this.http.post(this.configUrl + 'masterColorDelete', payloadData);
  }
}
