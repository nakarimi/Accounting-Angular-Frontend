import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  submenu: object
}

const MENUITEMS = [
  {
    state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard', submenu: [
      { state: 'subdashboard', name: 'Sub Dashboard', type: 'link', icon: '', },
      { state: 'subdashboard1', name: 'Sub Dashboard2', type: 'link', icon: '', },
      { state: 'subdashboard13', name: 'Sub Dashboard43', type: 'link', icon: '', },
      { state: 'subdashboard2', name: 'Sub Dashboard6', type: 'link', icon: '', },
      {state: 'subdashboard5', name: 'Sub Dashboard8', type: 'link', icon: '',},
    ]
  },
  { state: 'invoice', name: 'Invoice', type: 'link', icon: 'description' },
  { state: 'bill', name: 'Bill', type: 'link', icon: 'content_paste' },
  { state: 'payment', name: 'Payment', type: 'link', icon: 'attach_money' },
  { state: 'customer', name: 'Customer', type: 'link', icon: 'people_alt' },
  { state: 'vendor', name: 'Vendor', type: 'link', icon: 'business' },
  { state: 'trans', name: 'Transaction', type: 'link', icon: 'request_quote' },
  { state: 'account', name: 'Bank Account', type: 'link', icon: 'account_balance' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): any[] {
    return MENUITEMS;
  }
}
