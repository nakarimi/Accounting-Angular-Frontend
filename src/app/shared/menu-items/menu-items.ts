import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: '' },
  { state: 'account', name: 'Account', type: 'link', icon: '' },
  { state: 'customer', name: 'Customer', type: 'link', icon: '' },
  { state: 'vendor', name: 'Vendor', type: 'link', icon: '' },
  { state: 'invoice', name: 'Invoice', type: 'link', icon: '' },
  { state: 'bill', name: 'Bill', type: 'link', icon: '' },
  { state: 'payment', name: 'Payment', type: 'link', icon: '' },
  { state: 'trans', name: 'Transaction', type: 'link', icon: '' },
  { state: 'user', name: 'User', type: 'link', icon: '' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
