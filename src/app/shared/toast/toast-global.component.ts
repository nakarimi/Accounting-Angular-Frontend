import { Component } from '@angular/core';
import { GlobalVariable } from '../global-constants';
import { ToastService } from './toast-service';

@Component({ selector: 'ngbd-toast-global', templateUrl: './toast-global.component.html' })
export class NgbdToastGlobal {

  // GlobalVariable.siteTitle = 'asdfk';
  toastMsg = GlobalVariable.siteTitle;
  constructor(public toastService: ToastService) { }
  
  showStandard(msg) {
    // if (this.toastMsg) {
    this.toastService.show(this.toastMsg, { classname: 'bg-info text-light', delay: 2500 });
    // }
  }

  showSuccess(msg) {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 2500 });
  }

  showDanger(dangerTpl, msg) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 2500 });
  }
}