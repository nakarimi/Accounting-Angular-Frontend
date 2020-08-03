(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-invoice-invoice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/invoice/cu-dialog.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/invoice/cu-dialog.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content  class=\"mat-typography\">\r\n<h2 mat-dialog-title>Add Invoice</h2>\r\n<mat-horizontal-stepper [linear]=\"false\" #stepper>\r\n  <mat-step [stepControl]=\"invoiceFC\">\r\n    <ng-template matStepLabel>Invoice</ng-template>\r\n      <form class=\"example-container\" [formGroup]=\"invoiceFC\" enctype=\"multipart/form-data\"\r\n        (ngSubmit)=\"invOperation(editData)\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <mat-form-field>\r\n              <mat-label>Customer</mat-label>\r\n              <mat-select name=\"customer\" formControlName=\"customer\">\r\n                <span *ngFor=\"let c of customer\">\r\n                  <mat-option [value]=\"c.id\" *ngIf=\"c.status\">\r\n                    {{c.label}}\r\n                  </mat-option>\r\n                </span>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Currency</mat-label>\r\n              <mat-select name=\"currency\" formControlName=\"currency\">\r\n                <mat-option *ngFor=\"let i of ['USD', 'AF']\" [value]=\"i\">\r\n                  {{i}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Due Date</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"date\" formControlName=\"due_date\" >\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <mat-form-field>\r\n              <mat-label>Invoice Number</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"inv_number\" [value]=\"invNumber\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Total Price</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" disabled formControlName=\"total_price\" [value]=\"invTotalPrice\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Balance</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" disabled formControlName=\"balance\" [value]=\"invBalance\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <span *ngIf=\"type == 'e'\">\r\n          <button type=\"submit\" mat-button \r\n            class=\"text-white\"\r\n            [ngClass]=\"{'bg-danger': invoiceFC.invalid, 'bg-info': invoiceFC.valid}\" \r\n            [disabled]=\"invoiceFC.invalid\" >Update</button>\r\n        </span>\r\n\r\n        <span *ngIf=\"type == 'a'\">\r\n          <h5 *ngIf=\"invoice\">Invoice Created, add items.</h5>\r\n          <button *ngIf=\"!invoice\" type=\"submit\" mat-button\r\n            class=\"text-white\"\r\n            [ngClass]=\"{'bg-danger': invoiceFC.invalid, 'bg-info': invoiceFC.valid}\" \r\n            [disabled]=\"invoiceFC.invalid\" >Create</button>\r\n        </span>\r\n      </form>\r\n        <div align=\"end\">\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"itemsFC\">\r\n        <ng-template matStepLabel>Items</ng-template>\r\n        <h5 *ngIf=\"!invoice\">The Invoice is required, create it first.</h5>\r\n        <div class=\"items-inv\">\r\n\r\n          <div>\r\n            <form *ngIf=\"invoice\" [formGroup]=\"itemsFC\" (ngSubmit)=\"createItem()\">\r\n            <mat-form-field>\r\n              <mat-label>Label</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Price</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"price\" (change)=\"checkTotal()\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Quantity</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"quantity\" (change)=\"checkTotal()\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Total</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"total\" [value]=\"+total\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Descrtiption</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"textarea\" formControlName=\"desc\">\r\n            </mat-form-field>\r\n              <button type=\"submit\" mat-button color=\"primary\">Add <mat-icon>add</mat-icon></button>\r\n            </form>\r\n            <div *ngIf=\"errors != null\">\r\n              Errors:\r\n              <ul>\r\n                <li *ngFor=\"let err of errors | keyvalue\">{{readableInvItmTC[err.key]}}: {{ err.value }}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <table *ngIf=\"invoiceItems.length > 0\" mat-table [dataSource]=\"itemSource\" class=\"mat-elevation-z1 items\">\r\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of invItmTC\">\r\n                <th mat-header-cell *matHeaderCellDef> {{readableInvItmTC[column]}} </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <span class=\"cus-cursor-pointer\" *ngIf=\"column != 'id'\" >{{ element[column] }}</span>\r\n                    <a *ngIf=\"column == 'id'\" class=\"text-danger\" (click)=\"removeItem(element)\">X</a>\r\n                </td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"invItmTC\"></tr>\r\n              <tr mat-row *matRowDef=\"let element; columns: invItmTC;\" class=\"example-element-row\">\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"steps-action\" align=\"end\">\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Preview</ng-template>\r\n    <div *ngIf=\"invoice\">\r\n      <ng-template matStepLabel>Invoice</ng-template>\r\n      <div class=\"preview-inv\">\r\n        <div>\r\n\r\n          <div>\r\n            <strong>Invoice Number</strong>\r\n            <p>{{invoice.inv_number}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Customer</strong>\r\n            <p>{{invoice.customer}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Currency</strong>\r\n            <p>{{invoice.currency}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Total Price</strong>\r\n            <p>{{invTotalPrice}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Balance</strong>\r\n            <p>{{invBalance}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Due Date</strong>\r\n            <p>{{invoice.due_date}}</p>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <table *ngIf=\"invoiceItems.length > 0\" mat-table [dataSource]=\"invoiceItems\" class=\"mat-elevation-z1 items\">\r\n            <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of invItmTC\">\r\n              <th mat-header-cell *matHeaderCellDef> {{readableInvItmTC[column]}} </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"invItmTC\"></tr>\r\n            <tr mat-row *matRowDef=\"let element; columns: invItmTC;\" class=\"example-element-row\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"steps-action\" align=\"end\">\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button *ngIf=\"invoiceItems.length > 0\" mat-button (click)=\"finishInvoice(invoice)\">Complete</button>\r\n      </div>\r\n    </div>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n  </mat-dialog-actions>\r\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/invoice/invoice.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/invoice/invoice.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"csmr-table-actions table-actions\">\n  <button class=\"m-1 text-white bg-success\"\n    mat-raised-button mat-button (click)=\"openDialog(null)\">Add <mat-icon>add</mat-icon></button>\n</div>\n<table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\" \n  matSort matSortActive=\"id\"\n  matSortDisableClear\n  matSortDirection=\"desc\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ readableColumns[column] }} </th>\n    <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"column != 'id'\">\n      <span *ngIf=\"column != 'due_date'\">\n        <span *ngIf=\"column == 'status'\">\n          <span class=\"material-icons text-success\" *ngIf=\"element[column]\">\n            done\n          </span>\n          <span class=\"material-icons text-danger\" *ngIf=\"!element[column]\">\n            clear\n          </span>\n        </span>\n        \n        <span *ngIf=\"column != 'status'\">\n          <span *ngIf=\"column == 'customer'\">{{ findCsutomer(element[column]) }}</span>\n          <span *ngIf=\"column != 'customer'\">\n            {{element[column]}}\n          </span>\n        </span>\n\n      </span>\n      <span *ngIf=\"column == 'due_date'\">{{element[column] | date: 'MMM d, y'}}</span>\n    </span>\n      <button class=\"m-1 text-white bg-info\" *ngIf=\"column == 'id'\" mat-raised-button mat-button (click)=\"openDialog(element, 'e')\" align=\"end\" tabindex=\"-1\">Edit <mat-icon>edit</mat-icon></button>\n      <button class=\"m-1 text-white bg-primary\" *ngIf=\"column == 'id'\" mat-raised-button mat-button\n        (click)=\"expandedElement = expandedElement === element ? null : loadItems(element)\" align=\"end\" tabindex=\"-1\">Items</button>\n      <button class=\"m-1 text-white bg-danger\" *ngIf=\"column == 'id'\" mat-raised-button mat-button (click)=\"delete(element)\" align=\"end\" tabindex=\"-1\">Delete <mat-icon>delete</mat-icon></button>\n    </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n      <div class=\"element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"element-description\">\n          <div *ngIf=\"loading\">Loading....</div>\n          \n          <div *ngIf=\"!loading\">\n            <div *ngIf=\"invItems.length == 0\">\n              <p style=\"color: sandybrown;\">\n                <strong>Warning!</strong> Item not found.\n              </p>\n            </div>\n            <table *ngIf=\"invItems.length > 0\" mat-table [dataSource]=\"invItems\" multiTemplateDataRows class=\"mat-elevation-z8\" matSort matSortActive=\"id\"\n              matSortDisableClear matSortDirection=\"desc\">\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedItemColumns\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ readableItemColumns[column] }} </th>\n                <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"column != 'id'\">\n                    <span *ngIf=\"column != 'created_at'\">{{element[column]}}</span>\n                    <span *ngIf=\"column == 'created_at'\">{{element[column] | date: 'MMM d, y'}}</span>\n                  </span>\n                </td>\n              </ng-container>\n              \n              <tr mat-header-row *matHeaderRowDef=\"displayedItemColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedItemColumns;\"></tr>\n              <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n            </table>\n          </div>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"element-row\"\n    [class.expanded-row]=\"expandedElement === element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"detail-row\"></tr>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"10\"></mat-paginator>\n</table>");

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, .element-description {\r\n  width: 100%;\r\n}\r\n\r\ntr.detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.element-row:not(.expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.element-row:not(.expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.element-detail {\r\n  min-height: 100px;\r\n}\r\n\r\n.mat-elevation-z1.items{\r\n  width: 100%;\r\n}\r\n\r\n.preview-inv > div:nth-child(1){\r\n  width: 30%;\r\n  float: left;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n.preview-inv > div:nth-child(2){\r\n  width: 70%;\r\n  float: right;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n.items-inv > div:nth-child(1){\r\n  width: 30%;\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n\r\n.items-inv > div:nth-child(2){\r\n  width: 70%;\r\n  padding: 10px;\r\n  float: right;\r\n}\r\n\r\n.steps-action\r\n{\r\n  width: 100%;\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhOztBQUVmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhOztBQUVmOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCAuZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG50ci5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmVsZW1lbnQtc3ltYm9sIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRldGFpbCB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuLm1hdC1lbGV2YXRpb24tejEuaXRlbXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByZXZpZXctaW52ID4gZGl2Om50aC1jaGlsZCgxKXtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcblxyXG4ucHJldmlldy1pbnYgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcbi5pdGVtcy1pbnYgPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLml0ZW1zLWludiA+IGRpdjpudGgtY2hpbGQoMil7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnN0ZXBzLWFjdGlvblxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent, CuDialog, SnakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuDialog", function() { return CuDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakComponent", function() { return SnakComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/toast/toast-service */ "./src/app/shared/toast/toast-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let InvoiceComponent = class InvoiceComponent {
    constructor(apiService, dialog, toast) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.toast = toast;
        this.filterCul = 'all';
        // Define all the variable
        this.displayedColumns = [
            'inv_number',
            'customer',
            'total_price',
            'balance',
            'due_date',
            'status',
            'id'
        ];
        this.filterColumns = [
            'inv_number',
            'customer',
            'total_price',
            'balance',
            'due_date',
        ];
        // Define all the variable
        this.readableColumns = {
            inv_number: 'Invoice Number',
            customer: 'Customer',
            total_price: 'Total Price',
            balance: 'Balance',
            due_date: 'Due Date',
            status: 'Status',
            id: 'Action'
        };
        this.displayedItemColumns = [
            'label',
            'price',
            'quantity',
            'total',
            'created_at',
            'desc',
        ];
        this.readableItemColumns = {
            label: 'Label',
            price: 'Price',
            quantity: 'Quantity',
            total: 'Total',
            created_at: 'Created At',
            desc: 'Description',
        };
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.customers = [];
        this.payments = [];
        // Build the table data source based on table data.
        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.invItems = [];
        this.loading = true;
    }
    ngAfterViewInit() {
        this.loadInvoices();
        this.apiService.loadAll('csmr').subscribe(result => {
            this.customers = result;
        });
    }
    assigning(data) {
        this.invItems = data;
    }
    loadItems(elm) {
        this.loading = true;
        this.invItems = [];
        this.apiService.retrive('itm', elm.id).subscribe(result => {
            this.assigning(result);
            this.loading = false;
        });
        return elm;
    }
    // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    loadInvoices() {
        this.apiService.loadAll('inv').subscribe((result) => {
            this.dataSource.data = result;
            this.dataSource.sort = this.msort;
        }, error => {
            console.log(error);
        });
    }
    openDialog(data, type = 'a') {
        const dialogRef = this.dialog.open(CuDialog, {
            data: {
                mainData: data,
                customer: this.customers,
                type: type
            },
        });
        if (data) {
            this.apiService.loadAll('pay').subscribe(result => {
                this.payments = result;
                if (this.payments.filter(x => x.ref_inv == data.id).length > 0) {
                    dialogRef.close();
                    this.toast.show("Edit not allowed for this item!\nThis Item has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
                }
            });
        }
        dialogRef.afterClosed().subscribe(result => {
            // Do nothing on cancel and if it return value update table.
            if (result) {
                if (type == 'a') {
                    this.addToTable(result);
                }
                else {
                    this.updateTable(data, result);
                }
            }
        });
    }
    // Delete Item From Server.
    delete(row) {
        this.apiService.loadAll('pay').subscribe((result) => {
            this.payments = result;
            if (result.filter(x => x.ref_inv == row.id).length > 0) {
                this.toast.show("Delete not allowed for this item!\nThis Item has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
            }
            else {
                if (confirm('Are sure to delete?')) {
                    this.apiService.delete(row.id, 'inv').subscribe(result => {
                        this.deleteUI(row);
                    });
                }
            }
        }, error => {
            console.log(error);
        });
    }
    // Delete Item From UI
    deleteUI(row) {
        this.tableData = this.dataSource.data;
        let index = this.tableData.findIndex(data => data === row);
        this.tableData.splice(index, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.sort = this.msort;
        this.toast.show("Invoice deleted successfully!\nID: " + row.inv_number, { classname: 'bg-success text-light', delay: 5000 });
    }
    addToTable(data) {
        this.tableData = this.dataSource.data;
        this.dataSource.data = this.tableData.push(data);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.sort = this.msort;
    }
    updateTable(oldRow, newRow) {
        this.tableData = this.dataSource.data;
        // Remove the old data from table.
        this.tableData = this.tableData.filter(item => item.id != oldRow.id);
        // Add update row.
        this.tableData.push(newRow);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.sort = this.msort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        if (this.filterCul == 'all') {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }
        else {
            this.dataSource.filterPredicate = function (data, filter) {
                filter = JSON.parse(filter);
                let term = filter[0];
                let key = filter[1];
                return data[key].toString().toLowerCase().includes(term);
            };
            this.dataSource.filter = JSON.stringify([filterValue.trim().toLowerCase(), this.filterCul]);
        }
    }
    filterCulChange(data) {
        this.filterCul = data.value;
    }
    findCsutomer(id) {
        let c = this.customers.filter(x => x.id == id)[0];
        if (c) {
            return c.label;
        }
        else {
            return '';
        }
    }
};
InvoiceComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], InvoiceComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], InvoiceComponent.prototype, "msort", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], InvoiceComponent.prototype, "invoices", void 0);
InvoiceComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-invoice',
        template: __importDefault(__webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/invoice/invoice.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__importDefault(__webpack_require__(/*! ./invoice.component.css */ "./src/app/components/invoice/invoice.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], InvoiceComponent);

let CuDialog = class CuDialog {
    constructor(apiService, dialogRef, dData, _formBuilder, _snackBar) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.dData = dData;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.invoiceFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            inv_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            customer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            total_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.entity = this.dData;
        this.customer = this.entity.customer;
        this.type = this.entity.type;
        this.isPreview = false;
        this.isLinear = true;
        this.itemsFC = this._formBuilder.group({
            label: ['',],
            price: ['',],
            quantity: ['',],
            total: ['',],
            desc: ['',],
        });
        this.invoice = this.entity.mainData;
        this.invNumber = '';
        this.invoiceItems = [];
        this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceItems);
        this.invItmTC = ['label', 'price', 'quantity', 'total', 'desc', 'id'];
        this.readableInvItmTC = {
            label: 'Label',
            price: 'Price',
            quantity: 'Quantity',
            total: 'Total',
            desc: 'Description',
        };
        this.invTotalPrice = 0;
        this.invBalance = 0;
        this.loading = true;
    }
    ngOnInit() {
        // Assign Dialog data to new variable.
        // Because it return error when trying to get data.
        if (this.entity.mainData) {
            this.editData = this.entity.mainData;
            this.loadItems(this.editData);
            this.invNumber = this.editData.inv_number;
            this.invoiceFC.setValue({
                inv_number: this.editData.inv_number,
                customer: this.editData.customer,
                currency: this.editData.currency,
                total_price: this.editData.total_price,
                balance: this.editData.balance,
                due_date: this.editData.due_date,
                status: this.editData.status,
            });
            this.invoiceFC.controls['inv_number'].disable();
            this.invoiceFC.controls['total_price'].disable();
            this.invoiceFC.controls['balance'].disable();
        }
        else {
            this.getLastInvNum();
        }
    }
    checkTotal() {
        this.itemsFC.value.total = this.total = +Number(this.itemsFC.value.price * this.itemsFC.value.quantity);
    }
    assigning(data) {
        this.invoiceItems = data;
        this.calTotal();
        this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceItems);
    }
    calTotal() {
        let count = 0;
        this.invoiceItems.forEach(element => {
            count = +Number(count) + +Number(element.total);
        });
        this.invTotalPrice = count;
        this.invBalance = count;
    }
    loadItems(elm) {
        this.loading = true;
        this.invoiceItems = [];
        this.apiService.retrive('itm', elm.id).subscribe(result => {
            this.assigning(result);
            this.loading = false;
        });
        return elm;
    }
    invOperation(data) {
        this.invoiceFC.value.inv_number = this.invNumber;
        if (data) {
            console.log('update');
            this.apiService.update(data.id, this.invoiceFC.value, 'inv').subscribe((result) => {
                if (result.error) {
                    console.log(result.error);
                }
                else {
                    this.dialogRef.close(result);
                }
            });
        }
        else {
            this.apiService.create(this.invoiceFC.value, 'inv').subscribe((result) => {
                if (result.error) {
                    console.log(result.error);
                }
                else {
                    this.invoice = result;
                }
            });
        }
    }
    getLastInvNum() {
        this.apiService.loadAll('last_inv').subscribe((result) => {
            if (result.invoice) {
                this.invNumber = 'Invoice-' + (result.invoice + 1);
            }
            else {
                this.invNumber = 'Invoice-' + 1;
            }
            this.invoiceFC.controls['inv_number'].disable();
            this.invoiceFC.controls['total_price'].disable();
            this.invoiceFC.controls['balance'].disable();
        });
    }
    createItem() {
        this.errors = [];
        this.itemsFC.value.invoice = this.invoice.id;
        this.apiService.create(this.itemsFC.value, 'itm').subscribe((result) => {
            if (result.error) {
                this.errors = result.error;
            }
            else {
                this.invoiceItems.push(result);
                this.calTotal();
                this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceItems);
                this.itemsFC.reset();
            }
            console.log(this.errors);
        });
    }
    removeItem(data) {
        if (confirm('Are sure to delete?')) {
            this.apiService.delete(data.id, 'itm').subscribe(result => {
                this.invoiceItems = this.invoiceItems.filter(item => item !== data);
                this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.invoiceItems);
                this._snackBar.openFromComponent(SnakComponent, {
                    duration: 2000,
                });
            });
        }
    }
    finishInvoice(inv) {
        this.calTotal();
        this.invoiceFC.value.total_price = this.invTotalPrice;
        this.invoiceFC.value.balance = this.invTotalPrice;
        this.invoiceFC.value.status = 1;
        this.invOperation(inv);
    }
};
CuDialog.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
CuDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'cu-dialog',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cu-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/invoice/cu-dialog.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./invoice.component.css */ "./src/app/components/invoice/invoice.component.css")).default]
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], CuDialog);

let SnakComponent = class SnakComponent {
};
SnakComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'snack-bar-component-login',
        template: '<span>Item Deleted Successfully!</span>',
        styles: ["\n    span{\n      style: green;\n    }"]
    })
], SnakComponent);



/***/ }),

/***/ "./src/app/components/invoice/invoice.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/invoice/invoice.module.ts ***!
  \******************************************************/
/*! exports provided: InvoiceRoutes, InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutes", function() { return InvoiceRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







const InvoiceRoutes = [{
        path: '',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"]
    }];
let InvoiceModule = class InvoiceModule {
};
InvoiceModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
            _invoice_component__WEBPACK_IMPORTED_MODULE_3__["CuDialog"],
            _invoice_component__WEBPACK_IMPORTED_MODULE_3__["SnakComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(InvoiceRoutes)
        ],
        entryComponents: [
            _invoice_component__WEBPACK_IMPORTED_MODULE_3__["CuDialog"],
            _invoice_component__WEBPACK_IMPORTED_MODULE_3__["SnakComponent"]
        ],
        providers: [
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { showError: true }
            }
        ]
    })
], InvoiceModule);



/***/ })

}]);
//# sourceMappingURL=components-invoice-invoice-module-es2015.js.map