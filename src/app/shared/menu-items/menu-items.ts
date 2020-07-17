import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  submenu: object
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard', perm: ["ADMIN"] },
  { state: 'invoice', name: 'Invoice', type: 'link', icon: 'description', perm: ["ADMIN", "EDITOR"] },
  { state: 'bill', name: 'Bill', type: 'link', icon: 'content_paste', perm: ["ADMIN", "EDITOR"] },
  { state: 'payment', name: 'Payment', type: 'link', icon: 'attach_money', perm: ["ADMIN", "EDITOR"] },
  { state: 'customer', name: 'Customer', type: 'link', icon: 'people_alt', perm: ["ADMIN", "EDITOR"] },
  { state: 'vendor', name: 'Vendor', type: 'link', icon: 'business', perm: ["ADMIN", "EDITOR"] },
  { state: 'report', name: 'Report', type: 'link', icon: 'show_chart', perm: ["ADMIN"] },
  { state: 'trans', name: 'Transaction', type: 'link', icon: 'request_quote', perm: ["ADMIN"] },
  { state: 'account', name: 'Bank Account', type: 'link', icon: 'account_balance', perm: ["ADMIN"] },
];

@Injectable()
export class MenuItems {
  getMenuitem(): any[] {
    return MENUITEMS;
  }
}
