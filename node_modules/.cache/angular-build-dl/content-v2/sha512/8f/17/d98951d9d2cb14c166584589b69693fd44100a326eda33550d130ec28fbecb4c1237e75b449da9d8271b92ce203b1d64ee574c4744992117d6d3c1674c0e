(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-members-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/add-dialog.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/add-dialog.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Add Member</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"memberFC\" enctype=\"multipart/form-data\"\r\n    (ngSubmit)=\"create()\">\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"memberFC.get('first_name').hasError('required')\">\r\n          First Name is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"memberFC.get('first_name').hasError('minlength')\">\r\n          First Name must be at least 3 characters long.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"memberFC.get('first_name').hasError('maxlength')\">\r\n          First Name must be at most 25 characters long.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"memberFC.get('last_name').hasError('required')\">\r\n          Last Name is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"memberFC.get('last_name').hasError('minlength')\">\r\n          Last Name must be at least 3 characters long.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"memberFC.get('last_name').hasError('maxlength')\">\r\n          Last Name must be at most 25 characters long.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"posistion\" placeholder=\"Posistion\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"memberFC.get('posistion').hasError('required')\">\r\n        Posistion is required.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <mat-label>Phone</mat-label>\r\n      <!-- <span matPrefix>07</span> -->\r\n      <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"phone\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"memberFC.get('phone').hasError('required')\">\r\n          Phone is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"memberFC.get('phone').hasError('pattern')\">\r\n          Phone must be 10 digits and start with 0.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"email\" formControlName=\"email\" placeholder=\"Email\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"memberFC.get('email').hasError('required')\">\r\n        Email is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('email').hasError('email')\">\r\n        Email format is not correct.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('email').hasError('custom')\">\r\n        This email already exist.\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-dialog-actions align=\"end\">\r\n      <button align=\"end\" type=\"submit\" mat-button \r\n        class=\"text-white\"\r\n        [ngClass]=\"{'bg-danger': memberFC.invalid, 'bg-info': memberFC.valid}\" \r\n        [disabled]=\"memberFC.invalid\" >Create</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/edit-dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/edit-dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Edit Member</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n  <form class=\"example-container\" [formGroup]=\"memberFC\" enctype=\"multipart/form-data\" (ngSubmit)=\"update(data)\">\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\"\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"memberFC.get('first_name').errors && memberFC.get('first_name').errors.required\">\r\n        First Name is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('first_name').errors && memberFC.get('first_name').errors.minlength\">\r\n        First Name must be at least 3 characters long.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('first_name').errors && memberFC.get('first_name').errors.maxlength\">\r\n        First Name must be at most 25 characters long.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"memberFC.get('last_name').errors && memberFC.get('last_name').errors.required\">\r\n        Last Name is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('last_name').errors && memberFC.get('last_name').errors.minlength\">\r\n        Last Name must be at least 3 characters long.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('last_name').errors && memberFC.get('last_name').errors.maxlength\">\r\n        Last Name must be at most 25 characters long.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"posistion\" placeholder=\"Posistion\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"memberFC.get('posistion').errors && memberFC.get('posistion').errors.required\">\r\n        Posistion is required.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"number\" formControlName=\"phone\" placeholder=\"Phone\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"memberFC.get('phone').errors && memberFC.get('phone').errors.required\">\r\n        Phone is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('phone').errors && memberFC.get('phone').errors.pattern\">\r\n        Phone must be 10 digits and start with 0.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"col-auto\">\r\n      <input matInput autocomplete=\"off\" type=\"email\" formControlName=\"email\" placeholder=\"Email\" required\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error *ngIf=\"memberFC.get('email').errors && memberFC.get('email').errors.required\">\r\n        Email is required.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('email').errors && memberFC.get('email').errors.email\">\r\n        Email format is not correct.\r\n      </mat-error>\r\n      <mat-error *ngIf=\"memberFC.get('email').errors && memberFC.get('email').errors.custom\">\r\n        This email already exist.\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-dialog-actions align=\"end\">\r\n      <button type=\"submit\" mat-button class=\"text-white\"\r\n        [ngClass]=\"{'bg-danger': memberFC.invalid, 'bg-info': memberFC.valid}\" [disabled]=\"memberFC.invalid\" >Update</button>\r\n      <button mat-button mat-dialog-close>Cancel</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</mat-dialog-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/members.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/members.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"csmr-table-actions table-actions mat-typography\">\n  <button class=\"m-1 text-white bg-success\" mat-raised-button mat-button (click)=\"openAddDialog()\">Add <mat-icon>add\n    </mat-icon></button>\n    <mat-form-field class=\"ml-2\">\n      <mat-label>Filter</mat-label>\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n    </mat-form-field>\n    <mat-form-field class=\"ml-2\">\n      <mat-label>Column</mat-label>\n      <mat-select (selectionChange)=\"filterCulChange($event)\">\n        <mat-option value=\"all\">All</mat-option>\n        <span *ngFor=\"let c of filterColumns\">\n          <mat-option [value]=\"c\" *ngIf=\"c != 'id'\" class=\"text-capitalize\">\n            {{ c.replace('_', ' ') }}\n          </mat-option>\n        </span>\n      </mat-select>\n    </mat-form-field>\n\n</div>\n\n<table width=\"100%\" mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDisableClear\n  matSortDirection=\"desc\">\n  <!-- Number Column -->\n\n  <ng-container matColumnDef=\"first_name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.first_name}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"last_name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.last_name}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"phone\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone</th>\n    <td mat-cell *matCellDef=\"let row\">0{{row.phone}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"posistion\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Posistion</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <span *ngIf=\"row.posistion\">Active</span>\n      <span *ngIf=\"!row.posistion\">Inactive</span>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef>Action</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <button class=\"m-1 text-white bg-info\" mat-raised-button mat-button (click)=\"openEditDialog(row)\" align=\"end\"\n        tabindex=\"-1\">Edit <mat-icon>edit</mat-icon></button>\n      <button class=\"m-1 text-white bg-danger\" mat-raised-button mat-button (click)=\"delete(row)\" align=\"end\"\n        tabindex=\"-1\">Delete <mat-icon>delete</mat-icon></button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</table>");

/***/ }),

/***/ "./src/app/components/members/members.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/members/members.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/members/members.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/members/members.component.ts ***!
  \*********************************************************/
/*! exports provided: MembersComponent, AddDialog, EditDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialog", function() { return AddDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialog", function() { return EditDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
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




let MembersComponent = class MembersComponent {
    constructor(apiService, dialog) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.filterCul = 'all';
        // Define all the variable
        this.displayedColumns = ['first_name', 'last_name', 'phone', 'email', 'posistion', 'id'];
        this.filterColumns = ['first_name', 'last_name', 'phone', 'email', 'posistion'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        // Build the table data source based on table data.
        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
    }
    ngOnInit() {
        this.loadMembers();
    }
    // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
    loadMembers() {
        this.apiService.loadAll('memb').subscribe((result) => {
            this.dataSource.data = result;
            this.dataSource.sort = this.msort;
        }, error => {
            console.log(error);
        });
    }
    openAddDialog() {
        const dialogRef = this.dialog.open(AddDialog, {
            maxWidth: '500px',
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
            maxWidth: '500px',
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
            this.apiService.delete(row.id, 'memb').subscribe(result => {
                this.deleteUI(row);
            });
        }
    }
    // Delete Item From UI
    deleteUI(row) {
        this.tableData = this.dataSource.data;
        let index = this.tableData.findIndex(data => data === row);
        this.tableData.splice(index, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
        this.dataSource.sort = this.msort;
    }
    addToTable(data) {
        this.tableData = this.dataSource.data;
        this.dataSource.data = this.tableData.push(data);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
        this.dataSource.sort = this.msort;
    }
    updateTable(oldRow, newRow) {
        this.tableData = this.dataSource.data;
        // Remove the old data from table.
        this.tableData = this.tableData.filter(item => item.id != oldRow.id);
        // Add update row.
        this.tableData.push(newRow);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableData);
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
MembersComponent.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
], MembersComponent.prototype, "paginator", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: false }),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
], MembersComponent.prototype, "msort", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], MembersComponent.prototype, "members", void 0);
MembersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-members',
        template: __importDefault(__webpack_require__(/*! raw-loader!./members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/members.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./members.component.css */ "./src/app/components/members/members.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
], MembersComponent);

let AddDialog = class AddDialog {
    constructor(apiService, dialogRef, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.memberFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=\D*\d).{9}$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            posistion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    create() {
        this.apiService.create(this.memberFC.value, 'memb').subscribe((result) => {
            if (result.error) {
                console.log(result.error);
            }
            else {
                this.dialogRef.close(result);
            }
        }, error => {
            // this.dialogRef.close();
        });
    }
};
AddDialog.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
];
AddDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'add-dialog',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/add-dialog.html")).default,
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], AddDialog);

let EditDialog = class EditDialog {
    constructor(apiService, dialogRef, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.memberFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(25)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^(?=\D*\d).{9}$/)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            posistion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    ngOnInit() {
        // Assign Dialog data to new variable.
        // Because it return error when trying to get data.
        this.editData = this.data;
        this.memberFC.setValue({
            first_name: this.editData.first_name,
            last_name: this.editData.last_name,
            phone: this.editData.phone,
            email: this.editData.email,
            posistion: this.editData.posistion,
        });
    }
    update(data) {
        this.apiService.update(data.id, this.memberFC.value, 'memb').subscribe((result) => {
            if (result.error) {
                console.log(result.error);
            }
            else {
                this.dialogRef.close(result);
            }
        }, error => {
            // this.dialogRef.close();
        });
    }
};
EditDialog.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
];
EditDialog = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'edit-dialog',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/members/edit-dialog.html")).default,
    }),
    __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
], EditDialog);



/***/ }),

/***/ "./src/app/components/members/members.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/members/members.module.ts ***!
  \******************************************************/
/*! exports provided: routes, MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members.component */ "./src/app/components/members/members.component.ts");
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






const routes = [{
        path: '',
        component: _members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"]
    }];
let MembersModule = class MembersModule {
};
MembersModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"],
            _members_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"],
            _members_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        entryComponents: [
            _members_component__WEBPACK_IMPORTED_MODULE_3__["AddDialog"],
            _members_component__WEBPACK_IMPORTED_MODULE_3__["EditDialog"],
        ]
    })
], MembersModule);



/***/ })

}]);
//# sourceMappingURL=components-members-members-module-es2015.js.map