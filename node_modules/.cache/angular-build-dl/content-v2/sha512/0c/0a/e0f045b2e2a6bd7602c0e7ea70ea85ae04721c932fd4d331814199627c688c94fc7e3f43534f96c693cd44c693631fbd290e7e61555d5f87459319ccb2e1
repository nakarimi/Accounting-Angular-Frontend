(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-6\">\n    <h4>USD Accounts</h4>\n    <div style=\"display: block;\">\n      <canvas baseChart [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\n        [options]=\"pieChartOptions\" [plugins]=\"pieChartPlugins\" [legend]=\"pieChartLegend\"\n            [colors]=\"pieChartColors\"\n            >\n      </canvas>\n    </div>\n  </div>\n\n  <div class=\"col-6\">\n    <h4>Afghani Accounts</h4>\n    <div style=\"display: block;\">\n      <canvas baseChart [data]=\"pieChartAfData\" [labels]=\"pieChartAfLabels\" [chartType]=\"pieChartAfType\"\n        [options]=\"pieChartAfOptions\" [plugins]=\"pieChartAfPlugins\" [legend]=\"pieChartAfLegend\" [colors]=\"pieChartAfColors\">\n      </canvas>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"csmr-table-actions table-actions mat-typography\">\n  <button class=\"m-1 text-white bg-success\" mat-raised-button mat-button (click)=\"openAddDialog()\">\n    Add <mat-icon>add</mat-icon></button>\n  <mat-form-field class=\"ml-2\">\n    <mat-label>Filter</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n  </mat-form-field>\n  <mat-form-field class=\"ml-2\">\n    <mat-label>Column</mat-label>\n    <mat-select (selectionChange)=\"filterCulChange($event)\">\n      <mat-option value=\"all\">All</mat-option>\n      <span *ngFor=\"let c of filterColumns\">\n        <mat-option [value]=\"c\" *ngIf=\"c != 'id'\" class=\"text-capitalize\">\n          {{ c.replace('_', ' ') }}\n        </mat-option>\n      </span>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<table width=\"100%\" mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDisableClear\n  matSortDirection=\"desc\">\n\n  <!-- Number Column -->\n  <ng-container matColumnDef=\"label\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Label</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.label}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"owner\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Owner</th>\n    <td mat-cell *matCellDef=\"let row\">{{ row.owner }}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"balance\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Balance</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.balance}} {{row.currency}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"desc\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.desc}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <span *ngIf=\"row.status\">Active</span>\n      <span *ngIf=\"!row.status\">Inactive</span>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"file\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>File</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <img height=\"50px\" src=\"{{serverDomain + row.file}}\">\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <button class=\"m-1 text-white bg-info\" mat-raised-button mat-button (click)=\"openEditDialog(row)\" align=\"end\" tabindex=\"-1\">\n        Edit <mat-icon>edit</mat-icon></button>\n      <button class=\"m-1 text-white bg-danger\" mat-raised-button mat-button (click)=\"delete(row)\" align=\"end\" tabindex=\"-1\">\n        Delete <mat-icon>delete</mat-icon></button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/add-dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/add-dialog.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Add Account</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"accountFC\" enctype=\"multipart/form-data\"\r\n    (ngSubmit)=\"createAcc()\">\r\n    <mat-form-field>\r\n      <input matInput id=\"label\" autocomplete=\"off\" type=\"text\" formControlName=\"label\" placeholder=\"Label\" required\r\n      [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"accountFC.get('label').errors && accountFC.get('label').errors.required\">\r\n        Label is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"accountFC.get('label').errors && accountFC.get('label').errors.minlength\">\r\n        Label must be at least 5 characters long.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"accountFC.get('label').errors && accountFC.get('label').errors.maxlength\">\r\n        Label must be at most 25 characters long.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Owner</mat-label>\r\n      <mat-select formControlName=\"owner\">\r\n        <span *ngFor=\"let c of owners\">\r\n          <mat-option [value]=\"c.id\">\r\n            {{c.first_name}} {{c.last_name}}\r\n          </mat-option>\r\n        </span>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <div>\r\n      <label>Status: </label>\r\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\r\n    </div>\r\n    <mat-form-field>\r\n      <mat-label>Currency</mat-label>\r\n      <mat-select name=\"currency\" formControlName=\"currency\">\r\n        <mat-option *ngFor=\"let i of ['USD', 'AF']\" [value]=\"i\">\r\n          {{i}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" step=\"50\" type=\"number\" formControlName=\"balance\" placeholder=\"Balance\" required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"desc\" placeholder=\"Description\">\r\n    </mat-form-field>\r\n    <label for=\"form-image\">Upload Image</label>\r\n    <br>\r\n    <input id=\"form-image\" type=\"file\" (change)=\"onChangeFile($event)\" />\r\n    <br>\r\n    <span style=\"color: #e91e63;\" *ngIf=\"!isFormValid\">Choose a valid image file.</span>\r\n    <mat-dialog-actions align=\"end\">\r\n      <button \r\n      [ngClass]=\"{'bg-danger': accountFC.invalid, 'bg-info': accountFC.valid}\" [disabled]=\"accountFC.invalid\"\r\n       align=\"end\" type=\"submit\" mat-button class=\"btn text-white\">Create</button>\r\n      <button mat-button mat-dialog-close color=\"danger\">Cancel</button>\r\n    </mat-dialog-actions>\r\n\r\n  </form>\r\n    <br>\r\n    <p>\r\n      <ngb-alert *ngIf=\"apiErr\" [dismissible]=\"false\">\r\n        <span *ngFor=\"let item of apiErr | keyvalue\">\r\n          <li><strong>{{item.key}}: </strong>{{item.value}}</li>\r\n        </span>\r\n      </ngb-alert>\r\n    </p>\r\n\r\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/edit-dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/edit-dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Edit Account</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"accountFC\" enctype=\"multipart/form-data\"\r\n    (ngSubmit)=\"updateAcc(data)\">\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"label\" placeholder=\"Label\">\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Owner</mat-label>\r\n      <mat-select formControlName=\"owner\">\r\n        <span *ngFor=\"let c of owners\">\r\n          <mat-option [value]=\"c.id\">\r\n            {{c.first_name}} {{c.last_name}}\r\n          </mat-option>\r\n        </span>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <div>\r\n      <label>Status: </label>\r\n      <mat-checkbox formControlName=\"status\">Active</mat-checkbox>\r\n    </div>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"balance\" placeholder=\"Balance\" required>\r\n    </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>Currency</mat-label>\r\n          <mat-select name=\"currency\" formControlName=\"currency\">\r\n            <mat-option *ngFor=\"let i of ['USD', 'AF']\" [value]=\"i\">\r\n              {{i}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n    <mat-form-field>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"desc\" placeholder=\"Description\" >\r\n    </mat-form-field>\r\n    <label for=\"form-image\">Upload Image</label>\r\n    <br>\r\n    <span>\r\n      <span style=\"color: #e91e63;\" *ngIf=\"!isFormValid\">Choose a valid image file.</span>\r\n      <span *ngIf=\"isFormValid\" (click)=\"removeFile(data)\">\r\n        Currently: \r\n        <img height=\"50px\" src=\"http://karimi73.pythonanywhere.com{{data.file}}\">\r\n      </span>\r\n    </span>\r\n    <br>\r\n    <input id=\"form-image\" type=\"file\" (change)=\"onUpdateFile($event)\" />\r\n    <br>\r\n    <mat-dialog-actions align=\"end\">\r\n      <button \r\n        [ngClass]=\"{'bg-danger': accountFC.invalid, 'bg-info': accountFC.valid}\" [disabled]=\"accountFC.invalid\"\r\n        align=\"end\" type=\"submit\" mat-button class=\"btn text-white\">Update</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n  <br>\r\n  <p>\r\n    <ngb-alert *ngIf=\"apiErr\" [dismissible]=\"false\">\r\n      <span *ngFor=\"let item of apiErr | keyvalue\">\r\n        <li><strong>{{item.key}}: </strong>{{item.value}}</li>\r\n      </span>\r\n    </ngb-alert>\r\n  </p>\r\n</mat-dialog-content>");

/***/ }),

/***/ "./src/app/components/account/account.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/account/account.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/*! exports provided: AccountComponent, AddDialog, EditDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialog", function() { return AddDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialog", function() { return EditDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/toast/toast-service */ "./src/app/shared/toast/toast-service.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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








let AccountComponent = class AccountComponent {
    constructor(apiService, dialog, toast, router) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.toast = toast;
        this.router = router;
        this.serverDomain = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].serverDomain;
        this.filterCul = 'all';
        // Define all the variable
        this.displayedColumns = ['label', 'owner', 'balance', 'status', 'desc', 'file', 'id'];
        this.filterColumns = ['label', 'owner', 'balance', 'desc'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        // Build the table data source based on table data.
        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
        // Pie
        this.singleDataSet = [];
        this.labels = [];
        this.singleDataSetAf = [];
        this.labelsAf = [];
        this.pieChartOptions = {
        // responsive: true,
        };
        this.pieChartColors = [{
                backgroundColor: ["#FFCC99", "#FFCC66", "#CC9999", "#CC99CC", "#CCFF00", "#FF66FF", "#FF66CC", "#CC3300", "#CC3333", "#CCFFCC", "#CCFFFF", "#FF9999", "#FF9966", "#CC6633", "#CC6666", "#FFFF66", "#FFFF33", "#FFFF00", "#CCCC99", "#CCCCCC", "#FF33FF", "#FF33CC", "#FF3300", "#CC0000", "#CC00CC", "#CC00FF", "#FF0033"],
            }];
        this.pieChartLabels = this.labels;
        this.pieChartData = this.singleDataSet;
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        // public pieChartPercentage = true;
        this.pieChartPlugins = [];
        this.pieChartAfOptions = {
        // responsive: true,
        };
        this.pieChartAfColors = [{
                backgroundColor: ["#009999", "#339900", "#339999", "#330000", "#009966", "#CCCCCC", "#33CC66", "#FF33CC", "#FF3300", "#CC0000", "#CC00CC", "#CC00FF", "#FF0033"],
            }];
        this.pieChartAfLabels = this.labelsAf;
        this.pieChartAfData = this.singleDataSetAf;
        this.pieChartAfType = 'pie';
        this.pieChartAfLegend = true;
        this.pieChartAfPlugins = [];
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_5__["monkeyPatchChartJsTooltip"])();
        Object(ng2_charts__WEBPACK_IMPORTED_MODULE_5__["monkeyPatchChartJsLegend"])();
    }
    ngOnInit() {
        this.loadMembers();
        this.checkPerm();
    }
    checkPerm() {
        this.apiService.loadAll('cuser').subscribe(result => {
            if (result[0].is_superuser) {
                this.loadAccounts();
            }
            else {
                this.router.navigate(['/dashboard']);
                this.toast.show("Permission denied!", { classname: 'bg-danger text-light', delay: 5000 });
            }
        });
    }
    loadAccounts() {
        this.apiService.loadAll('acnt').subscribe((result) => {
            result.forEach(e => {
                e.owner = this.findOwnerName(e.owner);
                this.addToTable(e);
                if (e.currency == "USD") {
                    this.labels.push(e.label);
                    this.singleDataSet.push(e.balance);
                }
                else {
                    this.labelsAf.push(e.label);
                    this.singleDataSetAf.push(e.balance);
                }
            });
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
        this.apiService.loadAll('pay').subscribe(result => {
            let pays = result;
            if (pays.filter(x => x.account == row.id).length > 0) {
                this.toast.show("Delete not allowed for this Account!\nThis Account has assigned Payment.", { classname: 'bg-danger text-light', delay: 5000 });
            }
            else {
                if (confirm('Are sure to delete?')) {
                    this.apiService.delete(row.id, 'acnt').subscribe(result => {
                        this.deleteUI(row);
                        this.toast.show('Account deleted successfully!', { classname: 'bg-warning text-light', delay: 5000 });
                    });
                }
            }
        });
    }
    loadMembers() {
        this.apiService.loadAll('memb').subscribe((result) => {
            this.owners = result;
        }, error => {
            console.log(error);
        });
    }
    findOwnerName(owner) {
        let o = this.owners.filter(x => x.id == owner)[0];
        if (o) {
            return o.first_name + ' ' + o.last_name;
        }
        else {
            return '';
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
                return data[key].toLowerCase().includes(term);
            };
            this.dataSource.filter = JSON.stringify([filterValue.trim().toLowerCase(), this.filterCul]);
        }
    }
    filterCulChange(data) {
        this.filterCul = data.value;
    }
};
AccountComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "accounts", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], AccountComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], AccountComponent.prototype, "msort", void 0);
AccountComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-account',
        template: __importDefault(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./account.component.css */ "./src/app/components/account/account.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AccountComponent);

let AddDialog = class AddDialog {
    constructor(apiService, toast, dialogRef, data) {
        this.apiService = apiService;
        this.toast = toast;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isFormValid = true;
        this.isNewFile = false;
        this.accountFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.fields = ['label', 'owner', 'balance', 'currency', 'desc', 'status', 'file'];
        this.loadMembers();
    }
    loadMembers() {
        this.apiService.loadAll('memb').subscribe((result) => {
            this.owners = result;
        }, error => {
            console.log(error);
        });
    }
    onChangeFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (file.type == 'image/jpeg' || file.type == 'image/png') {
                this.accountFC.get('file').setValue(file);
                this.isFormValid = true;
                this.isNewFile = true;
            }
            else {
                this.isFormValid = false;
                this.isNewFile = false;
            }
        }
    }
    createAcc() {
        let formData = this.formFieldData();
        this.apiService.create(formData, 'acnt').subscribe((result) => {
            if (result.error) {
            }
            else {
                this.toast.show('New account created successfully!', { classname: 'bg-success text-light', delay: 5000 });
                this.dialogRef.close(result);
            }
        }, (err) => {
            this.apiErr = err.error;
        });
    }
    formFieldData() {
        let formData = new FormData();
        this.fields.forEach(element => {
            if (element == "file") {
                if (this.isNewFile) {
                    formData.append(element, this.accountFC.get(element).value);
                }
            }
            else {
                formData.append(element, this.accountFC.get(element).value);
            }
        });
        return formData;
    }
};
AddDialog.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'add-dialog',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/add-dialog.html")).default,
    }),
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], AddDialog);

let EditDialog = class EditDialog {
    constructor(apiService, dialogRef, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isFormValid = true;
        this.isNewFile = false;
        this.accountFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            label: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: true }),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: '', disabled: true }),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.fields = ['label', 'owner', 'balance', 'currency', 'desc', 'status', 'file'];
        this.loadMembers();
    }
    loadMembers() {
        this.apiService.loadAll('memb').subscribe((result) => {
            this.owners = result;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        // Assign Dialog data to new variable.
        // Because it return error when trying to get data.
        this.editData = this.data;
        this.accountFC.setValue({
            label: this.editData.label,
            owner: this.editData.owner,
            currency: this.editData.currency,
            balance: this.editData.balance,
            desc: this.editData.desc,
            status: this.editData.status,
            file: this.editData.file,
        });
    }
    onUpdateFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            console.log(file);
            if (file.type == 'image/jpeg' || file.type == 'image/png') {
                this.isFormValid = true;
                this.isNewFile = true;
                this.accountFC.get('file').setValue(file);
            }
            else {
                this.isFormValid = false;
                this.isNewFile = false;
            }
        }
    }
    updateAcc(data) {
        let formData = this.formFieldData();
        console.log(formData);
        this.apiService.update(data.id, formData, 'acnt').subscribe((result) => {
            if (result.error) {
                console.log(result);
                this.apiErr = result.error;
            }
            else {
                this.dialogRef.close(result);
            }
        }, error => {
            if (error.status == 400) {
                this.apiErr = error.error;
            }
            if (error.status == 401) {
                this.dialogRef.close();
            }
        });
    }
    removeFile(data) {
    }
    formFieldData() {
        let formData = new FormData();
        this.fields.forEach(element => {
            if (element == "file") {
                if (this.isNewFile) {
                    formData.append(element, this.accountFC.get(element).value);
                }
            }
            else {
                formData.append(element, this.accountFC.get(element).value);
            }
        });
        return formData;
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
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/edit-dialog.html")).default,
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], EditDialog);



/***/ }),

/***/ "./src/app/components/account/account.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/account/account.module.ts ***!
  \******************************************************/
/*! exports provided: AccountRoutes, AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutes", function() { return AccountRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/components/account/account.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









const AccountRoutes = [{
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
    }];
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
            _account_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"],
            _account_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(AccountRoutes)
        ],
        entryComponents: [
            _account_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"],
            _account_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"],
        ],
        exports: [],
        bootstrap: []
    })
], AccountModule);



/***/ })

}]);
//# sourceMappingURL=components-account-account-module-es2015.js.map