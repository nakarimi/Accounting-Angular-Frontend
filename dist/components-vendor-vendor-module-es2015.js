(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-vendor-vendor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/add-dialog.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/add-dialog.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Add Vendor</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"vendorFC\" enctype=\"multipart/form-data\"\r\n    (ngSubmit)=\"create()\">\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\" placeholder=\"Label\"\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('label').hasError('required')\">\r\n        Label is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('label').hasError('minlength')\">\r\n        Label must be at least 3 characters long.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('label').hasError('maxlength')\">\r\n        Label must be at most 25 characters long.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"textarea\" formControlName=\"owner\" placeholder=\"Owner\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('owner').hasError('required')\">\r\n        Owner is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('owner').hasError('minlength')\">\r\n        Owner must be at least 3 characters long.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('owner').hasError('maxlength')\">\r\n        Owner must be at most 25 characters long.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <div>\r\n      <label>Status: </label>\r\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\r\n    </div>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"phone\" placeholder=\"Phone\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('phone').errors && vendorFC.get('phone').errors.required\">\r\n        Phone is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('phone').errors && vendorFC.get('phone').errors.pattern\">\r\n        Phone must be 10 digits and start with 0.\r\n      </mat-error>\r\n    \r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"email\" formControlName=\"email\" placeholder=\"Email\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('email').errors && vendorFC.get('email').errors.required\">\r\n        Email is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('email').errors && vendorFC.get('email').errors.email\">\r\n        Email format is not correct.\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-dialog-actions align=\"end\">\r\n      <button align=\"end\" type=\"submit\" mat-button\r\n          class=\"text-white\"\r\n          [ngClass]=\"{'bg-danger': vendorFC.invalid, 'bg-info': vendorFC.valid}\" \r\n          [disabled]=\"vendorFC.invalid\" >Create</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/edit-dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/edit-dialog.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Add Vendor</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"vendorFC\" enctype=\"multipart/form-data\" (ngSubmit)=\"update(data)\">\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\" placeholder=\"Label\"\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('label').hasError('required')\">\r\n        Label is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('label').hasError('minlength')\">\r\n        Label must be at least 3 characters long.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('label').hasError('maxlength')\">\r\n        Label must be at most 25 characters long.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"textarea\" formControlName=\"owner\" placeholder=\"Owner\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('owner').hasError('required')\">\r\n        Owner is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('owner').hasError('minlength')\">\r\n        Owner must be at least 3 characters long.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('owner').hasError('maxlength')\">\r\n        Owner must be at most 25 characters long.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <div>\r\n      <label>Status: </label>\r\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\r\n    </div>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"phone\" placeholder=\"Phone\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('phone').errors && vendorFC.get('phone').errors.required\">\r\n        Phone is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('phone').errors && vendorFC.get('phone').errors.pattern\">\r\n        Phone must be 10 digits and start with 0.\r\n      </mat-error>\r\n    \r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"email\" formControlName=\"email\" placeholder=\"Email\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"vendorFC.get('email').errors && vendorFC.get('email').errors.required\">\r\n        Email is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"vendorFC.get('email').errors && vendorFC.get('email').errors.email\">\r\n        Email format is not correct.\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-dialog-actions align=\"end\">\r\n      <button type=\"submit\" mat-button\r\n        class=\"text-white\"\r\n        [ngClass]=\"{'bg-danger': vendorFC.invalid, 'bg-info': vendorFC.valid}\" \r\n        [disabled]=\"vendorFC.invalid\" >Update</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</mat-dialog-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/vendor.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/vendor.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vdr-table-actions table-actions mat-typography\">\n  <button class=\"bg-success text-white\" mat-raised-button mat-button (click)=\"openAddDialog()\">Add <mat-icon>add</mat-icon></button>\n  <mat-form-field class=\"ml-2\">\n    <mat-label>Filter</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n  </mat-form-field>\n  <mat-form-field class=\"ml-2\">\n    <mat-label>Column</mat-label>\n    <mat-select (selectionChange)=\"filterCulChange($event)\">\n      <mat-option value=\"all\">All</mat-option>\n      <span *ngFor=\"let c of filterColumns\">\n        <mat-option [value]=\"c\" *ngIf=\"c != 'id'\" class=\"text-capitalize\">\n          {{ c.replace('_', ' ') }}\n        </mat-option>\n      </span>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<table width=\"100%\" mat-table \n  [dataSource]=\"dataSource\" \n  matSort matSortActive=\"id\"\n  matSortDisableClear\n  matSortDirection=\"desc\">\n  <!-- Number Column -->\n\n  <ng-container matColumnDef=\"label\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Label</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.label}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"owner\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Owner</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.owner}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"phone\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.phone}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <span *ngIf=\"row.status\">Active</span>\n      <span *ngIf=\"!row.status\">Inactive</span>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"desc\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.desc}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef>Action</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <button class=\"bg-info text-white m-1\" mat-raised-button mat-button (click)=\"openEditDialog(row)\" align=\"end\" tabindex=\"-1\">Edit <mat-icon>edit</mat-icon></button>\n      <button class=\"bg-danger text-white m-1\" mat-raised-button mat-button (click)=\"delete(row)\" align=\"end\" tabindex=\"-1\">Delete <mat-icon>delete</mat-icon></button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</table>");

/***/ }),

/***/ "./src/app/components/vendor/vendor.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-checkbox-layout{\r\n  padding-left: 20px !important;\r\n    padding-top: 9px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZW5kb3IvdmVuZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7SUFDM0IsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZW5kb3IvdmVuZG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNoZWNrYm94LWxheW91dHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/vendor/vendor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/vendor/vendor.component.ts ***!
  \*******************************************************/
/*! exports provided: VendorComponent, AddDialog, EditDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialog", function() { return AddDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialog", function() { return EditDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
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




let VendorComponent = class VendorComponent {
    constructor(apiService, dialog) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.filterCul = 'all';
        // Define all the variable
        this.displayedColumns = ['label', 'owner', 'phone', 'email', 'status', 'desc', 'id'];
        this.filterColumns = ['label', 'owner', 'phone', 'email', 'desc'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        // Build the table data source based on table data.
        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
    }
    ngAfterViewInit() {
        this.loadVendors();
    }
    // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    loadVendors() {
        this.apiService.loadAll('vdr').subscribe((result) => {
            this.dataSource.data = result;
            this.dataSource.sort = this.msort;
        }, error => {
            console.log(error);
        });
    }
    openAddDialog() {
        const dialogRef = this.dialog.open(AddDialog, {
        // maxHeight: '80%',
        // maxWidth: '80%',
        });
        dialogRef.afterClosed().subscribe(result => {
            // Do nothing on cancel and if it return value update table.
            if (result) {
                this.addToTable(result);
            }
        });
    }
    // Update handling Serverside and client side.
    openEditDialog(data) {
        const dialogRef = this.dialog.open(EditDialog, {
            data: data,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.updateTable(data, result);
            }
        });
    }
    // Delete Item From Server.
    delete(row) {
        if (confirm('Are sure to delete?')) {
            this.apiService.delete(row.id, 'vdr').subscribe(result => {
                this.deleteUI(row);
            });
        }
    }
    // Delete Item From UI
    deleteUI(row) {
        this.tableData = this.dataSource.data;
        let index = this.tableData.findIndex(data => data === row);
        this.tableData.splice(index, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        this.dataSource.sort = this.msort;
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
        let index = this.tableData.findIndex(data => data === oldRow);
        this.tableData.splice(index, 1);
        // Add update row.
        this.dataSource.data = this.tableData.push(newRow);
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
};
VendorComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], VendorComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], VendorComponent.prototype, "msort", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], VendorComponent.prototype, "vendors", void 0);
VendorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-vendor',
        template: __importDefault(__webpack_require__(/*! raw-loader!./vendor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/vendor.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./vendor.component.css */ "./src/app/components/vendor/vendor.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], VendorComponent);

let AddDialog = class AddDialog {
    constructor(apiService, dialogRef, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.vendorFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=\D*\d).{9}$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    create() {
        console.log(this.vendorFC.value);
        this.apiService.create(this.vendorFC.value, 'vdr').subscribe(result => {
            this.dialogRef.close(result);
        }, error => {
            // this.dialogRef.close();
        });
    }
};
AddDialog.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'add-dialog',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/add-dialog.html")).default,
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], AddDialog);

let EditDialog = class EditDialog {
    constructor(apiService, dialogRef, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.vendorFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=\D*\d).{9}$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
    ngOnInit() {
        // Assign Dialog data to new variable.
        // Because it return error when trying to get data.
        this.editData = this.data;
        this.vendorFC.setValue({
            label: this.editData.label,
            owner: this.editData.owner,
            phone: this.editData.phone,
            email: this.editData.email,
            status: this.editData.status,
            desc: this.editData.desc,
        });
    }
    update(data) {
        this.apiService.update(data.id, this.vendorFC.value, 'vdr').subscribe(result => {
            this.dialogRef.close(result);
        }, error => {
            // this.dialogRef.close();
        });
    }
};
EditDialog.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
EditDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'edit-dialog',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vendor/edit-dialog.html")).default,
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], EditDialog);



/***/ }),

/***/ "./src/app/components/vendor/vendor.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/vendor/vendor.module.ts ***!
  \****************************************************/
/*! exports provided: VendorRoutes, VendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRoutes", function() { return VendorRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModule", function() { return VendorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vendor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor.component */ "./src/app/components/vendor/vendor.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const VendorRoutes = [{
        path: '',
        component: _vendor_component__WEBPACK_IMPORTED_MODULE_3__["VendorComponent"]
    }];
let VendorModule = class VendorModule {
};
VendorModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _vendor_component__WEBPACK_IMPORTED_MODULE_3__["VendorComponent"],
            _vendor_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"],
            _vendor_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(VendorRoutes)
        ],
        entryComponents: [
            _vendor_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"],
            _vendor_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"],
        ]
    })
], VendorModule);



/***/ })

}]);
//# sourceMappingURL=components-vendor-vendor-module-es2015.js.map