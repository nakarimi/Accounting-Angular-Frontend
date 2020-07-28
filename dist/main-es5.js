function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<router-outlet>\r\n  <app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts>\r\n  <app-spinner></app-spinner>\r\n</router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <mat-card >\r\n        <mat-card-header>\r\n            <div mat-card-avatar class=\"example-header-image\" style=\"width: 100%; text-align: center;height: 100px;\">\r\n                <img src=\"../../assets/images/background/user-info.jpg\" alt=\"\">\r\n            </div>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n        <form *ngIf=\"loginAction\" [formGroup]=\"authForm\" (ngSubmit)=\"authentication()\">\r\n                <mat-form-field>\r\n                    <input type=\"text\" formControlName=\"username\" required placeholder=\"Username\" matInput />\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                    <input type=\"password\" formControlName=\"password\" required placeholder=\"Password\" matInput />\r\n                </mat-form-field>\r\n                <button *ngIf=\"authForm.valid\" class=\"m-1 text-white bg-success\" type=\"submit\" mat-button>Login</button>\r\n                <button *ngIf=\"authForm.invalid\" class=\"m-1 text-white bg-danger\" disabled mat-button>Login</button>\r\n            </form>\r\n            <form *ngIf=\"!loginAction && !resetToken\" [formGroup]=\"forgotPassForm\" (ngSubmit)=\"forgotPassword()\">\r\n                <mat-form-field>\r\n                    <mat-label>Email</mat-label>\r\n                    <input type=\"email\" autocomplete=\"off\" formControlName=\"email\" required matInput />\r\n                </mat-form-field>\r\n\r\n                <button *ngIf=\"forgotPassForm.valid\" class=\"m-1 text-white bg-success\" type=\"submit\" mat-button>Send</button>\r\n                <button *ngIf=\"forgotPassForm.invalid\" class=\"m-1 text-white bg-danger\" disabled type=\"submit\" mat-button>Send</button>\r\n            </form>\r\n            <form *ngIf=\"!loginAction && resetToken\" (ngSubmit)=\"resetforgotPassword()\" [formGroup]=\"resetPassForm\">\r\n                <mat-form-field>\r\n                <mat-label>Password</mat-label>\r\n                <input type=\"password\" autocomplete=\"off\" formControlName=\"password\" required matInput \r\n                    [errorStateMatcher]=\"matcher\">\r\n                    <mat-error *ngIf=\"resetPassForm.get('password').errors && resetPassForm.get('password').errors.required\">\r\n                        Password is required.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"resetPassForm.get('password').errors && resetPassForm.get('password').errors.minlength\">\r\n                        This password is too short. It must contain at least 8 characters.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"resetPassForm.get('password').errors && resetPassForm.get('password').errors.maxlength\">\r\n                        Password must be at most 25 characters long.\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"resetPassForm.get('password').errors && resetPassForm.get('password').errors.pattern && !resetPassForm.get('password').errors.minlength\">\r\n                        This password is too common, use atleast one number, upper and lower char.\r\n                    </mat-error>\r\n            </mat-form-field>\r\n            <br>\r\n            <button *ngIf=\"resetPassForm.valid\" class=\"m-1 text-white bg-success\" type=\"submit\" mat-button>Send</button>\r\n            <button *ngIf=\"resetPassForm.invalid\" class=\"m-1 text-white bg-danger\" disabled type=\"submit\" mat-button>Send</button>\r\n        </form>\r\n        <span class=\"float-right loginActionToggle m-2\" (click)=\"loginActionToggle()\">\r\n            <a class=\"cus-cursor-pointer m-2\" *ngIf=\"!loginAction\">Login</a>\r\n            <a class=\"cus-cursor-pointer m-2\" *ngIf=\"loginAction\">Forgot Password</a>\r\n        </span>\r\n    </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n<ng-template #snackBarTemplate>\r\n    Hi\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mat-typography \">\n  <form [formGroup]=\"reportFC\">\n    <div class=\"col-5\">\n\n    <mat-form-field>\n      <mat-label>Start</mat-label>\n      <input matInput [max]=\"(endDate)? endDate.value : ''\" [matDatepicker]=\"pickerStart\" formControlName=\"startDate\"\n        required>\n      <mat-datepicker-toggle matSuffix [for]=\"pickerStart\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerStart></mat-datepicker>\n    </mat-form-field>\n    </div>\n    <div class=\"col-5\">\n\n    <mat-form-field>\n      <mat-label>End</mat-label>\n      <input matInput [min]=\"(startDate)? startDate.value : ''\" [matDatepicker]=\"pickerEnd\" formControlName=\"endDate\"\n        required>\n      <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n      <mat-datepicker #pickerEnd></mat-datepicker>\n    </mat-form-field>\n    </div>\n    <div class=\"col-5\">\n\n    <mat-form-field>\n      <mat-label>Currency</mat-label>\n      <mat-select formControlName=\"currency\" required>\n        <mat-option *ngFor=\"let i of ['USD', 'AF']\" [value]=\"i\">\n          {{i}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    </div>\n  </form>\n  <div class=\"col-auto\">\n    <button type=\"submit\" class=\"m-1 bg-info text-white\" [ngClass]=\"{'bg-danger': reportFC.invalid}\" [disabled]=\"reportFC.invalid\" (click)=\"invoiceReport()\" mat-raised-button mat-button>Invoice Report</button>\n    <button type=\"submit\" class=\"m-1 bg-info text-white\" [ngClass]=\"{'bg-danger': reportFC.invalid}\" [disabled]=\"reportFC.invalid\" (click)=\"billReport()\" mat-raised-button mat-button>Bill Report</button>\n    <button type=\"submit\" class=\"m-1 bg-info text-white\" [ngClass]=\"{'bg-danger': reportFC.invalid}\" [disabled]=\"reportFC.invalid\" (click)=\"paymentReport()\" mat-raised-button mat-button>Payment Report</button>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsFullFullComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div class=\"main-container\"> \r\n    <!-- ============================================================== -->\r\n    <!-- Topbar - style you can find in header.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-toolbar color=\"primary\" class=\"topbar telative\">\r\n        <!-- ============================================================== -->\r\n        <!-- sidebar toggle -->\r\n        <!-- ============================================================== -->\r\n        \r\n        <button mat-icon-button (click)=\"snav.toggle()\" value=\"sidebarclosed\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n\r\n        \r\n\r\n\r\n        <span fxFlex></span>\r\n        <!-- ============================================================== -->\r\n        <!-- app header component - style you can find in header.scss / header.component.ts-->\r\n        <!-- ============================================================== -->\r\n        <app-header></app-header>\r\n    </mat-toolbar>\r\n    <!-- ============================================================== -->\r\n    <!-- End Topbar - style you can find in pages.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 0 : 0\">\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav #snav id=\"snav\" class=\"dark-sidebar pl-xs\" [mode]=\"mobileQuery.matches ? 'side' : 'over'\" fixedTopGap=\"0\" [opened]=\"mobileQuery.matches\" [disableClose]=\"mobileQuery.matches\"  >\r\n            <app-sidebar></app-sidebar>\r\n        </mat-sidenav>\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        \r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav-content class=\"page-wrapper\">\r\n                 \r\n                <div class=\"page-content\">\r\n                   \r\n                        <router-outlet><app-spinner></app-spinner></router-outlet>\r\n                    \r\n                </div>    \r\n               \r\n        </mat-sidenav-content>\r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n    </mat-sidenav-container>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/header.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/header.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsFullHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "        \r\n<!-- ============================================================== -->\r\n<!-- Profile - style you can find in header.scss -->\r\n<!-- ============================================================== -->\r\n<button [matMenuTriggerFor]=\"profile\" mat-icon-button class=\"m-r-5\">\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n<mat-menu #profile=\"matMenu\" class=\"mymegamenu\">\r\n    <!-- <button mat-menu-item>\r\n        <mat-icon>settings</mat-icon> Settings </button> -->\r\n    <button mat-menu-item (click)=\"goToUserProfile(false)\">\r\n        <mat-icon>account_box</mat-icon> Profile </button>\r\n        \r\n    <button mat-menu-item (click)=\"goToUserProfile(true)\">\r\n        <mat-icon>lock</mat-icon> Change Password\r\n    </button>\r\n    <a *ngxPermissionsOnly=\"['ADMIN']\" mat-menu-item href=\"/user\">\r\n        <mat-icon>people_alt</mat-icon> Users\r\n    </a>\r\n    <button mat-menu-item (click)=\"logOutUser()\">\r\n        <mat-icon>exit_to_app</mat-icon> Sign Out </button>\r\n</mat-menu>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/profile.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/profile.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsFullHeaderProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content *ngIf=\"!dData.type\" class=\"mat-typography\">\r\n  <h2 mat-dialog-title>Profile</h2>\r\n  <form [formGroup]=\"profileFC\" enctype=\"multipart/form-data\" (ngSubmit)=\"profileOperation()\">\r\n    <mat-form-field>\r\n      <mat-label>Username</mat-label>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"username\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"profileFC.get('username').errors && profileFC.get('username').errors.required\">\r\n          Username is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"profileFC.get('username').errors && profileFC.get('username').errors.minlength\">\r\n          Username must be at least 3 characters long.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"profileFC.get('username').errors && profileFC.get('username').errors.maxlength\">\r\n          Username must be at most 25 characters long.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Email</mat-label>\r\n      <input matInput autocomplete=\"off\" type=\"email\" formControlName=\"email\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"profileFC.get('email').errors && profileFC.get('email').errors.required\">\r\n          Email is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"profileFC.get('email').errors && profileFC.get('email').errors.email\">\r\n          Use email with correct format.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>First Name</mat-label>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"first_name\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"profileFC.get('first_name').errors && profileFC.get('first_name').errors.required\">\r\n          First Name is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"profileFC.get('first_name').errors && profileFC.get('first_name').errors.minlength\">\r\n          First Name must be at least 3 characters long.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"profileFC.get('first_name').errors && profileFC.get('first_name').errors.maxlength\">\r\n          First Name must be at most 25 characters long.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Last Name</mat-label>\r\n      <input matInput autocomplete=\"off\" type=\"text\" formControlName=\"last_name\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"profileFC.get('last_name').errors && profileFC.get('last_name').errors.required\">\r\n          Last Name is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"profileFC.get('last_name').errors && profileFC.get('last_name').errors.minlength\">\r\n          Last Name must be at least 3 characters long.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"profileFC.get('last_name').errors && profileFC.get('last_name').errors.maxlength\">\r\n          Last Name must be at most 25 characters long.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <div class=\"m-1\">\r\n      <button type=\"submit\" mat-button class=\"m-r-10 text-white\"\r\n        [ngClass]=\"{'bg-danger': profileFC.invalid, 'bg-info': profileFC.valid}\" [disabled]=\"profileFC.invalid\">Update</button>\r\n      <button mat-button mat-dialog-close class=\"bg-warning text-white\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-dialog-content>\r\n<mat-dialog-content *ngIf=\"dData.type\" class=\"mat-typography\">\r\n  <h2 mat-dialog-title>Change Password</h2>\r\n  <form [formGroup]=\"chPassFC\" enctype=\"multipart/form-data\" (ngSubmit)=\"profileOperation('pass')\">\r\n    <mat-form-field>\r\n      <mat-label>Old Password</mat-label>\r\n      <input matInput autocomplete=\"off\" type=\"password\" formControlName=\"oldpassword\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"chPassFC.get('oldpassword').errors && chPassFC.get('oldpassword').errors.required\">\r\n          Old Password is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"chPassFC.get('oldpassword').errors && chPassFC.get('oldpassword').errors.minlength\">\r\n          Old Password must be at least 3 characters long.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"chPassFC.get('oldpassword').errors && chPassFC.get('oldpassword').errors.maxlength\">\r\n          Old Password must be at most 25 characters long.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>New Password</mat-label>\r\n      <input matInput autocomplete=\"off\" type=\"password\" formControlName=\"password\"\r\n        [errorStateMatcher]=\"matcher\">\r\n        <mat-error *ngIf=\"chPassFC.get('password').errors && chPassFC.get('password').errors.required\">\r\n          Password is required.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"chPassFC.get('password').errors && chPassFC.get('password').errors.minlength\">\r\n          This password is too short. It must contain at least 8 characters.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"chPassFC.get('password').errors && chPassFC.get('password').errors.maxlength\">\r\n          Password must be at most 25 characters long.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"chPassFC.get('password').errors && chPassFC.get('password').errors.pattern\">\r\n          This password is too common, use atleast one number, upper and lower char.\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Confirm Password</mat-label>\r\n      <input matInput autocomplete=\"off\" type=\"password\" formControlName=\"confirmPassword\"\r\n        [errorStateMatcher]=\"matcher\">\r\n      <mat-error>\r\n        Passwords do not match, please check passwords and try again.\r\n      </mat-error>\r\n    </mat-form-field>\r\n    <div class=\"m-1\">\r\n      <button type=\"submit\" mat-button class=\"m-r-10 text-white\" [ngClass]=\"{'bg-danger': chPassFC.invalid, 'bg-info': chPassFC.valid}\" [disabled]=\"chPassFC.invalid\">Update</button>\r\n      <button mat-button mat-dialog-close class=\"bg-warning text-white\">Cancel</button>\r\n    </div>\r\n  </form>\r\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/sidebar/sidebar.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/sidebar/sidebar.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsFullSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- ============================================================== -->\r\n<!-- sidebar -->\r\n<!-- ============================================================== -->\r\n<mat-nav-list appAccordion>\r\n    <mat-list-item appAccordionLink *ngFor=\"let menuitem of menuItems.getMenuitem()\" routerLinkActive=\"selected\" group=\"{{menuitem.state}}\">\r\n        <span *ngxPermissionsOnly=\"menuitem.perm\">\r\n            <a [ngClass]=\"'sidebar-menu'\" appAccordionToggle [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\r\n                <mat-icon>{{ menuitem.icon }}</mat-icon> \r\n                <span [ngClass]=\"'sidebar-menu-text'\">{{ menuitem.name }}</span> \r\n            </a>\r\n        </span>\r\n        <!-- <span class=\"sub-item\">\r\n            <mat-list-item appAccordionLink *ngFor=\"let subitem of menuitem.submenu\" routerLinkActive=\"selected\"\r\n                group=\"{{subitem.state}}\">\r\n                <a [ngClass]=\"'sidebar-menu'\" appAccordionToggle [routerLink]=\"['/', subitem.state]\"\r\n                    *ngIf=\"subitem.type === 'link'\">\r\n                    <span [ngClass]=\"'sidebar-sub-menu-text'\">{{ subitem.name }}</span>\r\n                </a>\r\n            </mat-list-item>\r\n        </span> -->\r\n    </mat-list-item>\r\n</mat-nav-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toast/toast-global.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toast/toast-global.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedToastToastGlobalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>Please click one of the button to see a Toast being displayed in the top right corner of your screen:</p>\r\n<button class=\"btn btn-primary\" (click)=\"showStandard(msg)\" ngbTooltip=\"Will disappear in 5s\">Standard toast</button>&nbsp;\r\n<button class=\"btn btn-success\" (click)=\"showSuccess(msg)\" ngbTooltip=\"Will disappear in 10s\">Success toast</button>&nbsp;\r\n\r\n<ng-template #dangerTpl>\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#fff\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n    <path\r\n      d=\"M10.872 6.831l1.695 3.904 3.654-1.561-1.79 3.426 3.333.954-3.417 1.338 2.231 4.196-4.773-2.582-2.869 2.287.413-3.004-3.792-.726 2.93-1.74-1.885-2.512 3.427.646.843-4.626zm-.786-6.831l-1.665 9.119-6.512-1.228 3.639 4.851-5.548 3.294 7.108 1.361-.834 6.076 5.742-4.577 9.438 5.104-4.288-8.064 6.834-2.677-6.661-1.907 3.25-6.22-6.98 2.982-3.523-8.114z\" />\r\n    </svg>\r\n  Danger Danger !\r\n</ng-template>\r\n<button class=\"btn btn-danger\" (click)=\"showDanger(dangerTpl, msg)\" ngbTooltip=\"Will disappear in 15s\">Danger\r\n  toast</button>&nbsp;\r\n\r\n<app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestTestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>test works!</p>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

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

    var ApiService = /*#__PURE__*/function () {
      function ApiService(httpClient, cookieService, router) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.router = router;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverUrl;
      }

      _createClass(ApiService, [{
        key: "getToken",
        value: function getToken(authData) {
          var body = JSON.stringify(authData);
          var token = this.httpClient.post("".concat(this.apiUrl, "token/"), body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          });
          return token;
        }
      }, {
        key: "registerUser",
        value: function registerUser(authData) {
          var body = JSON.stringify(authData);
          var h;
          h = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Authorization": "Bearer " + this.cookieService.get('auth-token')
            })
          };
          var user = this.httpClient.post("".concat(this.apiUrl, "users/"), body, h);
          return user;
        } // Get all companies from backend.

      }, {
        key: "loadAll",
        value: function loadAll(entity) {
          var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var page = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var requestUrl = "".concat(this.apiUrl).concat(entity, "/");
          var h;
          h = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Authorization": "Bearer " + this.cookieService.get('auth-token')
            })
          };
          return this.httpClient.get(requestUrl, h);
        } // Delete item based on content type.

      }, {
        key: "delete",
        value: function _delete(id, type) {
          var resp = this.httpClient["delete"]("".concat(this.apiUrl).concat(type, "/").concat(id, "/"), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Content-Type": "application/json",
              "Authorization": "Bearer " + this.cookieService.get('auth-token')
            }),
            'responseType': 'text'
          });
          return resp;
        } // Delete item based on content type.

      }, {
        key: "update",
        value: function update(id, data, type) {
          return this.httpClient.put("".concat(this.apiUrl + type, "/").concat(id, "/"), data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Authorization": "Bearer " + this.cookieService.get('auth-token')
            })
          });
        }
      }, {
        key: "parUpdate",
        value: function parUpdate(id, data, type) {
          return this.httpClient.patch("".concat(this.apiUrl + type, "/").concat(id, "/"), data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Authorization": "Bearer " + this.cookieService.get('auth-token')
            })
          });
        } // Delete item based on content type.

      }, {
        key: "create",
        value: function create(data, type) {
          return this.httpClient.post("".concat(this.apiUrl + type, "/"), data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              "Authorization": "Bearer " + this.cookieService.get('auth-token')
            })
          });
        }
      }, {
        key: "retrive",
        value: function retrive(entity, id) {
          var requestUrl = "".concat(this.apiUrl).concat(entity, "?entity_id=").concat(id);
          return this.httpClient.get(requestUrl);
        }
      }, {
        key: "refreshToken",
        value: function refreshToken() {
          var _this = this;

          var formdata = {
            "refresh": this.cookieService.get('refresh-token')
          };
          var respData = this.httpClient.post("".concat(this.apiUrl, "token/refresh/"), formdata, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          });
          respData.subscribe(function (result) {
            // Update the access token again.
            var date = new Date();
            date.setTime(date.getTime() + 600 * 1000);

            _this.cookieService.set("auth-token", result["access"], date);
          }, function (error) {
            _this.router.navigate(['/login']);
          });
          return respData;
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], ApiService.prototype, "paginator", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], ApiService.prototype, "sort", void 0);

    ApiService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: "root"
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ngb-toasts {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    top: unset;\r\n}\r\n\r\n.toast:not(:last-child) {\r\n  display: none !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ2ItdG9hc3RzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IHVuc2V0O1xyXG59XHJcblxyXG4udG9hc3Q6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");

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

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cookieService, api) {
        _classCallCheck(this, AppComponent);

        this.cookieService = cookieService;
        this.api = api;
        this.title = 'accountingAng';
        this.perm = ["GUEST"];
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          this.cookieService["delete"]('auth-token');
          console.log('Logout Successfully!');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layouts/full/full.component */
    "./src/app/layouts/full/full.component.ts");
    /* harmony import */


    var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layouts/full/header/header.component */
    "./src/app/layouts/full/header/header.component.ts");
    /* harmony import */


    var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layouts/full/sidebar/sidebar.component */
    "./src/app/layouts/full/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./material-module */
    "./src/app/material-module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/spinner.component */
    "./src/app/shared/spinner.component.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _http_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./http-error.interceptor */
    "./src/app/http-error.interceptor.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _shared_toast_toasts_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/toast/toasts-container.component */
    "./src/app/shared/toast/toasts-container.component.ts");
    /* harmony import */


    var _shared_toast_toast_global_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/toast/toast-global.module */
    "./src/app/shared/toast/toast-global.module.ts");
    /* harmony import */


    var _shared_toast_toast_global_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/toast/toast-global.component */
    "./src/app/shared/toast/toast-global.component.ts");
    /* harmony import */


    var ngx_permissions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-permissions */
    "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
    /* harmony import */


    var _test_test_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./test/test.component */
    "./src/app/test/test.component.ts");
    /* harmony import */


    var _components_report_report_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/report/report.component */
    "./src/app/components/report/report.component.ts");

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
      pathMatch: 'full',
      redirectTo: 'dashboard'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_9__["FullComponent"], _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["AppHeaderComponent"], _shared_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"], _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["AppSidebarComponent"], _shared_toast_toast_global_component__WEBPACK_IMPORTED_MODULE_21__["NgbdToastGlobal"], _shared_toast_toasts_container_component__WEBPACK_IMPORTED_MODULE_19__["ToastsContainer"], _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["ProfileDialog"], _test_test_component__WEBPACK_IMPORTED_MODULE_23__["TestComponent"], _components_report_report_component__WEBPACK_IMPORTED_MODULE_24__["ReportComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_16__["AuthModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"]), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), ngx_permissions__WEBPACK_IMPORTED_MODULE_22__["NgxPermissionsModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _shared_toast_toast_global_module__WEBPACK_IMPORTED_MODULE_20__["NgbdToastGlobalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _http_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["HttpErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [_layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_10__["ProfileDialog"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutes */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony import */


    var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./layouts/full/full.component */
    "./src/app/layouts/full/full.component.ts");
    /* harmony import */


    var _components_report_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/report/report.component */
    "./src/app/components/report/report.component.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppRoutes = [{
      path: '',
      component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
      children: [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: "report",
        component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_1__["ReportComponent"]
      }, {
        path: 'dashboard',
        // component: DashboardComponent,
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-dashboard-dashboard-module */
          [__webpack_require__.e("default~components-account-account-module~components-dashboard-dashboard-module"), __webpack_require__.e("components-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./components/dashboard/dashboard.module */
          "./src/app/components/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: 'account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-account-account-module */
          [__webpack_require__.e("default~components-account-account-module~components-dashboard-dashboard-module"), __webpack_require__.e("components-account-account-module")]).then(__webpack_require__.bind(null,
          /*! ./components/account/account.module */
          "./src/app/components/account/account.module.ts")).then(function (m) {
            return m.AccountModule;
          });
        }
      }, {
        path: 'customer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-customer-customer-module */
          "components-customer-customer-module").then(__webpack_require__.bind(null,
          /*! ./components/customer/customer.module */
          "./src/app/components/customer/customer.module.ts")).then(function (m) {
            return m.CustomerModule;
          });
        }
      }, {
        path: 'vendor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-vendor-vendor-module */
          "components-vendor-vendor-module").then(__webpack_require__.bind(null,
          /*! ./components/vendor/vendor.module */
          "./src/app/components/vendor/vendor.module.ts")).then(function (m) {
            return m.VendorModule;
          });
        }
      }, {
        path: 'invoice',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-invoice-invoice-module */
          "components-invoice-invoice-module").then(__webpack_require__.bind(null,
          /*! ./components/invoice/invoice.module */
          "./src/app/components/invoice/invoice.module.ts")).then(function (m) {
            return m.InvoiceModule;
          });
        }
      }, {
        path: 'bill',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-bill-bill-module */
          "components-bill-bill-module").then(__webpack_require__.bind(null,
          /*! ./components/bill/bill.module */
          "./src/app/components/bill/bill.module.ts")).then(function (m) {
            return m.BillModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-payment-payment-module */
          "components-payment-payment-module").then(__webpack_require__.bind(null,
          /*! ./components/payment/payment.module */
          "./src/app/components/payment/payment.module.ts")).then(function (m) {
            return m.PaymentModule;
          });
        }
      }, {
        path: 'trans',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-transaction-transaction-module */
          "components-transaction-transaction-module").then(__webpack_require__.bind(null,
          /*! ./components/transaction/transaction.module */
          "./src/app/components/transaction/transaction.module.ts")).then(function (m) {
            return m.TransactionModule;
          });
        }
      }, {
        path: 'user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-user-user-module */
          "components-user-user-module").then(__webpack_require__.bind(null,
          /*! ./components/user/user.module */
          "./src/app/components/user/user.module.ts")).then(function (m) {
            return m.UserModule;
          });
        }
      }, {
        path: 'members',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-members-members-module */
          "components-members-members-module").then(__webpack_require__.bind(null,
          /*! ./components/members/members.module */
          "./src/app/components/members/members.module.ts")).then(function (m) {
            return m.MembersModule;
          });
        }
      }]
    }];
    /***/
  },

  /***/
  "./src/app/auth/auth.component.css":
  /*!*****************************************!*\
    !*** ./src/app/auth/auth.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthAuthComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body{\r\n  background-color: rgba(0, 0, 0, 0.14);\r\n}\r\n.align-items-center {\r\n  max-width: 400px;\r\n}\r\n.example-header-image {\r\n  /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\r\n  background-size: cover;\r\n}\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  min-height: 100vh;\r\n}\r\n.mat-card {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n.mat-form-field {\r\n  display: block;\r\n  min-width: 300px;\r\n}\r\nmat-card-title,\r\nmat-card-content {\r\n  /* display: flex; */\r\n  justify-content: center;\r\n}\r\n.error {\r\n  padding: 16px;\r\n  /* width: 300px; */\r\n  color: white;\r\n  background-color: red;\r\n}\r\n.loginActionToggle{\r\n  font-size: 12px;\r\n}\r\n.button {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.mat-form-field-infix {\r\n  display: block;\r\n  position: relative;\r\n  flex: auto;\r\n  min-width: 0;\r\n  width: 180px;\r\n}\r\n.mat-card {\r\n    background: #fafafa;\r\n  }\r\n.mat-card:not([class*=mat-elevation-z]) {\r\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12 ) !important;\r\n}\r\nbody{\r\n  background: transparent !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UseUZBQXlGO0VBQ3pGLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBOztFQUVFLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxxSUFBcUk7QUFDekk7QUFDQTtFQUNFLGtDQUFrQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE0KTtcclxufVxyXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpOyAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUsXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4ubG9naW5BY3Rpb25Ub2dnbGV7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleDogYXV0bztcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gIH1cclxuICAubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyICkgIWltcG9ydGFudDtcclxufVxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent, AutofocusDirective, SnakComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function () {
      return AutofocusDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnakComponent", function () {
      return SnakComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/toast/toast-service */
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

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(apiService, cookieService, http, activatedRoute, router, _snackBar, toast) {
        _classCallCheck(this, AuthComponent);

        this.apiService = apiService;
        this.cookieService = cookieService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._snackBar = _snackBar;
        this.toast = toast;
        this.loginAction = true;
        this.message = '';
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.resetPassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])
        });
        this.forgotPassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email)
        });
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.apiService.test().subscribe();
          // if (this.cookieService.check('auth-token')) {
          //   this.router.navigate(['/dashboard']);
          // }
        }
      }, {
        key: "authentication",
        value: function authentication() {
          if (this.loginAction) {
            this.getTokenSubscriber();
          }
        }
      }, {
        key: "getTokenSubscriber",
        value: function getTokenSubscriber() {
          var _this2 = this;

          this.message = '';
          this.apiService.getToken(this.authForm.value).subscribe(function (result) {
            if (result["access"] != 'undefined') {
              var date = new Date(); // Set expiration time for the cookie.

              date.setTime(date.getTime() + 6000 * 1000);

              _this2.cookieService.set("auth-token", result["access"], date);

              date.setTime(date.getTime() + 60000 * 1000);

              _this2.cookieService.set("refresh-token", result["refresh"], date);

              _this2._snackBar.openFromComponent(SnakComponent, {
                duration: 2000
              }); // this.message = {text: 'Logged In Successfully!', type: 'accent'};


              setTimeout(function () {
                _this2.router.navigate(['/dashboard']);
              }, 2000);
            }
          }, function (error) {
            var msg = '';

            if (error.error['password']) {
              msg = "Password: " + error.error['password'];
            } else if (error.error['username']) {
              msg = "Username: " + error.error['username'];
            }

            _this2.message = {
              text: msg,
              type: 'danger'
            };
          });
        }
      }, {
        key: "loginActionToggle",
        value: function loginActionToggle() {
          if (this.loginAction) {
            this.loginAction = false;
          } else {
            this.loginAction = true;
          }
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var _this3 = this;

          var data = this.forgotPassForm.value;
          var sendToken = this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].serverUrl, "password-reset/"), data);
          sendToken.subscribe(function (result) {
            var req = _this3.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].serverUrl, "users/reset-token?email=") + data.email);

            req.subscribe(function (result) {
              _this3.resetToken = result;
            });
          });
        }
      }, {
        key: "resetforgotPassword",
        value: function resetforgotPassword() {
          var _this4 = this;

          var sendToken = this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].serverUrl, "password-reset/confirm/"), {
            token: this.resetToken,
            password: this.resetPassForm.value.password
          });
          sendToken.subscribe(function (result) {
            _this4.loginAction = true;

            _this4.toast.show("Password changed, please login!", {
              classname: 'bg-success text-light',
              delay: 5000
            });
          });
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], AuthComponent.prototype, "loginAction", void 0);

    AuthComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-auth',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./auth.component.css */
      "./src/app/auth/auth.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]])], AuthComponent);

    var AutofocusDirective = /*#__PURE__*/function () {
      function AutofocusDirective(el) {
        _classCallCheck(this, AutofocusDirective);

        this.el = el;
      }

      _createClass(AutofocusDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._autofocus || typeof this._autofocus === "undefined") this.el.nativeElement.focus(); //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
        }
      }, {
        key: "autofocus",
        set: function set(condition) {
          this._autofocus = condition != false;
        }
      }]);

      return AutofocusDirective;
    }();

    AutofocusDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], AutofocusDirective.prototype, "autofocus", null);

    AutofocusDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[autofocus]'
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], AutofocusDirective);

    var SnakComponent = function SnakComponent() {
      _classCallCheck(this, SnakComponent);
    };

    SnakComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'snack-bar-component-login',
      template: '<span>Logged in successfully!</span>',
      styles: ["\n    span{\n      style: white;\n    }"]
    })], SnakComponent);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../material-module */
    "./src/app/material-module.ts");

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
      path: 'login',
      component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
    }];

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_3__["SnakComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
      entryComponents: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["SnakComponent"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/components/report/report.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/report/report.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsReportReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/report/report.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/report/report.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppComponentsReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var export_to_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! export-to-csv */
    "./node_modules/export-to-csv/build/index.js");
    /* harmony import */


    var export_to_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(export_to_csv__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

    var ReportComponent = /*#__PURE__*/function () {
      function ReportComponent(api, router, toast) {
        _classCallCheck(this, ReportComponent);

        this.api = api;
        this.router = router;
        this.toast = toast;
        this.reportFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.paymentsForCSV = [];
        this.invoices = [];
        this.bills = [];
        this.accounts = [];
        this.customers = [];
        this.vendors = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en');
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkPerm();
        }
      }, {
        key: "checkPerm",
        value: function checkPerm() {
          var _this5 = this;

          this.api.loadAll('cuser').subscribe(function (result) {
            if (!result[0].is_superuser) {
              _this5.router.navigate(['/dashboard']);

              _this5.toast.show("Permission denied!", {
                classname: 'bg-danger text-light',
                delay: 5000
              });
            }
          });
        }
      }, {
        key: "invoiceReport",
        value: function invoiceReport() {
          var _this6 = this;

          var start = this.pipe.transform(this.reportFC.value.startDate, 'yyyy-MM-dd');
          var end = this.pipe.transform(this.reportFC.value.endDate, 'yyyy-MM-dd');
          var header = ["ID", "Inv number", "Currency", "Total Price", "Balance", "Due date", "Status", "Created_at", "Updated_at", "Customer"];
          var filename = "Invoices (From " + start + ") (To " + end + ")";
          var query = 'inv?start=' + start + '&end=' + end + '&curr=' + this.reportFC.value.currency + '&';
          this.api.loadAll(query).subscribe(function (result) {
            _this6.invoices = result;

            _this6.api.loadAll('csmr').subscribe(function (result) {
              _this6.customers = result;

              _this6.invoices.forEach(function (e, k) {
                var c = _this6.customers.filter(function (x) {
                  return x.id == e.customer;
                })[0];

                if (c && c != undefined) {
                  _this6.invoices[k].customer = c.label;
                } else {
                  _this6.invoices[k].customer = "-";
                }
              });

              _this6.exportCsv(filename, _this6.invoices, header);
            });
          });
        }
      }, {
        key: "billReport",
        value: function billReport() {
          var _this7 = this;

          var start = this.pipe.transform(this.reportFC.value.startDate, 'yyyy-MM-dd');
          var end = this.pipe.transform(this.reportFC.value.endDate, 'yyyy-MM-dd');
          var header = ["ID", "Bill number", "Currency", "Total price", "Balance", "Due date", "Status", "Created", "Updated", "Vendor"];
          var filename = "Bills (From " + start + ") (To " + end + ")";
          var query = 'bil?start=' + start + '&end=' + end + '&curr=' + this.reportFC.value.currency + '&';
          this.api.loadAll(query).subscribe(function (result) {
            _this7.bills = result;

            _this7.api.loadAll('vdr').subscribe(function (result) {
              _this7.vendors = result;

              _this7.bills.forEach(function (e, k) {
                var v = _this7.vendors.filter(function (x) {
                  return x.id == e.vendor;
                })[0];

                if (v && v != undefined) {
                  _this7.bills[k].vendor = v.label;
                } else {
                  _this7.bills[k].vendor = "-";
                }
              });

              _this7.exportCsv(filename, _this7.bills, header);
            });
          });
        }
      }, {
        key: "exportPayments",
        value: function exportPayments() {
          var _this8 = this;

          var start = this.pipe.transform(this.reportFC.value.startDate, 'yyyy-MM-dd');
          var end = this.pipe.transform(this.reportFC.value.endDate, 'yyyy-MM-dd');
          var header = ['ID', 'Label', 'Type', 'Currency', "Amount", "Created", "Updated", 'Account', "Bill", "Invoice"];
          var filename = "Payment (From " + start + ") (To " + end + ")";
          var query = 'pay?start=' + start + '&end=' + end + '&curr=' + this.reportFC.value.currency + '&';
          this.api.loadAll(query).subscribe(function (result) {
            _this8.paymentsForCSV = result;

            _this8.api.loadAll('acnt').subscribe(function (result) {
              _this8.accounts = result;

              _this8.api.loadAll('inv').subscribe(function (result) {
                _this8.invoices = result;

                _this8.api.loadAll('bil').subscribe(function (result) {
                  _this8.bills = result;

                  _this8.paymentsForCSV.forEach(function (e, k) {
                    var a = _this8.accounts.filter(function (x) {
                      return x.id == e.account;
                    })[0];

                    var i = _this8.invoices.filter(function (x) {
                      return x.id == e.ref_inv;
                    })[0];

                    var b = _this8.bills.filter(function (x) {
                      return x.id == e.ref_bill;
                    })[0];

                    if (a && a != undefined) {
                      _this8.paymentsForCSV[k].account = a.label;
                    } else {
                      _this8.paymentsForCSV[k].account = "-";
                    }

                    if (i && i != undefined) {
                      _this8.paymentsForCSV[k].ref_inv = i.inv_number;
                    } else {
                      _this8.paymentsForCSV[k].ref_inv = "-";
                    }

                    if (b && b != undefined) {
                      _this8.paymentsForCSV[k].ref_bill = b.bill_number;
                    } else {
                      _this8.paymentsForCSV[k].ref_bill = "-";
                    }
                  });

                  _this8.exportCsv(filename, _this8.paymentsForCSV, header);
                });
              });
            });
          });
        }
      }, {
        key: "paymentReport",
        value: function paymentReport() {
          this.exportPayments(); // this.api.loadAll('pay').subscribe(
          //   (result: any) => { });
        }
      }, {
        key: "exportCsv",
        value: function exportCsv(title, data) {
          var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          console.log(title);
          var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalSeparator: '.',
            showLabels: true,
            showTitle: false,
            title: title,
            filename: title,
            useTextFile: false,
            useBom: true,
            useKeysAsHeaders: true,
            headers: [] //  <-- Won't work with useKeysAsHeaders present!

          };

          if (headers) {
            options.useKeysAsHeaders = false;
            options.headers = headers;
          }

          var csvExporter = new export_to_csv__WEBPACK_IMPORTED_MODULE_4__["ExportToCsv"](options);
          csvExporter.generateCsv(data);
        }
      }]);

      return ReportComponent;
    }();

    ReportComponent.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }];
    };

    ReportComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-report',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./report.component.css */
      "./src/app/components/report/report.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])], ReportComponent);
    /***/
  },

  /***/
  "./src/app/http-error.interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/app/http-error.interceptor.ts ***!
    \*******************************************/

  /*! exports provided: HttpErrorInterceptor */

  /***/
  function srcAppHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
      return HttpErrorInterceptor;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/toast/toast-service */
    "./src/app/shared/toast/toast-service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

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

    var HttpErrorInterceptor = /*#__PURE__*/function () {
      function HttpErrorInterceptor(apiService, toast, router) {
        _classCallCheck(this, HttpErrorInterceptor);

        this.apiService = apiService;
        this.toast = toast;
        this.router = router;
      }

      _createClass(HttpErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this9 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = '';
            var hRMsg = '';

            if (error.status == 400) {
              if (error.error) {
                if (error.error.password) {
                  hRMsg = error.error.password;
                } else if (error.error.email) {
                  hRMsg = error.error.email;
                } // let e:any = error.error;
                // e.forEach((element, key) => {
                //   hRMsg = element;
                //   console.log(key);
                // });

              }
            } else if (error.status == 401) {
              if (request.method == "GET") {
                _this9.router.navigate(['/login']);

                hRMsg = 'Session expired, please login!';
              } else {
                hRMsg = 'Unauthorized, use valid username and password!';
              } // this.apiService.refreshToken().subscribe(
              //   result => {
              //     // return next.handle()
              //     // Update the access token again.
              //     // var date = new Date();
              //     // date.setTime(date.getTime() + 600 * 1000);
              //     // this.cookieService.set("auth-token", result["access"], date);
              //     },
              //     error => {
              //       console.log(error);
              //     }
              //   );

            } else if (error.status == 403) {
              _this9.router.navigate(['/login']);

              hRMsg = 'Session expired, please login!';
            } else if (error.status == 0) {
              hRMsg = 'Server down, try later!';
            } else if (error.status != 200) {
              if (error) {
                if (error.error instanceof ErrorEvent) {
                  errorMessage = "Error: ".concat(error.error.message);
                  console.log(errorMessage);
                }

                if (error.error) {
                  // server-side error
                  // error.error.forEach(element => {
                  //   console.log(element);
                  // });
                  errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.error);
                  console.log(errorMessage);
                }

                hRMsg = 'Something wrong, please try again!';
              }
            } // this.toast.remove;


            _this9.toast.show(hRMsg, {
              classname: 'bg-danger text-light',
              delay: 5000
            });

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
          }));
        }
      }]);

      return HttpErrorInterceptor;
    }();

    HttpErrorInterceptor.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    HttpErrorInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], HttpErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/layouts/full/full.component.ts":
  /*!************************************************!*\
    !*** ./src/app/layouts/full/full.component.ts ***!
    \************************************************/

  /*! exports provided: FullComponent */

  /***/
  function srcAppLayoutsFullFullComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullComponent", function () {
      return FullComponent;
    });
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");

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
    /** @title Responsive sidenav */


    var FullComponent = /*#__PURE__*/function () {
      function FullComponent(changeDetectorRef, media, menuItems) {
        _classCallCheck(this, FullComponent);

        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
      }

      _createClass(FullComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return FullComponent;
    }();

    FullComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"]
      }, {
        type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]
      }];
    };

    FullComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-full-layout',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./full.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/full.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["MediaMatcher"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]])], FullComponent);
    /***/
  },

  /***/
  "./src/app/layouts/full/header/header.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layouts/full/header/header.component.ts ***!
    \*********************************************************/

  /*! exports provided: MyErrorStateMatcher, AppHeaderComponent, ProfileDialog */

  /***/
  function srcAppLayoutsFullHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () {
      return AppHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileDialog", function () {
      return ProfileDialog;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-permissions */
    "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
    /* harmony import */


    var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/toast/toast-service */
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

    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
          var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
          return invalidCtrl || invalidParent;
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var AppHeaderComponent = /*#__PURE__*/function () {
      function AppHeaderComponent(cookieService, router, api, dialog, permServ) {
        _classCallCheck(this, AppHeaderComponent);

        this.cookieService = cookieService;
        this.router = router;
        this.api = api;
        this.dialog = dialog;
        this.permServ = permServ;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
        this.matcher = new MyErrorStateMatcher();
        this.passChange = false;
      }

      _createClass(AppHeaderComponent, [{
        key: "logOutUser",
        value: function logOutUser() {
          this.cookieService["delete"]('auth-token');
          this.cookieService["delete"]('refresh-token');
          this.router.navigate(['/login']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          if (!this.cookieService.check('refresh-token')) {
            this.router.navigate(['/login']);
          } else {
            this.api.loadAll('cuser').subscribe(function (result) {
              if (result[0].is_superuser) {
                _this10.perm = ["ADMIN"];
              } else {
                _this10.perm = ["EDITOR"];
              }

              _this10.permServ.loadPermissions(_this10.perm);
            });
          }
        }
      }, {
        key: "goToUserProfile",
        value: function goToUserProfile(data) {
          this.passChange = data;
          var dialogRef = this.dialog.open(ProfileDialog, {
            data: {
              mainData: [],
              customer: [],
              type: data
            },
            maxHeight: '70vh',
            maxWidth: '600px'
          });
        }
      }]);

      return AppHeaderComponent;
    }();

    AppHeaderComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"]
      }];
    };

    AppHeaderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-header',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/header.component.html"))["default"]
    }), __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"]])], AppHeaderComponent);

    var ProfileDialog = /*#__PURE__*/function () {
      function ProfileDialog(api, http, cookie, dialogRef, dData, _formBuilder, permServ, toast, router) {
        _classCallCheck(this, ProfileDialog);

        this.api = api;
        this.http = http;
        this.cookie = cookie;
        this.dialogRef = dialogRef;
        this.dData = dData;
        this._formBuilder = _formBuilder;
        this.permServ = permServ;
        this.toast = toast;
        this.router = router;
        this.perm = ["GUEST"];
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl;
        this.matchPass = true;
        this.profileFC = this._formBuilder.group({
          username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
          first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]],
          last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]],
          oldpassword: [''],
          password: [''],
          confirmPassword: ['']
        });
        this.chPassFC = this._formBuilder.group({
          username: [''],
          email: [''],
          first_name: [''],
          last_name: [''],
          oldpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
          confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        }, {
          validator: this.checkPasswords
        });
      }

      _createClass(ProfileDialog, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.api.loadAll('cuser').subscribe(function (result) {
            console.log(result);

            if (result[0].is_superuser) {
              _this11.perm = ["ADMIN"];
            } else {
              _this11.perm = ["EDITOR"];
            }

            _this11.permServ.loadPermissions(_this11.perm);

            _this11.profileFC.setValue({
              username: result[0].username,
              email: result[0].email,
              first_name: result[0].first_name,
              last_name: result[0].last_name,
              oldpassword: null,
              password: null,
              confirmPassword: null
            });

            _this11.chPassFC.setValue({
              username: result[0].username,
              email: result[0].email,
              first_name: result[0].first_name,
              last_name: result[0].last_name,
              oldpassword: null,
              password: null,
              confirmPassword: null
            });
          }, function (error) {
            _this11.dialogRef.close(error);
          });
        }
      }, {
        key: "profileOperation",
        value: function profileOperation() {
          var _this12 = this;

          var data;
          var tmp = this.dData;

          if (tmp.type) {
            data = this.chPassFC.value;
          } else {
            data = this.profileFC.value;
          }

          if (data) {
            var req = this.http.post("".concat(this.apiUrl, "users/update/"), data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                "Authorization": "Bearer " + this.cookie.get('auth-token')
              })
            });
            req.subscribe(function (result) {
              _this12.toast.show("User updated.", {
                classname: 'bg-success text-light',
                delay: 5000
              });

              var dialog = _this12.dData;

              if (dialog.type) {
                _this12.cookie["delete"]('auth-token');

                _this12.router.navigate(['/login']);
              }

              _this12.dialogRef.close();
            });
          }
        }
      }, {
        key: "checkPasswords",
        value: function checkPasswords(group) {
          var pass = group.controls.password;
          var confirmPass = group.controls.confirmPassword;
          return confirmPass.setErrors(pass.value !== confirmPass.value ? {
            notEquivalent: true
          } : null);
        }
      }]);

      return ProfileDialog;
    }();

    ProfileDialog.ctorParameters = function () {
      return [{
        type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"]
      }, {
        type: _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    ProfileDialog = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'profile-dialog',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/header/profile.component.html"))["default"]
    }), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"], _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], ProfileDialog);
    /***/
  },

  /***/
  "./src/app/layouts/full/sidebar/sidebar.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
    \***********************************************************/

  /*! exports provided: AppSidebarComponent */

  /***/
  function srcAppLayoutsFullSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function () {
      return AppSidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppSidebarComponent = /*#__PURE__*/function () {
      function AppSidebarComponent(changeDetectorRef, media, menuItems, api, permServ) {
        var _this13 = this;

        _classCallCheck(this, AppSidebarComponent);

        this.menuItems = menuItems;
        this.api = api;
        this.permServ = permServ;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');

        this._mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this._mobileQueryListener);
        this.api.loadAll('cuser').subscribe(function (result) {
          if (result[0].is_superuser) {
            _this13.perm = ["ADMIN"];
          } else {
            _this13.perm = ["EDITOR"];
          }

          _this13.permServ.loadPermissions(_this13.perm);
        });
      }

      _createClass(AppSidebarComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this._mobileQueryListener);
        }
      }]);

      return AppSidebarComponent;
    }();

    AppSidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"]
      }, {
        type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]
      }, {
        type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"]
      }];
    };

    AppSidebarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sidebar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/full/sidebar/sidebar.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"]])], AppSidebarComponent);
    /***/
  },

  /***/
  "./src/app/material-module.ts":
  /*!************************************!*\
    !*** ./src/app/material-module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/esm2015/accordion.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/esm2015/observers.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


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
    /**
     * NgModule that includes all Material modules that are required to serve the demo-app.
     */


    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/shared/accordion/accordion.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/accordion/accordion.directive.ts ***!
    \*********************************************************/

  /*! exports provided: AccordionDirective */

  /***/
  function srcAppSharedAccordionAccordionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionDirective", function () {
      return AccordionDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

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

    var AccordionDirective = /*#__PURE__*/function () {
      function AccordionDirective(router) {
        var _this14 = this;

        _classCallCheck(this, AccordionDirective);

        this.router = router;
        this.navlinks = [];
        setTimeout(function () {
          return _this14.checkOpenLinks();
        });
      }

      _createClass(AccordionDirective, [{
        key: "closeOtherLinks",
        value: function closeOtherLinks(selectedLink) {
          this.navlinks.forEach(function (link) {
            if (link !== selectedLink) {
              link.selected = false;
            }
          });
        }
      }, {
        key: "addLink",
        value: function addLink(link) {
          this.navlinks.push(link);
        }
      }, {
        key: "removeGroup",
        value: function removeGroup(link) {
          var index = this.navlinks.indexOf(link);

          if (index !== -1) {
            this.navlinks.splice(index, 1);
          }
        }
      }, {
        key: "checkOpenLinks",
        value: function checkOpenLinks() {
          var _this15 = this;

          this.navlinks.forEach(function (link) {
            if (link.group) {
              var routeUrl = _this15.router.url;
              var currentUrl = routeUrl.split('/');

              if (currentUrl.indexOf(link.group) > 0) {
                link.selected = true;

                _this15.closeOtherLinks(link);
              }
            }
          });
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this16 = this;

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (e) {
            return _this16.checkOpenLinks();
          });
        }
      }]);

      return AccordionDirective;
    }();

    AccordionDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AccordionDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[appAccordion]'
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AccordionDirective);
    /***/
  },

  /***/
  "./src/app/shared/accordion/accordionanchor.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
    \***************************************************************/

  /*! exports provided: AccordionAnchorDirective */

  /***/
  function srcAppSharedAccordionAccordionanchorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function () {
      return AccordionAnchorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordionlink.directive */
    "./src/app/shared/accordion/accordionlink.directive.ts");

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

    var AccordionAnchorDirective = /*#__PURE__*/function () {
      function AccordionAnchorDirective(navlink) {
        _classCallCheck(this, AccordionAnchorDirective);

        this.navlink = navlink;
      }

      _createClass(AccordionAnchorDirective, [{
        key: "onClick",
        value: function onClick(e) {
          this.navlink.toggle();
        }
      }]);

      return AccordionAnchorDirective;
    }();

    AccordionAnchorDirective.ctorParameters = function () {
      return [{
        type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], AccordionAnchorDirective.prototype, "onClick", null);

    AccordionAnchorDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[appAccordionToggle]'
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])), __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])], AccordionAnchorDirective);
    /***/
  },

  /***/
  "./src/app/shared/accordion/accordionlink.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
    \*************************************************************/

  /*! exports provided: AccordionLinkDirective */

  /***/
  function srcAppSharedAccordionAccordionlinkDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function () {
      return AccordionLinkDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordion.directive */
    "./src/app/shared/accordion/accordion.directive.ts");

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

    var AccordionLinkDirective = /*#__PURE__*/function () {
      function AccordionLinkDirective(nav) {
        _classCallCheck(this, AccordionLinkDirective);

        this.nav = nav;
      }

      _createClass(AccordionLinkDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nav.addLink(this);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.nav.removeGroup(this);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.selected = !this.selected;
        }
      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        },
        set: function set(value) {
          this._selected = value;

          if (value) {
            this.nav.closeOtherLinks(this);
          }
        }
      }]);

      return AccordionLinkDirective;
    }();

    AccordionLinkDirective.ctorParameters = function () {
      return [{
        type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], AccordionLinkDirective.prototype, "group", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.selected'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], AccordionLinkDirective.prototype, "selected", null);

    AccordionLinkDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[appAccordionLink]'
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])), __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])], AccordionLinkDirective);
    /***/
  },

  /***/
  "./src/app/shared/accordion/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/accordion/index.ts ***!
    \*******************************************/

  /*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */

  /***/
  function srcAppSharedAccordionIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./accordionanchor.directive */
    "./src/app/shared/accordion/accordionanchor.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function () {
      return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"];
    });
    /* harmony import */


    var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordionlink.directive */
    "./src/app/shared/accordion/accordionlink.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function () {
      return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"];
    });
    /* harmony import */


    var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accordion.directive */
    "./src/app/shared/accordion/accordion.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionDirective", function () {
      return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/shared/global-constants.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/global-constants.ts ***!
    \********************************************/

  /*! exports provided: GlobalVariable */

  /***/
  function srcAppSharedGlobalConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalVariable", function () {
      return GlobalVariable;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var GlobalVariable = {
      apiURL: "http://karimi73.pythonanywhere.com/",
      siteTitle: "This is example of ItSolutionStuff.com"
    };
    /***/
  },

  /***/
  "./src/app/shared/menu-items/menu-items.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/menu-items/menu-items.ts ***!
    \*************************************************/

  /*! exports provided: MenuItems */

  /***/
  function srcAppSharedMenuItemsMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItems", function () {
      return MenuItems;
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

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MENUITEMS = [{
      state: 'dashboard',
      name: 'Dashboard',
      type: 'link',
      icon: 'dashboard',
      perm: ["ADMIN"]
    }, {
      state: 'invoice',
      name: 'Invoice',
      type: 'link',
      icon: 'description',
      perm: ["ADMIN", "EDITOR"]
    }, {
      state: 'bill',
      name: 'Bill',
      type: 'link',
      icon: 'content_paste',
      perm: ["ADMIN", "EDITOR"]
    }, {
      state: 'payment',
      name: 'Payment',
      type: 'link',
      icon: 'attach_money',
      perm: ["ADMIN", "EDITOR"]
    }, {
      state: 'customer',
      name: 'Customer',
      type: 'link',
      icon: 'people_alt',
      perm: ["ADMIN", "EDITOR"]
    }, {
      state: 'vendor',
      name: 'Vendor',
      type: 'link',
      icon: 'business',
      perm: ["ADMIN", "EDITOR"]
    }, {
      state: 'report',
      name: 'Report',
      type: 'link',
      icon: 'show_chart',
      perm: ["ADMIN"]
    }, {
      state: 'trans',
      name: 'Transaction',
      type: 'link',
      icon: 'request_quote',
      perm: ["ADMIN"]
    }, {
      state: 'account',
      name: 'Account Summary',
      type: 'link',
      icon: 'account_balance',
      perm: ["ADMIN"]
    }, {
      state: 'members',
      name: 'Members',
      type: 'link',
      icon: 'people',
      perm: ["ADMIN"]
    }];

    var MenuItems = /*#__PURE__*/function () {
      function MenuItems() {
        _classCallCheck(this, MenuItems);
      }

      _createClass(MenuItems, [{
        key: "getMenuitem",
        value: function getMenuitem() {
          return MENUITEMS;
        }
      }]);

      return MenuItems;
    }();

    MenuItems = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], MenuItems);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accordion */
    "./src/app/shared/accordion/index.ts");
    /* harmony import */


    var ngx_permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]],
      exports: [_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"], ngx_permissions__WEBPACK_IMPORTED_MODULE_3__["NgxPermissionsModule"]],
      providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/spinner.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/spinner.component.ts ***!
    \*********************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

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

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(router, document) {
        var _this17 = this;

        _classCallCheck(this, SpinnerComponent);

        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            _this17.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            _this17.isSpinnerVisible = false;
          }
        }, function () {
          _this17.isSpinnerVisible = false;
        });
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], SpinnerComponent.prototype, "backgroundColor", void 0);

    SpinnerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-spinner',
      template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n        <div class=\"spinner\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n    </div>",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Document])], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/shared/toast/toast-global.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shared/toast/toast-global.component.ts ***!
    \********************************************************/

  /*! exports provided: NgbdToastGlobal */

  /***/
  function srcAppSharedToastToastGlobalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdToastGlobal", function () {
      return NgbdToastGlobal;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../global-constants */
    "./src/app/shared/global-constants.ts");
    /* harmony import */


    var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toast-service */
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

    var NgbdToastGlobal = /*#__PURE__*/function () {
      function NgbdToastGlobal(toastService) {
        _classCallCheck(this, NgbdToastGlobal);

        this.toastService = toastService; // GlobalVariable.siteTitle = 'asdfk';

        this.toastMsg = _global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"].siteTitle;
      }

      _createClass(NgbdToastGlobal, [{
        key: "showStandard",
        value: function showStandard(msg) {
          // if (this.toastMsg) {
          this.toastService.show(this.toastMsg, {
            classname: 'bg-info text-light',
            delay: 2500
          }); // }
        }
      }, {
        key: "showSuccess",
        value: function showSuccess(msg) {
          this.toastService.show('I am a success toast', {
            classname: 'bg-success text-light',
            delay: 2500
          });
        }
      }, {
        key: "showDanger",
        value: function showDanger(dangerTpl, msg) {
          this.toastService.show(dangerTpl, {
            classname: 'bg-danger text-light',
            delay: 2500
          });
        }
      }]);

      return NgbdToastGlobal;
    }();

    NgbdToastGlobal.ctorParameters = function () {
      return [{
        type: _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
      }];
    };

    NgbdToastGlobal = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'ngbd-toast-global',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./toast-global.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/toast/toast-global.component.html"))["default"]
    }), __metadata("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])], NgbdToastGlobal);
    /***/
  },

  /***/
  "./src/app/shared/toast/toast-global.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/toast/toast-global.module.ts ***!
    \*****************************************************/

  /*! exports provided: NgbdToastGlobalModule */

  /***/
  function srcAppSharedToastToastGlobalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbdToastGlobalModule", function () {
      return NgbdToastGlobalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _toast_global_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toast-global.component */
    "./src/app/shared/toast/toast-global.component.ts");

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

    var NgbdToastGlobalModule = function NgbdToastGlobalModule() {
      _classCallCheck(this, NgbdToastGlobalModule);
    };

    NgbdToastGlobalModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
      declarations: [],
      bootstrap: [_toast_global_component__WEBPACK_IMPORTED_MODULE_3__["NgbdToastGlobal"]]
    })], NgbdToastGlobalModule);
    /***/
  },

  /***/
  "./src/app/shared/toast/toast-service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/toast/toast-service.ts ***!
    \***********************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppSharedToastToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ToastService = /*#__PURE__*/function () {
      function ToastService() {
        _classCallCheck(this, ToastService);

        this.toasts = [];
      }

      _createClass(ToastService, [{
        key: "show",
        value: function show(textOrTpl) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.toasts.push(Object.assign({
            textOrTpl: textOrTpl
          }, options));
        }
      }, {
        key: "remove",
        value: function remove(toast) {
          this.toasts = this.toasts.filter(function (t) {
            return t !== toast;
          });
        }
      }]);

      return ToastService;
    }();

    ToastService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    })], ToastService);
    /***/
  },

  /***/
  "./src/app/shared/toast/toasts-container.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/toast/toasts-container.component.ts ***!
    \************************************************************/

  /*! exports provided: ToastsContainer */

  /***/
  function srcAppSharedToastToastsContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastsContainer", function () {
      return ToastsContainer;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast-service */
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

    var ToastsContainer = /*#__PURE__*/function () {
      function ToastsContainer(toastService) {
        _classCallCheck(this, ToastsContainer);

        this.toastService = toastService;
      }

      _createClass(ToastsContainer, [{
        key: "isTemplate",
        value: function isTemplate(toast) {
          return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
        }
      }]);

      return ToastsContainer;
    }();

    ToastsContainer.ctorParameters = function () {
      return [{
        type: _toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]
      }];
    };

    ToastsContainer = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-toasts',
      template: "\n    <ngb-toast\n      *ngFor=\"let toast of toastService.toasts\"\n      [class]=\"toast.classname\"\n      [autohide]=\"true\"\n      [delay]=\"toast.delay || 5000\"\n      (hide)=\"toastService.remove(toast)\"\n    >\n      <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n        <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n      </ng-template>\n\n      <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n    </ngb-toast>\n  ",
      host: {
        '[class.ngb-toasts]': 'true'
      }
    }), __metadata("design:paramtypes", [_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])], ToastsContainer);
    /***/
  },

  /***/
  "./src/app/test/test.component.css":
  /*!*****************************************!*\
    !*** ./src/app/test/test.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestTestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/test/test.component.ts":
  /*!****************************************!*\
    !*** ./src/app/test/test.component.ts ***!
    \****************************************/

  /*! exports provided: TestComponent */

  /***/
  function srcAppTestTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
      return TestComponent;
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

    var TestComponent = /*#__PURE__*/function () {
      function TestComponent() {
        _classCallCheck(this, TestComponent);
      }

      _createClass(TestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestComponent;
    }();

    TestComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-test',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./test.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./test.component.css */
      "./src/app/test/test.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], TestComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      serverUrl: "http://karimi73.pythonanywhere.com/api/",
      serverDomain: "http://karimi73.pythonanywhere.com"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Project\dashboard\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map