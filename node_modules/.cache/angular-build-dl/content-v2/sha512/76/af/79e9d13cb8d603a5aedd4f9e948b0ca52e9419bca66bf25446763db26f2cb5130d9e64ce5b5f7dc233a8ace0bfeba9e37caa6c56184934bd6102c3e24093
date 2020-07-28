function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-customer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/add-dialog.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/add-dialog.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerAddDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Add Customer</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"customerFC\" enctype=\"multipart/form-data\"\r\n    (ngSubmit)=\"create()\">\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\" placeholder=\"Label\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"textarea\" formControlName=\"owner\" placeholder=\"Owner\" required>\r\n    </mat-form-field>\r\n    <div>\r\n      <label>Status: </label>\r\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\r\n    </div>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"phone\" placeholder=\"Phone\" required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"email\" formControlName=\"email\" placeholder=\"Email\" required>\r\n    </mat-form-field>\r\n\r\n    <mat-dialog-actions align=\"end\">\r\n      <button align=\"end\" type=\"submit\" mat-button \r\n        class=\"text-white\"\r\n        [ngClass]=\"{'bg-danger': customerFC.invalid, 'bg-info': customerFC.valid}\" \r\n        [disabled]=\"customerFC.invalid\" >Create</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"csmr-table-actions table-actions mat-typography\">\n  <button class=\"m-1 text-white bg-success\" mat-raised-button mat-button (click)=\"openAddDialog()\">Add <mat-icon>add</mat-icon></button>\n    <mat-form-field class=\"ml-2\">\n      <mat-label>Filter</mat-label>\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n    </mat-form-field>\n    <mat-form-field class=\"ml-2\">\n      <mat-label>Column</mat-label>\n      <mat-select (selectionChange)=\"filterCulChange($event)\">\n        <mat-option value=\"all\">All</mat-option>\n        <span *ngFor=\"let c of filterColumns\">\n          <mat-option [value]=\"c\" *ngIf=\"c != 'id'\" class=\"text-capitalize\">\n            {{ c.replace('_', ' ') }}\n          </mat-option>\n        </span>\n      </mat-select>\n    </mat-form-field>\n\n</div>\n\n<table width=\"100%\" mat-table \n  [dataSource]=\"dataSource\" \n  matSort matSortActive=\"id\"\n  matSortDisableClear\n  matSortDirection=\"desc\">\n  <!-- Number Column -->\n\n  <ng-container matColumnDef=\"label\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Label</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.label}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"owner\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Owner</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.owner}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"phone\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.phone}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <span *ngIf=\"row.status\">Active</span>\n      <span *ngIf=\"!row.status\">Inactive</span>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef>Action</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <button class=\"m-1 text-white bg-info\" mat-raised-button mat-button (click)=\"openEditDialog(row)\" align=\"end\" tabindex=\"-1\">Edit <mat-icon>edit</mat-icon></button>\n      <button class=\"m-1 text-white bg-danger\" mat-raised-button mat-button (click)=\"delete(row)\" align=\"end\" tabindex=\"-1\">Delete <mat-icon>delete</mat-icon></button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/edit-dialog.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/edit-dialog.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomerEditDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Add Customer</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"customerFC\" enctype=\"multipart/form-data\" (ngSubmit)=\"update(data)\">\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\" placeholder=\"Label\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"textarea\" formControlName=\"owner\" placeholder=\"Owner\" required>\r\n    </mat-form-field>\r\n    <div>\r\n      <mat-label>Status</mat-label>\r\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\r\n    </div>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"phone\" placeholder=\"Phone\" required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"email\" formControlName=\"email\" placeholder=\"Email\" required>\r\n    </mat-form-field>\r\n    <mat-dialog-actions align=\"end\">\r\n      <button type=\"submit\" mat-button class=\"text-white\"\r\n        [ngClass]=\"{'bg-danger': customerFC.invalid, 'bg-info': customerFC.valid}\" [disabled]=\"customerFC.invalid\" >Update</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</mat-dialog-content>\r\n";
    /***/
  },

  /***/
  "./src/app/components/customer/customer.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/customer/customer.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomerCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/customer/customer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/customer/customer.component.ts ***!
    \***********************************************************/

  /*! exports provided: CustomerComponent, AddDialog, EditDialog */

  /***/
  function srcAppComponentsCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDialog", function () {
      return AddDialog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDialog", function () {
      return EditDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

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

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomerComponent = /*#__PURE__*/function () {
      function CustomerComponent(apiService, dialog) {
        _classCallCheck(this, CustomerComponent);

        this.apiService = apiService;
        this.dialog = dialog;
        this.filterCul = 'all'; // Define all the variable

        this.displayedColumns = ['label', 'owner', 'phone', 'email', 'status', 'id'];
        this.filterColumns = ['label', 'owner', 'phone', 'email'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false; // Build the table data source based on table data.

        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
      }

      _createClass(CustomerComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadCustomers();
        } // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

      }, {
        key: "loadCustomers",
        value: function loadCustomers() {
          var _this = this;

          this.apiService.loadAll('csmr').subscribe(function (result) {
            _this.dataSource.data = result;
            _this.dataSource.sort = _this.msort;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "openAddDialog",
        value: function openAddDialog() {
          var _this2 = this;

          var dialogRef = this.dialog.open(AddDialog, {// maxHeight: '80%',
            // maxWidth: '80%',
          });
          dialogRef.afterClosed().subscribe(function (result) {
            // Do nothing on cancel and if it return value update table.
            if (result) {
              _this2.addToTable(result);
            }
          });
        } // Update handling Serverside and client side.

      }, {
        key: "openEditDialog",
        value: function openEditDialog(data) {
          var _this3 = this;

          var dialogRef = this.dialog.open(EditDialog, {
            data: data
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this3.updateTable(data, result);
            }
          });
        } // Delete Item From Server.

      }, {
        key: "delete",
        value: function _delete(row) {
          var _this4 = this;

          if (confirm('Are sure to delete?')) {
            this.apiService["delete"](row.id, 'csmr').subscribe(function (result) {
              _this4.deleteUI(row);
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
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
          this.dataSource.sort = this.msort;
        }
      }, {
        key: "addToTable",
        value: function addToTable(data) {
          this.tableData = this.dataSource.data;
          this.dataSource.data = this.tableData.push(data);
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
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
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
          this.dataSource.sort = this.msort;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;

          if (this.filterCul == 'all') {
            this.dataSource.filter = filterValue.trim().toLowerCase();
          } else {
            this.dataSource.filterPredicate = function (data, filter) {
              filter = JSON.parse(filter);
              var term = filter[0];
              var key = filter[1];
              return data[key].toLowerCase().includes(term);
            };

            this.dataSource.filter = JSON.stringify([filterValue.trim().toLowerCase(), this.filterCul]);
          }
        }
      }, {
        key: "filterCulChange",
        value: function filterCulChange(data) {
          this.filterCul = data.value;
        }
      }]);

      return CustomerComponent;
    }();

    CustomerComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], CustomerComponent.prototype, "paginator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], CustomerComponent.prototype, "msort", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], CustomerComponent.prototype, "customers", void 0);

    CustomerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-customer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./customer.component.css */
      "./src/app/components/customer/customer.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], CustomerComponent);

    var AddDialog = /*#__PURE__*/function () {
      function AddDialog(apiService, dialogRef, data) {
        _classCallCheck(this, AddDialog);

        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.customerFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
      }

      _createClass(AddDialog, [{
        key: "create",
        value: function create() {
          var _this5 = this;

          console.log(this.customerFC.value);
          this.apiService.create(this.customerFC.value, 'csmr').subscribe(function (result) {
            if (result.error) {
              console.log(result.error);
            } else {
              _this5.dialogRef.close(result);
            }
          }, function (error) {// this.dialogRef.close();
          });
        }
      }]);

      return AddDialog;
    }();

    AddDialog.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddDialog = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'add-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/add-dialog.html"))["default"]
    }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], AddDialog);

    var EditDialog = /*#__PURE__*/function () {
      function EditDialog(apiService, dialogRef, data) {
        _classCallCheck(this, EditDialog);

        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.customerFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
      }

      _createClass(EditDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Assign Dialog data to new variable.
          // Because it return error when trying to get data.
          this.editData = this.data;
          this.customerFC.setValue({
            label: this.editData.label,
            owner: this.editData.owner,
            phone: this.editData.phone,
            email: this.editData.email,
            status: this.editData.status
          });
        }
      }, {
        key: "update",
        value: function update(data) {
          var _this6 = this;

          this.apiService.update(data.id, this.customerFC.value, 'csmr').subscribe(function (result) {
            if (result.error) {
              console.log(result.error);
            } else {
              _this6.dialogRef.close(result);
            }
          }, function (error) {// this.dialogRef.close();
          });
        }
      }]);

      return EditDialog;
    }();

    EditDialog.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    EditDialog = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'edit-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./edit-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/edit-dialog.html"))["default"]
    }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], EditDialog);
    /***/
  },

  /***/
  "./src/app/components/customer/customer.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/customer/customer.module.ts ***!
    \********************************************************/

  /*! exports provided: CustomerRoutes, CustomerModule */

  /***/
  function srcAppComponentsCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerRoutes", function () {
      return CustomerRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerModule", function () {
      return CustomerModule;
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


    var _customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer.component */
    "./src/app/components/customer/customer.component.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

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

    var CustomerRoutes = [{
      path: '',
      component: _customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"]
    }];

    var CustomerModule = function CustomerModule() {
      _classCallCheck(this, CustomerModule);
    };

    CustomerModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customer_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"], _customer_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(CustomerRoutes)],
      entryComponents: [_customer_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"], _customer_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"]]
    })], CustomerModule);
    /***/
  }
}]);
//# sourceMappingURL=components-customer-customer-module-es5.js.map