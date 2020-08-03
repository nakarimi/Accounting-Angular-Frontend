function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/add/add.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/add/add.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPaymentAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>add works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/payment.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/payment.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPaymentPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex payment-container\" >\n  <div class=\"col-4 mat-typography\">\n    <form [formGroup]=\"paymentFC\" enctype=\"multipart/form-data\"\n    (ngSubmit)=\"paymentOperation(editData)\">\n    <mat-form-field>\n      <mat-label>Type</mat-label>\n      <mat-select name=\"type\" formControlName=\"type\" (selectionChange)=\"onSelectType($event)\">\n        <mat-option *ngFor=\"let c of payType\" [value]=\"c\">\n          {{c}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Label</mat-label>\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Account</mat-label>\n      <mat-select name=\"account\" formControlName=\"account\" (selectionChange)=\"onSelectAccount($event)\">\n        <mat-option *ngFor=\"let i of accounts\" [value]=\"i.id\" >\n          {{i.label}} - {{i.balance}} {{i.currency}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n      <mat-form-field *ngIf=\"paymentFC.value.type == 'Expense'\">\n        <mat-label>Bill Reference</mat-label>\n        <mat-select name=\"ref_bill\" formControlName=\"ref_bill\" (selectionChange)=\"onSelectItem($event, bills)\">\n          <span *ngFor=\"let c of bills\">\n            <mat-option [value]=\"c.id\" *ngIf=\"c.currency == selectedCurr && c.balance <= allowBalance\">\n              {{c.bill_number}} - {{ vendors[c.vendor].label }} - {{ c.balance }} {{ c.currency }}\n            </mat-option>\n          </span>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"paymentFC.value.type == 'Income'\">\n        <mat-label>Invoice Reference</mat-label>\n        <mat-select name=\"ref_inv\" formControlName=\"ref_inv\" (selectionChange)=\"onSelectItem($event, invoices)\">\n          <span *ngFor=\"let c of invoices\">\n            <mat-option [value]=\"c.id\" *ngIf=\"c.currency == selectedCurr\">\n              {{c.inv_number}} - {{ customers[c.customer].label }} - {{ c.balance }} {{ c.currency }}\n            </mat-option>\n          </span>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Amount</mat-label>\n        <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"amount\" (change)=\"onSetAmount($event)\">\n      </mat-form-field>\n  \n  \n  \n      <span *ngIf=\"editData\">\n        <button type=\"submit\" mat-button *ngIf=\"invalid\" \n          class=\"text-white\"\n          [ngClass]=\"{'bg-danger': paymentFC.invalid, 'bg-info': paymentFC.valid}\" \n          [disabled]=\"paymentFC.invalid\" >Create</button>\n        <button mat-button disabled *ngIf=\"!invalid\"\n          class=\"text-white\"\n          [ngClass]=\"{'bg-danger': paymentFC.invalid, 'bg-info': paymentFC.valid}\" \n          [disabled]=\"paymentFC.invalid\" >Update</button>\n        <button mat-button color=\"accent\" (click)=\"onResetForm()\">Cancel</button>\n      </span>\n      <span *ngIf=\"!editData\">\n        <!-- <button mat-button color=\"accent\" (click)=\"onResetForm()\">Cancel</button> -->\n        <button type=\"submit\" mat-button color=\"primary\" *ngIf=\"invalid\">Create</button>\n        <button mat-button disabled color=\"primary\" *ngIf=\"!invalid\">Create</button>\n      </span>\n    </form>\n  </div>\n  <div class=\"col-8 \">\n    <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\" matSort matSortActive=\"id\"\n      matSortDisableClear matSortDirection=\"desc\">\n      <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> {{ column.replace('_', ' ') }} </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button *ngIf=\"column == 'id'\" mat-raised-button mat-button (click)=\"activeEdit(element)\" align=\"end\"\n          tabindex=\"-1\">Edit <mat-icon>edit</mat-icon></button>\n          <span *ngIf=\"column != 'id'\">\n            {{element[column]}}\n            <span *ngIf=\"column == 'amount'\">\n              {{ element['currency'] }}\n            </span>\n          </span>\n        </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n    </table>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/payment/add/add.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/payment/add/add.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPaymentAddAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9hZGQvYWRkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/payment/add/add.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/payment/add/add.component.ts ***!
    \*********************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppComponentsPaymentAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddComponent = /*#__PURE__*/function () {
      function AddComponent() {
        _classCallCheck(this, AddComponent);
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddComponent;
    }();

    AddComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/add/add.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add.component.css */
      "./src/app/components/payment/add/add.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], AddComponent);
    /***/
  },

  /***/
  "./src/app/components/payment/payment.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/payment/payment.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPaymentPaymentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".payment-container table{\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudC1jb250YWluZXIgdGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/payment/payment.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/payment/payment.component.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentComponent */

  /***/
  function srcAppComponentsPaymentPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () {
      return PaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/toast/toast-service */
    "./src/app/shared/toast/toast-service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PaymentComponent = /*#__PURE__*/function () {
      function PaymentComponent(apiService, toast, _formBuilder) {
        _classCallCheck(this, PaymentComponent);

        this.apiService = apiService;
        this.toast = toast;
        this._formBuilder = _formBuilder;
        this.vendors = [];
        this.customers = [];
        this.accounts = [];
        this.formStatus = true;
        this.allowBalance = 0;
        this.thisAmount = 0;
        this.billAmount = 0;
        this.invalid = false;
        this.payType = ['Income', 'Expense']; // Define all the variable

        this.displayedColumns = ['label', 'account', 'amount', 'type', 'ref_bill', 'ref_inv', 'id'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false; // Build the table data source based on table data.

        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData); // paymentFC = this._formBuilder.group({
        //   account: new FormControl('', Validators.required),
        //   label: new FormControl('', Validators.required),
        //   type: new FormControl('', Validators.required),
        //   amount: new FormControl('', [Validators.min(0), Validators.required]),
        //   ref_bill: new FormControl(''),
        //   ref_inv: new FormControl(''),
        // }, { validator: this.checkAmount })

        this.paymentFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          account: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          ref_bill: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          ref_inv: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.billInvAmpunt = 0;
        this.refrence = 'Bill Refrence';
      }

      _createClass(PaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadPayments();
          this.loadBills();
          this.loadInvoices();
          this.loadAccounts();
        }
      }, {
        key: "loadPayments",
        value: function loadPayments() {
          var _this = this;

          this.apiService.loadAll('pay').subscribe(function (result) {
            _this.dataSource.data = result;
            _this.dataSource.sort = _this.msort;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "loadAccounts",
        value: function loadAccounts() {
          var _this2 = this;

          this.apiService.loadAll('acnt').subscribe(function (result) {
            _this2.accounts = result;
            console.log(_this2.accounts);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "loadInvoices",
        value: function loadInvoices() {
          var _this3 = this;

          this.apiService.loadAll('inv').subscribe(function (result) {
            _this3.invoices = result;

            _this3.apiService.loadAll('csmr').subscribe(function (result) {
              result.forEach(function (element) {
                _this3.customers[element.id] = element;
              });
              console.log(_this3.customers);
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onSelectAccount",
        value: function onSelectAccount(data) {
          this.allowBalance = 0;
          var acc = this.accounts.filter(function (x) {
            return x.id == data.value;
          })[0];
          this.selectedCurr = acc.currency;
          this.allowBalance = acc.balance;
        }
      }, {
        key: "onSelectItem",
        value: function onSelectItem(data, items) {
          this.billAmount = 0;
          var b = items.filter(function (x) {
            return x.id == data.value;
          })[0];
          this.billAmount = b.balance;
        }
      }, {
        key: "onSetAmount",
        value: function onSetAmount(data) {
          if (this.paymentFC.value.amount > this.billAmount) {
            this.invalid = false;
            alert("Please add valid amount less than " + this.billAmount + " " + this.selectedCurr);
          } else {
            this.invalid = true;
          }
        }
      }, {
        key: "onResetForm",
        value: function onResetForm() {
          this.editData = null;
          this.payType = ['Income', 'Expense'];
          this.paymentFC.reset();
        }
      }, {
        key: "loadBills",
        value: function loadBills() {
          var _this4 = this;

          this.apiService.loadAll('bil').subscribe(function (result) {
            _this4.bills = result;

            _this4.apiService.loadAll('vdr').subscribe(function (result) {
              result.forEach(function (element) {
                _this4.vendors[element.id] = element;
              });
              console.log(_this4.vendors);
            });
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "activeEdit",
        value: function activeEdit(data) {
          this.editData = data;
          this.payType = [data.type];
          this.paymentFC.setValue({
            label: data.label,
            account: data.account,
            amount: data.amount,
            type: data.type,
            ref_bill: data.ref_bill,
            ref_inv: data.ref_inv
          });
          var acc = this.accounts.filter(function (x) {
            return x.id == data.account;
          })[0];
          this.selectedCurr = acc.currency;
        }
      }, {
        key: "onSelectType",
        value: function onSelectType(data) {
          var defaultData = this.paymentFC.value;
          this.paymentFC.setValue({
            type: defaultData.type,
            label: defaultData.label,
            account: defaultData.account,
            amount: 0,
            ref_bill: null,
            ref_inv: null
          });
        }
      }, {
        key: "paymentOperation",
        value: function paymentOperation(data) {
          var _this5 = this;

          this.paymentFC.value.currency = this.selectedCurr;

          if (data && data.id) {
            this.apiService.update(data.id, this.paymentFC.value, 'pay').subscribe(function (result) {
              if (result.error) {
                console.log(result.error);
              } else {
                _this5.updateTable(data, result);

                _this5.onResetForm();

                _this5.toast.show('Payment updated successfully!', {
                  classname: 'bg-success text-light',
                  delay: 5000
                });
              }
            });
          } else {
            this.apiService.create(this.paymentFC.value, 'pay').subscribe(function (result) {
              if (result.error) {
                console.log(result.error);
              } else {
                _this5.addToTable(result);

                _this5.onResetForm();

                _this5.toast.show('New payment created successfully!', {
                  classname: 'bg-success text-light',
                  delay: 5000
                });
              }
            });
          }
        } // Delete Item From UI

      }, {
        key: "deleteUI",
        value: function deleteUI(row) {
          this.tableData = this.dataSource.data;
          var index = this.tableData.findIndex(function (data) {
            return data === row;
          });
          this.tableData.splice(index, 1);
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
          this.dataSource.sort = this.msort;
        }
      }, {
        key: "addToTable",
        value: function addToTable(data) {
          this.tableData = this.dataSource.data;
          this.dataSource.data = this.tableData.push(data);
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
          this.dataSource.sort = this.msort;
        }
      }, {
        key: "updateTable",
        value: function updateTable(oldRow, newRow) {
          this.tableData = this.dataSource.data; // Remove the old data from table.

          var index = this.tableData.findIndex(function (data) {
            return data === oldRow;
          });
          this.tableData.splice(index, 1); // Add update row.

          this.dataSource.data = this.tableData.push(newRow);
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
          this.dataSource.sort = this.msort;
        }
      }]);

      return PaymentComponent;
    }();

    PaymentComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])], PaymentComponent.prototype, "paginator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])], PaymentComponent.prototype, "msort", void 0);

    PaymentComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-payment',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/payment/payment.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./payment.component.css */
      "./src/app/components/payment/payment.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], PaymentComponent);
    /***/
  },

  /***/
  "./src/app/components/payment/payment.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/payment/payment.module.ts ***!
    \******************************************************/

  /*! exports provided: routes, PaymentModule */

  /***/
  function srcAppComponentsPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentModule", function () {
      return PaymentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.component */
    "./src/app/components/payment/payment.component.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/components/payment/add/add.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-permissions */
    "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"]
    }, {
      path: 'add',
      component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"]
    }];

    var PaymentModule = function PaymentModule() {
      _classCallCheck(this, PaymentModule);
    };

    PaymentModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"].forRoot()]
    })], PaymentModule);
    /***/
  }
}]);
//# sourceMappingURL=components-payment-payment-module-es5.js.map