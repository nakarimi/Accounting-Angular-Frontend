function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/adduser.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/adduser.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserAdduserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Add User</h2>\n<mat-dialog-content class=\"mat-typography\">\n          <form [formGroup]=\"regForm\" (ngSubmit)=\"authentication()\">\n              <mat-form-field>\n                <mat-label>Username</mat-label>\n                <input (change)=\"checkUsername()\" type=\"text\" autocomplete=\"off\" formControlName=\"username\" required matInput [autofocus]=\"true\"\n                  [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"regForm.get('username').errors && regForm.get('username').errors.required\">\n                  Username is required.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('username').errors && regForm.get('username').errors.minlength\">\n                  Username must be at least 5 characters long.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('username').errors && regForm.get('username').errors.maxlength\">\n                  Username must be at most 25 characters long.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('username').errors && regForm.get('username').errors.custom\">\n                  This username already exist.\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-label>Email</mat-label>\n                <input (change)=\"checkEmail()\" type=\"email\" autocomplete=\"off\" formControlName=\"email\" required matInput \n                  [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"regForm.get('email').errors && regForm.get('email').errors.required\">\n                  Email is required.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('email').errors && regForm.get('email').errors.email\">\n                  Email format is not correct.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('email').errors && regForm.get('email').errors.custom\">\n                  This email already exist.\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-label>First Name</mat-label>\n                <input type=\"text\" autocomplete=\"off\" formControlName=\"first_name\" required matInput\n                  [errorStateMatcher]=\"matcher\">\n                  <mat-error *ngIf=\"regForm.get('first_name').errors && regForm.get('first_name').errors.required\">\n                    First Name is required.\n                  </mat-error>\n                  <mat-error *ngIf=\"regForm.get('first_name').errors && regForm.get('first_name').errors.minlength\">\n                    First Name must be at least 5 characters long.\n                  </mat-error>\n                  <mat-error *ngIf=\"regForm.get('first_name').errors && regForm.get('first_name').errors.maxlength\">\n                    First Name must be at most 25 characters long.\n                  </mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                <mat-label>Last Name</mat-label>\n                <input type=\"text\" autocomplete=\"off\" formControlName=\"last_name\" required matInput \n                  [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"regForm.get('last_name').errors && regForm.get('last_name').errors.required\">\n                  Last Name is required.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('last_name').errors && regForm.get('last_name').errors.minlength\">\n                  Last Name must be at least 5 characters long.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('last_name').errors && regForm.get('last_name').errors.maxlength\">\n                  Last Name must be at most 25 characters long.\n                </mat-error>\n              </mat-form-field>\n              <div>\n                <label>Is Superuser: </label>\n                <mat-checkbox formControlName=\"is_superuser\">Yes</mat-checkbox>\n              </div>\n              <mat-form-field>\n                <mat-label>Password</mat-label>\n                <input type=\"password\" autocomplete=\"off\" formControlName=\"password\" autocomplete=\"new-password\" required\n                  matInput  [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"regForm.get('password').errors && regForm.get('password').errors.required\">\n                  Password is required.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('password').errors && regForm.get('password').errors.minlength\">\n                  Password must be at least 5 characters long.\n                </mat-error>\n                <mat-error *ngIf=\"regForm.get('password').errors && regForm.get('password').errors.maxlength\">\n                  Password must be at most 25 characters long.\n                </mat-error>\n\n              </mat-form-field>\n              <mat-form-field>\n                <mat-label>Repeat Password</mat-label>\n                <input type=\"password\" formControlName=\"conf_password\" autocomplete=\"off\" required matInput \n                  [errorStateMatcher]=\"matcher\">\n                <mat-error>\n                  Passwords do not match, please check passwords and try again.\n                </mat-error>\n              </mat-form-field>\n          \n              <button type=\"submit\" mat-button>Create</button>\n          </form>\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"m-1 text-white bg-success\" mat-raised-button mat-button (click)=\"openAddDialog()\">Add <mat-icon>add</mat-icon></button>\n\n<table width=\"100%\" mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"id\" matSortDisableClear\n  matSortDirection=\"desc\">\n\n  <!-- Number Column -->\n  <ng-container matColumnDef=\"username\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Username</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.username}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.email}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"first_name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.first_name}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"last_name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.last_name}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"is_active\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Is Active</th>\n    <td mat-cell *matCellDef=\"let row\">{{row.is_active}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"date_joined\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Date Joined</th>\n    <td mat-cell *matCellDef=\"let row\">{{ row.date_joined | date: 'MMM d, y' }}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"is_superuser\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Is Superuser</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <div [ngClass]=\"['super', 'superuser']\" *ngIf=\"row.is_superuser\">\n        <mat-icon>check_circle</mat-icon>\n        <div [ngClass]=\"'superusersync'\" (click)=\"switchSuperUser(row)\">\n          <mat-icon>sync</mat-icon>\n        </div>\n      </div>\n      <div [ngClass]=\"['nosuper', 'superuser']\" *ngIf=\"!row.is_superuser\">\n        <mat-icon>cancel</mat-icon>\n        <div [ngClass]=\"'superusersync'\" (click)=\"switchSuperUser(row)\">\n          <mat-icon>sync</mat-icon>\n        </div>\n      </div>\n      \n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"last_login\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Login</th>\n    <td mat-cell *matCellDef=\"let row\">{{ row.last_login | date: 'MMM d, y HH:MM:SS' }}</td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</table>";
    /***/
  },

  /***/
  "./src/app/components/user/user.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/user/user.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".superuser{\r\n  float: left;\r\n  width: 50px;\r\n}\r\n.superuser.super > .mat-icon {\r\n  color: chartreuse;\r\n}\r\n.superuser.nosuper > .mat-icon {\r\n  color:crimson;\r\n}\r\n.superusersync{\r\n  cursor: pointer;\r\n  display: none;\r\n  float: right;\r\n}\r\n.superuser:hover > .superusersync{\r\n  display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VwZXJ1c2Vye1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5zdXBlcnVzZXIuc3VwZXIgPiAubWF0LWljb24ge1xyXG4gIGNvbG9yOiBjaGFydHJldXNlO1xyXG59XHJcbi5zdXBlcnVzZXIubm9zdXBlciA+IC5tYXQtaWNvbiB7XHJcbiAgY29sb3I6Y3JpbXNvbjtcclxufVxyXG5cclxuLnN1cGVydXNlcnN5bmN7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59IFxyXG4uc3VwZXJ1c2VyOmhvdmVyID4gLnN1cGVydXNlcnN5bmN7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/user/user.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/user/user.component.ts ***!
    \***************************************************/

  /*! exports provided: UserComponent, AddUserComponent */

  /***/
  function srcAppComponentsUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
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


    var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/toast/toast-service */
    "./src/app/shared/toast/toast-service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(apiService, toast, router, dialog) {
        _classCallCheck(this, UserComponent);

        this.apiService = apiService;
        this.toast = toast;
        this.router = router;
        this.dialog = dialog; // Define all the variable

        this.displayedColumns = ['username', 'email', 'first_name', 'last_name', 'is_active', 'date_joined', 'last_login', 'is_superuser'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false; // Build the table data source based on table data.

        this.tableData = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tableData);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkPerm();
        }
      }, {
        key: "checkPerm",
        value: function checkPerm() {
          var _this = this;

          this.apiService.loadAll('cuser').subscribe(function (result) {
            if (result[0].is_superuser) {
              _this.loadUsers();
            } else {
              _this.router.navigate(['/dashboard']);

              _this.toast.show("Permission denied!", {
                classname: 'bg-danger text-light',
                delay: 5000
              });
            }
          });
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          var _this2 = this;

          this.apiService.loadAll('users').subscribe(function (result) {
            _this2.dataSource.data = result;
            _this2.dataSource.sort = _this2.msort;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "switchSuperUser",
        value: function switchSuperUser(data) {
          var _this3 = this;

          var msg;

          if (data.is_superuser) {
            msg = "Are you sure to revoke Superuser?";
          } else {
            msg = "Are you sure to make Superuser?";
          }

          if (confirm(msg)) {
            this.apiService.parUpdate(data.id, {
              'is_superuser': !data.is_superuser
            }, 'users').subscribe(function (result) {
              _this3.toast.show('User updated successfully!', {
                classname: 'bg-info text-light',
                delay: 2500
              });

              _this3.updateTable(data, result);
            }, function (error) {
              console.log(error);
            });
          }
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
        key: "openAddDialog",
        value: function openAddDialog() {
          var _this4 = this;

          var dialogRef = this.dialog.open(AddUserComponent, {
            maxWidth: '50%'
          });
          dialogRef.afterClosed().subscribe(function (result) {
            // Do nothing on cancel and if it return value update table.
            if (result) {
              _this4.addToTable(result);
            }
          });
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], UserComponent.prototype, "paginator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], UserComponent.prototype, "msort", void 0);

    UserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./user.component.css */
      "./src/app/components/user/user.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], UserComponent);

    var AddUserComponent = /*#__PURE__*/function () {
      function AddUserComponent(apiService, toast, router, dialogRef, _formBuilder) {
        _classCallCheck(this, AddUserComponent);

        this.apiService = apiService;
        this.toast = toast;
        this.router = router;
        this.dialogRef = dialogRef;
        this._formBuilder = _formBuilder;
        this.regForm = this._formBuilder.group({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]),
          conf_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
          first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]),
          last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25)]),
          is_superuser: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        }, {
          validator: [this.checkPasswords]
        });
      }

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "authentication",
        value: function authentication() {
          var _this5 = this;

          this.apiService.registerUser(this.regForm.value).subscribe(function (result) {
            _this5.dialogRef.close(result);
          }, function (error) {
            return console.error(error.name);
          });
        }
      }, {
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var pass = group.controls.password;
          var confirmPass = group.controls.conf_password;
          return confirmPass.setErrors(pass.value !== confirmPass.value ? {
            notEquivalent: true
          } : null);
        }
      }, {
        key: "checkUsername",
        value: function checkUsername() {
          var username = this.regForm.controls.username;
          var v = true;

          if (username.errors) {
            v = !(username.errors.required || username.errors.maxlength || username.errors.minlength);
          }

          if (username.value && v) {
            var r = this.findThisUserData('username', username.value);
            return username.setErrors(r ? {
              custom: true
            } : null);
          }
        }
      }, {
        key: "checkEmail",
        value: function checkEmail() {
          var email = this.regForm.controls.email;
          var v = true;

          if (email.errors) {
            v = !(email.errors.required || email.errors.email);
          }

          if (email.value && v) {
            var r = this.findThisUserData('email', email.value);
            return email.setErrors(r ? {
              custom: true
            } : null);
          }
        }
      }, {
        key: "findThisUserData",
        value: function findThisUserData(field, value) {
          console.log(value);
          console.log(field);
          return true;
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    AddUserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-adduser',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./adduser.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/adduser.component.html"))["default"]
    }), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/components/user/user.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/user/user.module.ts ***!
    \************************************************/

  /*! exports provided: UserRoutes, UserModule */

  /***/
  function srcAppComponentsUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutes", function () {
      return UserRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
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


    var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/components/user/user.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

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

    var UserRoutes = [{
      path: '',
      component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    }];

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"], _user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(UserRoutes)],
      entryComponents: [_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"]]
    })], UserModule);
    /***/
  }
}]);
//# sourceMappingURL=components-user-user-module-es5.js.map