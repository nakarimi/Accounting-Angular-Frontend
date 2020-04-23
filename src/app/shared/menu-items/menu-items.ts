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
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
