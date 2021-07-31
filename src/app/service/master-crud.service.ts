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


  /************** */
  saveMasterGst(payloadData) {
    return this.http.post(this.configUrl + 'masterGstPost', payloadData);
  }

  viewMasterGst() {
    return this.http.get(this.configUrl + 'masterGstView');
  }

  editMasterGst(payloadData) {
    return this.http.post(this.configUrl + 'masterGstEdit', payloadData);
  }

  deleteMasterGst(payloadData) {
    return this.http.post(this.configUrl + 'masterGstDelete', payloadData);
  }


  /************** */
  saveMasterHsn(data) {
    return this.http.post(this.configUrl + 'masterHsnPost', { colorName: data });
  }

  viewMasterHsn() {
    return this.http.get(this.configUrl + 'masterHsnView');
  }

  editMasterHsn(payloadData) {
    return this.http.post(this.configUrl + 'masterHsnEdit', payloadData);
  }

  deleteMasterHsn(payloadData) {
    return this.http.post(this.configUrl + 'masterHsnDelete', payloadData);
  }

  /************** */
  saveMasterMaterial(data) {
    return this.http.post(this.configUrl + 'masterMaterialPost', { materialName: data });
  }

  viewMasterMaterial() {
    return this.http.get(this.configUrl + 'masterMaterialView');
  }

  editMasterMaterial(payloadData) {
    return this.http.post(this.configUrl + 'masterMaterialEdit', payloadData);
  }

  deleteMasterMaterial(payloadData) {
    return this.http.post(this.configUrl + 'masterMaterialDelete', payloadData);
  }


  /************** */
  saveMasterSupplier(payloadData) {
    return this.http.post(this.configUrl + 'masterSupplierPost', payloadData);
  }

  viewMasterSupplier() {
    return this.http.get(this.configUrl + 'masterSupplierView');
  }

  editMasterSupplier(payloadData) {
    return this.http.post(this.configUrl + 'masterSupplierEdit', payloadData);
  }

  deleteMasterSupplier(payloadData) {
    return this.http.post(this.configUrl + 'masterSupplierDelete', payloadData);
  }


  /************** */
  loadMasterData() {    
    return this.http.get(this.configUrl + 'masterCollectionList');
  }

}
