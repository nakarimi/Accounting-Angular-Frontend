(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-bill-bill-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill/bill.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill/bill.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"csmr-table-actions table-actions\">\n  <button class=\"m-1 text-white bg-success\" mat-raised-button mat-button (click)=\"openDialog(null)\">Add <mat-icon>add</mat-icon></button>\n</div>\n<table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\" \n  matSort matSortActive=\"id\"\n  matSortDisableClear\n  matSortDirection=\"desc\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ readableColumns[column] }} </th>\n    <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"column != 'id'\">\n      <span *ngIf=\"column != 'due_date'\">\n        <span *ngIf=\"column == 'status'\">\n          <span class=\"material-icons text-success\" *ngIf=\"element[column]\">\n            done\n          </span>\n          <span class=\"material-icons text-danger\" *ngIf=\"!element[column]\">\n            clear\n          </span>\n        </span>\n        <span *ngIf=\"column != 'status'\">\n          <span *ngIf=\"column == 'vendor'\">{{ findVendor(element[column]).label }}</span>\n          <span *ngIf=\"column != 'vendor'\">\n            {{element[column]}}\n          </span>\n\n        </span>\n        \n      </span>\n      <span *ngIf=\"column == 'due_date'\">{{element[column] | date: 'MMM d, y'}}</span>\n    </span>\n    <button class=\"m-1 text-white bg-info\" *ngIf=\"column == 'id'\" mat-raised-button mat-button (click)=\"openDialog(element, 'e')\" align=\"end\" tabindex=\"-1\">Edit <mat-icon>edit</mat-icon></button>\n    <button class=\"m-1 text-white bg-primary\" *ngIf=\"column == 'id'\" mat-raised-button mat-button (click)=\"expandedElement = expandedElement === element ? null : loadItems(element)\" align=\"end\" tabindex=\"-1\">Items</button>\n    <button class=\"m-1 text-white bg-danger\" *ngIf=\"column == 'id'\" mat-raised-button mat-button (click)=\"delete(element)\" align=\"end\" tabindex=\"-1\">Delete <mat-icon>delete</mat-icon></button>\n      \n    </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n      <div class=\"element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"element-description\">\n          <div *ngIf=\"loading\">Loading....</div>\n          \n          <div *ngIf=\"!loading\">\n            <div *ngIf=\"bilItems.length == 0\">\n              <p style=\"color: sandybrown;\">\n                <strong>Warning!</strong> Item not found.\n              </p>\n            </div>\n            <table *ngIf=\"bilItems.length > 0\" mat-table [dataSource]=\"bilItems\" multiTemplateDataRows class=\"mat-elevation-z8\" matSort matSortActive=\"id\"\n              matSortDisableClear matSortDirection=\"desc\">\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedItemColumns\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ readableItemColumns[column] }} </th>\n                <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"column != 'id'\">\n                    <span *ngIf=\"column != 'created_at'\">{{element[column]}}</span>\n                    <span *ngIf=\"column == 'created_at'\">{{element[column] | date: 'MMM d, y'}}</span>\n                  </span>\n                </td>\n              </ng-container>\n              \n              <tr mat-header-row *matHeaderRowDef=\"displayedItemColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedItemColumns;\"></tr>\n              <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n            </table>\n          </div>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"element-row\"\n    [class.expanded-row]=\"expandedElement === element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"detail-row\"></tr>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"10\"></mat-paginator>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill/cu-dialog.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill/cu-dialog.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content  class=\"mat-typography\">\r\n<h2 mat-dialog-title>Add Bill</h2>\r\n<mat-horizontal-stepper [linear]=\"false\" #stepper>\r\n  <mat-step [stepControl]=\"billFC\">\r\n    <ng-template matStepLabel>Bill</ng-template>\r\n      <form class=\"example-container\" [formGroup]=\"billFC\" enctype=\"multipart/form-data\"\r\n        (ngSubmit)=\"bilOperation(editData)\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-6\">\r\n            <mat-form-field>\r\n              <mat-label>Vendor</mat-label>\r\n              <mat-select name=\"vendor\" formControlName=\"vendor\">\r\n                <span *ngFor=\"let c of vendor\">\r\n                  <mat-option [value]=\"c.id\" *ngIf=\"c.status\">\r\n                    {{c.label}}\r\n                  </mat-option>\r\n                </span>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Currency</mat-label>\r\n              <mat-select name=\"currency\" formControlName=\"currency\">\r\n                <mat-option *ngFor=\"let i of ['USD', 'AF']\" [value]=\"i\">\r\n                  {{i}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Due Date</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"date\" formControlName=\"due_date\" >\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <mat-form-field>\r\n              <mat-label>Bill Number</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"bill_number\" [value]=\"bilNumber\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Total Price</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" disabled formControlName=\"total_price\" [value]=\"bilTotalPrice\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Balance</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" disabled formControlName=\"balance\" [value]=\"bilTotalPrice\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <span *ngIf=\"type == 'e'\">\r\n          <button type=\"submit\" mat-button class=\"text-white\"\r\n            [ngClass]=\"{'bg-danger': billFC.invalid, 'bg-info': billFC.valid}\" [disabled]=\"billFC.invalid\" >Update</button>\r\n        </span>\r\n\r\n        <span *ngIf=\"type == 'a'\">\r\n          <h5 *ngIf=\"bill\">Bill Created, add items.</h5>\r\n          <button *ngIf=\"!bill\" type=\"submit\" mat-button class=\"text-white\"\r\n            [ngClass]=\"{'bg-danger': billFC.invalid, 'bg-info': billFC.valid}\" [disabled]=\"billFC.invalid\" >Create</button>\r\n        </span>\r\n      </form>\r\n        <div align=\"end\">\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"itemsFC\">\r\n        <ng-template matStepLabel>Items</ng-template>\r\n        <h5 *ngIf=\"!bill\">The Bill is required, create it first.</h5>\r\n        <div class=\"items-bil\">\r\n\r\n          <div>\r\n            <form *ngIf=\"bill\" [formGroup]=\"itemsFC\" (ngSubmit)=\"createItem()\">\r\n            <mat-form-field>\r\n              <mat-label>Label</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Price</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"price\" (change)=\"checkTotal()\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Quantity</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"quantity\" (change)=\"checkTotal()\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Total</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"total\" [value]=\"total\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-label>Descrtiption</mat-label>\r\n              <input matInput autocomplete=\"off\" type=\"textarea\" formControlName=\"desc\">\r\n            </mat-form-field>\r\n              <button type=\"submit\" mat-button color=\"primary\">Add <mat-icon>add</mat-icon></button>\r\n            </form>\r\n            <div *ngIf=\"errors != null\">\r\n              Errors:\r\n              <ul>\r\n                <li *ngFor=\"let err of errors | keyvalue\">{{readableInvItmTC[err.key]}}: {{ err.value }}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <table *ngIf=\"billItems.length > 0\" mat-table [dataSource]=\"itemSource\" class=\"mat-elevation-z1 items\">\r\n              <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of bilItmTC\">\r\n                <th mat-header-cell *matHeaderCellDef> {{readableInvItmTC[column]}} </th>\r\n                <td mat-cell *matCellDef=\"let element\">\r\n                  <span *ngIf=\"column != 'id'\" >{{ element[column] }}</span>\r\n                  <span *ngIf=\"column == 'id'\" >\r\n                    <a class=\"text-danger cus-cursor-pointer\" (click)=\"removeItem(element)\">X</a>\r\n                  </span>\r\n                </td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"bilItmTC\"></tr>\r\n              <tr mat-row *matRowDef=\"let element; columns: bilItmTC;\" class=\"example-element-row\">\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"steps-action\" align=\"end\">\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n    </mat-step>\r\n  <mat-step>\r\n    <ng-template matStepLabel>Preview</ng-template>\r\n    <div *ngIf=\"bill\">\r\n      <ng-template matStepLabel>Bill</ng-template>\r\n      <div class=\"preview-bil\">\r\n        <div>\r\n\r\n          <div>\r\n            <strong>Bill Number</strong>\r\n            <p>{{bill.bill_number}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Vendor</strong>\r\n            <p>{{bill.vendor}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Currency</strong>\r\n            <p>{{bill.currency}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Total Price</strong>\r\n            <p>{{bilTotalPrice}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Balance</strong>\r\n            <p>{{bilTotalPrice}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Due Date</strong>\r\n            <p>{{bill.due_date}}</p>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <table *ngIf=\"billItems.length > 0\" mat-table [dataSource]=\"itemSource\" class=\"mat-elevation-z1 items\">\r\n            <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of bilItmTC\">\r\n              <th mat-header-cell *matHeaderCellDef> {{readableInvItmTC[column]}} </th>\r\n              <td mat-cell *matCellDef=\"let element\" > {{element[column]}} </td>\r\n            </ng-container>\r\n            <tr mat-header-row *matHeaderRowDef=\"bilItmTC\"></tr>\r\n            <tr mat-row *matRowDef=\"let element; columns: bilItmTC;\" class=\"example-element-row\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"steps-action\" align=\"end\">\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button *ngIf=\"billItems.length > 0\" mat-button (click)=\"finishBill(bill)\">Complete</button>\r\n      </div>\r\n    </div>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n\r\n  <mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n  </mat-dialog-actions>\r\n</mat-dialog-content>");

/***/ }),

/***/ "./src/app/components/bill/bill.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/bill/bill.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table, .element-description {\r\n  width: 100%;\r\n}\r\n\r\ntr.detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.element-row:not(.expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.element-row:not(.expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.element-detail {\r\n  min-height: 100px;\r\n}\r\n\r\n.mat-elevation-z1.items{\r\n  width: 100%;\r\n}\r\n\r\n.preview-bil > div:nth-child(1){\r\n  width: 30%;\r\n  float: left;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n.preview-bil > div:nth-child(2){\r\n  width: 70%;\r\n  float: right;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n.items-bil > div:nth-child(1){\r\n  width: 30%;\r\n  float: left;\r\n  padding: 10px;\r\n}\r\n\r\n.items-bil > div:nth-child(2){\r\n  width: 70%;\r\n  padding: 10px;\r\n  float: right;\r\n}\r\n\r\n.steps-action\r\n{\r\n  width: 100%;\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iaWxsL2JpbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhOztBQUVmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhOztBQUVmOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iaWxsL2JpbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCAuZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZWxlbWVudC1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG50ci5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmVsZW1lbnQtc3ltYm9sIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRldGFpbCB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuLm1hdC1lbGV2YXRpb24tejEuaXRlbXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByZXZpZXctYmlsID4gZGl2Om50aC1jaGlsZCgxKXtcclxuICB3aWR0aDogMzAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcblxyXG4ucHJldmlldy1iaWwgPiBkaXY6bnRoLWNoaWxkKDIpe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG59XHJcbi5pdGVtcy1iaWwgPiBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLml0ZW1zLWJpbCA+IGRpdjpudGgtY2hpbGQoMil7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnN0ZXBzLWFjdGlvblxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/bill/bill.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/bill/bill.component.ts ***!
  \***************************************************/
/*! exports provided: BillComponent, CuDialog, SnakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
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






let BillComponent = class BillComponent {
    constructor(apiService, dialog, toast) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.toast = toast;
        this.filterCul = 'all';
        // Define all the variable
        this.displayedColumns = [
            'bill_number',
            'vendor',
            'total_price',
            'balance',
            'due_date',
            'status',
            'id'
        ];
        this.filterColumns = [
            'bill_number',
            'vendor',
            'total_price',
            'balance',
            'due_date',
        ];
        // Define all the variable
        this.readableColumns = {
            bill_number: 'Bill Number',
            vendor: 'Vendor',
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
        this.vendors = [];
        // Build the table data source based on table data.
        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.bilItems = [];
        this.loading = true;
    }
    ngAfterViewInit() {
        this.loadBills();
        this.apiService.loadAll('vdr').subscribe(result => {
            this.vendors = result;
        });
    }
    assigning(data) {
        this.bilItems = data;
    }
    loadItems(elm) {
        this.loading = true;
        this.bilItems = [];
        this.apiService.retrive('bitm', elm.id).subscribe(result => {
            this.assigning(result);
            this.loading = false;
        });
        return elm;
    }
    // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    loadBills() {
        this.apiService.loadAll('bil').subscribe((result) => {
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
                vendor: this.vendors,
                type: type
            },
        });
        if (data) {
            this.apiService.loadAll('pay').subscribe((result) => {
                if (result.filter(x => x.ref_bill == data.id).length > 0) {
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
            if (result.filter(x => x.ref_bill == row.id).length > 0) {
                this.toast.show("Delete not allowed for this item!\nThis Item has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
            }
            else {
                if (confirm('Are sure to delete?')) {
                    this.apiService.delete(row.id, 'bil').subscribe(result => {
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
        this.toast.show("Bill deleted successfully!\nID: " + row.bill_number, { classname: 'bg-success text-light', delay: 5000 });
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
    findVendor(id) {
        return this.vendors.filter(x => x.id == id)[0];
    }
};
BillComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], BillComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], BillComponent.prototype, "msort", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], BillComponent.prototype, "bills", void 0);
BillComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-bill',
        template: __importDefault(__webpack_require__(/*! raw-loader!./bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill/bill.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [__importDefault(__webpack_require__(/*! ./bill.component.css */ "./src/app/components/bill/bill.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], BillComponent);

let CuDialog = class CuDialog {
    constructor(apiService, dialogRef, dData, _formBuilder, _snackBar) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.dData = dData;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.billFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            bill_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            vendor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            total_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0),
            due_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.entity = this.dData;
        this.vendor = this.entity.vendor;
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
        this.bill = this.entity.mainData;
        this.bilNumber = '';
        this.billItems = [];
        this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.billItems);
        this.bilItmTC = ['label', 'price', 'quantity', 'total', 'desc', 'id'];
        this.readableInvItmTC = {
            label: 'Label',
            price: 'Price',
            quantity: 'Quantity',
            total: 'Total',
            desc: 'Description',
        };
        this.bilTotalPrice = 0;
        this.loading = true;
    }
    ngOnInit() {
        console.log(this.entity);
        // Assign Dialog data to new variable.
        // Because it return error when trying to get data.
        if (this.entity.mainData) {
            this.editData = this.entity.mainData;
            this.loadItems(this.editData);
            this.bilNumber = this.editData.bill_number;
            this.billFC.setValue({
                bill_number: this.editData.bill_number,
                vendor: this.editData.vendor,
                currency: this.editData.currency,
                total_price: this.editData.total_price,
                balance: this.editData.balance,
                due_date: this.editData.due_date,
                status: this.editData.status,
            });
            this.billFC.controls['bill_number'].disable();
            this.billFC.controls['total_price'].disable();
            this.billFC.controls['balance'].disable();
        }
        else {
            this.getLastInvNum();
        }
    }
    checkTotal() {
        this.itemsFC.value.total = this.total = Number(this.itemsFC.value.price * this.itemsFC.value.quantity);
    }
    assigning(data) {
        this.billItems = data;
        this.calTotal();
        this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.billItems);
    }
    calTotal() {
        let count = 0;
        this.billItems.forEach(element => {
            count = +Number(count) + +Number(element.total);
        });
        this.bilTotalPrice = count;
    }
    loadItems(elm) {
        this.loading = true;
        this.billItems = [];
        this.apiService.retrive('bitm', elm.id).subscribe(result => {
            this.assigning(result);
            this.loading = false;
        });
        return elm;
    }
    bilOperation(data) {
        this.billFC.value.bill_number = this.bilNumber;
        if (data) {
            console.log('update');
            this.apiService.update(data.id, this.billFC.value, 'bil').subscribe((result) => {
                if (result.error) {
                    console.log(result.error);
                }
                else {
                    this.dialogRef.close(result);
                }
            });
        }
        else {
            this.apiService.create(this.billFC.value, 'bil').subscribe((result) => {
                if (result.error) {
                    console.log(result.error);
                }
                else {
                    this.bill = result;
                }
            });
        }
    }
    getLastInvNum() {
        this.apiService.loadAll('last_bil').subscribe((result) => {
            if (result.bill) {
                this.bilNumber = 'Bill-' + (result.bill + 1);
            }
            else {
                this.bilNumber = 'Bill-' + 1;
            }
            this.billFC.controls['bill_number'].disable();
            this.billFC.controls['total_price'].disable();
            this.billFC.controls['balance'].disable();
        });
    }
    createItem() {
        this.errors = null;
        this.itemsFC.value.bill = this.bill.id;
        this.apiService.create(this.itemsFC.value, 'bitm').subscribe((result) => {
            if (result.error) {
                this.errors = result.error;
            }
            else {
                this.billItems.push(result);
                console.log(this.billItems);
                this.calTotal();
                this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.billItems);
                this.itemsFC.reset();
            }
        });
    }
    removeItem(data) {
        if (confirm('Are sure to delete?')) {
            this.apiService.delete(data.id, 'bitm').subscribe(result => {
                this.billItems = this.billItems.filter(item => item !== data);
                this.itemSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.billItems);
                this._snackBar.openFromComponent(SnakComponent, {
                    duration: 2000,
                });
                this.calTotal();
            });
        }
    }
    finishBill(bil) {
        this.calTotal();
        this.billFC.value.total_price = this.bilTotalPrice;
        this.billFC.value.balance = this.bilTotalPrice;
        this.billFC.value.status = 1;
        this.bilOperation(bil);
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./cu-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bill/cu-dialog.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./bill.component.css */ "./src/app/components/bill/bill.component.css")).default]
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

/***/ "./src/app/components/bill/bill.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/bill/bill.module.ts ***!
  \************************************************/
/*! exports provided: BillRoutes, BillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillRoutes", function() { return BillRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModule", function() { return BillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill.component */ "./src/app/components/bill/bill.component.ts");
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







const BillRoutes = [{
        path: '',
        component: _bill_component__WEBPACK_IMPORTED_MODULE_3__["BillComponent"]
    }];
let BillModule = class BillModule {
};
BillModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _bill_component__WEBPACK_IMPORTED_MODULE_3__["BillComponent"],
            _bill_component__WEBPACK_IMPORTED_MODULE_3__["CuDialog"],
            _bill_component__WEBPACK_IMPORTED_MODULE_3__["SnakComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(BillRoutes)
        ],
        entryComponents: [
            _bill_component__WEBPACK_IMPORTED_MODULE_3__["CuDialog"],
            _bill_component__WEBPACK_IMPORTED_MODULE_3__["SnakComponent"]
        ],
        providers: [
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { showError: true }
            }
        ]
    })
], BillModule);



/***/ })

}]);
//# sourceMappingURL=components-bill-bill-module-es2015.js.map