(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{margin:auto;}\n.field-label{font-weight: bold ; font-size:20px;}\nelement.style {\n    text-shadow: 1px 1px 0 #444;\n}\n.header-row {\n\tbackground-color: rgb(31, 31, 31);/*#322D0D;*/\n  font-weight: bold;\n  height: 50px;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tvertical-align: middle !important;\n  color: rgb(255, 255, 255);\n  text-align: center;\n  padding-top: 8px;\n}\n.btnAddReceiptTreatment {\n\tpadding: 0px;\n}\nhr {\n    display: block;\n    height: 2px;\n    border: 0;\n    border-top: 1px solid rgb(43, 43, 43);\n    margin: 1em 0;\n    padding: 0; \n}\n.text-muted {\n    font-size: 20px;\n    color: #CCCCCC;\n    font-weight: lighter;\n}\n.btnView {\n\tmargin-bottom: 20px;\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n\tborder-radius: 60px;\n\tbackground-color: whit ;\n\tborder-width: 1px;\n\tborder-color: white;\n}\n/* inherit */\n.w3-ripple {\n    transition: opacity 0s;\n}\n.w3-btn, .w3-btn:link, .w3-btn:visited {color:#FFFFFF;background-color:#4CAF50}\n.w3-btn, .w3-button {\n    border: none;\n    display: inline-block;\n    padding: 8px 16px;\n    vertical-align: middle;\n    overflow: hidden;\n    text-decoration: none;\n    color: inherit;\n    background-color: inherit;\n    text-align: center;\n    cursor: pointer;\n    white-space: nowrap;\n    font-weight: bold;\n}\n.w3-round, .w3-round-medium {\n    border-radius: 4px;\n}\n.w3-white, .w3-hover-white:hover {\n    color: #000!important;\n    background-color: #fff!important;\n}\n.w3-border {\n    border: 1px solid #ccc!important;\n}\n.w3-grey, .w3-hover-grey:hover, .w3-gray, .w3-hover-gray:hover {\n    color: #000!important;\n    background-color: #3d3d3d!important;\n}\n.w3-border-blue, .w3-hover-border-blue:hover {\n    border-color: #2196F3!important;\n}\n.w3-border-green, .w3-hover-border-green:hover {\n    border-color: #3d3d3d!important;\n}\n.w3-round-xlarge {\n    border-radius: 16px;\n}\n.w3-text-white, .w3-hover-text-white:hover {\n    color: #ffffff!important;\n}\n/* Form Style */\n.required-field {\n    color: rgb(255, 44, 44);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxZQUFZLENBQUM7QUFDckIsYUFBYSxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7QUFFakQ7SUFDSSw0QkFBNEI7Q0FDL0I7QUFDRDtDQUNDLGtDQUFrQyxZQUFZO0VBQzdDLGtCQUFrQjtFQUNsQixhQUFhO0NBQ2QsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQ0FBa0M7RUFDakMsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7QUFFRDtDQUNDLGFBQWE7Q0FDYjtBQUNEO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0NBQ3hCO0FBRUQ7Q0FDQyxvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEI7QUFDRCxhQUFhO0FBRWI7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRCx3Q0FBd0MsY0FBYyx3QkFBd0IsQ0FBQztBQUMvRTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7Q0FDcEM7QUFDRDtJQUNJLGlDQUFpQztDQUNwQztBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztDQUN2QztBQUNEO0lBQ0ksZ0NBQWdDO0NBQ25DO0FBQ0Q7SUFDSSxnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBRUQsZ0JBQWdCO0FBQ2hCO0lBQ0ksd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye21hcmdpbjphdXRvO31cbi5maWVsZC1sYWJlbHtmb250LXdlaWdodDogYm9sZCA7IGZvbnQtc2l6ZToyMHB4O31cblxuZWxlbWVudC5zdHlsZSB7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAjNDQ0O1xufVxuLmhlYWRlci1yb3cge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7LyojMzIyRDBEOyovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDUwcHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uYnRuQWRkUmVjZWlwdFRyZWF0bWVudCB7XG5cdHBhZGRpbmc6IDBweDtcbn1cbmhyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig0MywgNDMsIDQzKTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIHBhZGRpbmc6IDA7IFxufVxuLnRleHQtbXV0ZWQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0NDQ0NDQztcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmJ0blZpZXcge1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXQgO1xuXHRib3JkZXItd2lkdGg6IDFweDtcblx0Ym9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi8qIGluaGVyaXQgKi9cblxuLnczLXJpcHBsZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwcztcbn1cbi53My1idG4sIC53My1idG46bGluaywgLnczLWJ0bjp2aXNpdGVkIHtjb2xvcjojRkZGRkZGO2JhY2tncm91bmQtY29sb3I6IzRDQUY1MH1cbi53My1idG4sIC53My1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi53My1yb3VuZCwgLnczLXJvdW5kLW1lZGl1bSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnczLXdoaXRlLCAudzMtaG92ZXItd2hpdGU6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcbn1cbi53My1ib3JkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MhaW1wb3J0YW50O1xufVxuLnczLWdyZXksIC53My1ob3Zlci1ncmV5OmhvdmVyLCAudzMtZ3JheSwgLnczLWhvdmVyLWdyYXk6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkIWltcG9ydGFudDtcbn1cbi53My1ib3JkZXItYmx1ZSwgLnczLWhvdmVyLWJvcmRlci1ibHVlOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICMyMTk2RjMhaW1wb3J0YW50O1xufVxuLnczLWJvcmRlci1ncmVlbiwgLnczLWhvdmVyLWJvcmRlci1ncmVlbjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjM2QzZDNkIWltcG9ydGFudDtcbn1cbi53My1yb3VuZC14bGFyZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4udzMtdGV4dC13aGl0ZSwgLnczLWhvdmVyLXRleHQtd2hpdGU6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcbn1cblxuLyogRm9ybSBTdHlsZSAqL1xuLnJlcXVpcmVkLWZpZWxkIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgNDQsIDQ0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <B style=\"font-size:70px;\" class=\"col-md-3\"> Welcome to Test \"NGINX\" </B>\n\n</div>\n\n<hr>\n\n<div class=\"\">\n\n  <B style=\"font-size:50px;\" class=\"col-md-3\">Get Time Server : </B>\n  <button type=\"submit\" class=\"col-md-1 mx-auto w3-btn w3-grey w3-border w3-border-green w3-text-white w3-round-xlarge\"\n    style=\"text-shadow:1px 1px 0 #444\" (click)=\"onSubmitGetTime()\">GET</button>\n  Example : Thu Apr 18 2019 17:30:47\n\n</div>\n\n<div class=\"\" style=\"text-align:center\">\n  <label for=\"TIME\" class=\"col-1 col-form-label text-right font-weight-bold\">\n    TIME :\n  </label>\n  <input style=\"font-size:35px; border:none ; color:steelblue;\" type=\"text\" class=\"col-md-10 mx-auto border-bottom text-center\"\n    [(ngModel)]=\"timeServer\" id=\"timeServer\" name=\"timeServer\" readonly>\n\n</div>\n\n<hr>\n\n<div class=\"\">\n\n  <B style=\"font-size:50px;\" class=\"col-md-3\">Random Number 0-100 : </B>\n  <button type=\"submit\" class=\"col-md-1 mx-auto w3-btn w3-grey w3-border w3-border-green w3-text-white w3-round-xlarge\"\n    style=\"text-shadow:1px 1px 0 #444\" (click)=\"onSubmitRandomnNumber()\">RANDOM</button>\n  Example : 67\n\n</div>\n\n<div class=\"\" style=\"text-align:center\">\n\n  <label for=\"random\" class=\"col-1 col-form-label text-right font-weight-bold\">\n    RANDOM :\n  </label>\n  <input style=\"font-size:60px; border:none ; color:steelblue;\" type=\"text\" class=\"col-md- mx-auto border-bottom text-center\"\n    [(ngModel)]=\"randomNumber\" id=\"randomNumber\" name=\"randomNumber\" readonly>\n\n</div>\n\n<hr>\n\n<div class=\"\">\n\n  <B style=\"font-size:50px;\" class=\"col-md-3\">SUM NumberA&B : </B>\n  <button type=\"submit\" class=\"col-md-1 mx-auto w3-btn w3-grey w3-border w3-border-green w3-text-white w3-round-xlarge\"\n    style=\"text-shadow:1px 1px 0 #444\" (click)=\"onSubmitSumAB()\">SUM</button>\n  Example : 2+1 = 3\n\n</div>\n\n<div class=\"\" style=\"text-align:center\">\n  <label for=\"NumberA\" class=\"col-1 col-form-label text-right font-weight-bold\">\n    A :\n  </label>\n  <input style=\"font-size:60px;  color:rgb(11, 224, 136);\" type=\"text\" class=\"col-md- mx-auto border-bottom text-center\"\n    [(ngModel)]=\"modelAB.numberA\" id=\"modelAB.numberA\" name=\"modelAB.numberA\" pattern=\"^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$\">\n\n  <label for=\"NumberB\" class=\"col-1 col-form-label text-right font-weight-bold\"> \n    B :\n  </label>\n  <input style=\"font-size:60px;  color:rgb(11, 224, 136);\" type=\"text\" class=\"col-md- mx-auto border-bottom text-center\"\n    [(ngModel)]=\"modelAB.numberB\" id=\"modelAB.numberB\" name=\"modelAB.numberB\">\n\n  <label for=\"RESULT\" class=\"col-1 col-form-label text-right font-weight-bold\" pattern=\"^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$\">\n    RESULT :\n  </label>\n  <input style=\"font-size:60px; border:none ; color:steelblue;\" type=\"text\" class=\"col-md- mx-auto border-bottom text-center\"\n    [(ngModel)]=\"sumAB\" id=\"sumAB\" name=\"sumAB\" readonly>\n\n</div>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/service */ "./src/app/service/service.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/app/model.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(Service) {
        this.Service = Service;
        this.modelAB = _model__WEBPACK_IMPORTED_MODULE_3__["TransactionSumNumberAB"].empty();
        this.title = 'my-app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.modelAB = _model__WEBPACK_IMPORTED_MODULE_3__["TransactionSumNumberAB"].sampleSubmitSr();
    };
    AppComponent.prototype.onSubmitGetTime = function () {
        //   this.timeServer = this.getServerTime()
        //   console.log('timeServer : ' +  this.timeServer);
        // document.getElementById('timeServer').innerHTML = this.timeServer;
        var _this = this;
        this.Service.submitGetTime()
            .subscribe(function (Result) {
            console.log('submitGetTime Success ');
            console.log('reply:' + Result.TIME);
            _this.timeServer = Result.TIME;
            console.log('timeServer : ' + _this.timeServer);
            // document.getElementById('timeServer').innerHTML = this.timeServer;
        }, function (error) {
            // let header = 'Error';
            // this.progressDialog.close();
            var message = error;
            // (<HTMLInputElement>document.getElementById('status')).value = message;
            console.log('Error :' + message);
            // document.getElementById("statusfield").style.display = "block";
        });
    };
    AppComponent.prototype.onSubmitRandomnNumber = function () {
        // let N = 101;
        // returns a random integer from 0 to N
        // this.randomNumber = Math.floor(Math.random() * N);
        // console.log('randomNumber : ' + this.randomNumber);
        // document.getElementById('randomNumber').innerHTML = this.randomNumber;
        var _this = this;
        this.Service.submitRandomNumber()
            .subscribe(function (Result) {
            console.log('submitRandomNumber Success ');
            console.log('reply:' + Result.RANDOM);
            _this.randomNumber = Result.RANDOM;
            console.log('timeServer : ' + _this.randomNumber);
            // document.getElementById('timeServer').innerHTML = this.timeServer;
        }, function (error) {
            // let header = 'Error';
            // this.progressDialog.close();
            var message = error;
            // (<HTMLInputElement>document.getElementById('status')).value = message;
            console.log('Error :' + message);
            // document.getElementById("statusfield").style.display = "block";
        });
    };
    AppComponent.prototype.onSubmitSumAB = function () {
        var _this = this;
        console.log("A : " + this.modelAB.numberA);
        console.log("B : " + this.modelAB.numberB);
        this.modelAB.numberA = Number(this.modelAB.numberA);
        this.modelAB.numberB = Number(this.modelAB.numberB);
        this.Service.submitSumAB(this.modelAB)
            .subscribe(function (Result) {
            console.log('onSubmitSumAB Success ');
            console.log('reply:' + Result.SUM);
            _this.sumAB = Result.SUM;
            console.log('timeServer : ' + _this.sumAB);
            // document.getElementById('timeServer').innerHTML = this.timeServer;
        }, function (error) {
            // let header = 'Error';
            // this.progressDialog.close();
            var message = error;
            // (<HTMLInputElement>document.getElementById('status')).value = message;
            console.log('Error :' + message);
            // document.getElementById("statusfield").style.display = "block";
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/service */ "./src/app/service/service.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"] // can use ngModel in HTML
            ],
            providers: [_service_service__WEBPACK_IMPORTED_MODULE_7__["Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model.ts":
/*!**************************!*\
  !*** ./src/app/model.ts ***!
  \**************************/
/*! exports provided: TransactionSumNumberAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionSumNumberAB", function() { return TransactionSumNumberAB; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./src/util/util.ts");

var todate;
var construct = function (constructor, argsArray) {
    function F() {
        constructor.apply(this, argsArray);
    }
    F.prototype = constructor.prototype;
    return new F();
};
var empty = function (constructor, numArgs) {
    todate = _util_util__WEBPACK_IMPORTED_MODULE_0__["Util"].todate();
    var nullArgs = new Array(numArgs).fill(null);
    return construct(constructor, nullArgs);
};
var TransactionSumNumberAB = /** @class */ (function () {
    function TransactionSumNumberAB(numberA, numberB) {
        this.numberA = numberA;
        this.numberB = numberB;
    }
    TransactionSumNumberAB.empty = function () {
        var emptyObj = empty(TransactionSumNumberAB, 1);
        return emptyObj;
    };
    TransactionSumNumberAB.sampleSubmitSr = function () {
        var sample = TransactionSumNumberAB.empty();
        sample.numberA = 0;
        sample.numberB = 0;
        return sample;
    };
    return TransactionSumNumberAB;
}());



/***/ }),

/***/ "./src/app/service/service.ts":
/*!************************************!*\
  !*** ./src/app/service/service.ts ***!
  \************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");






var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
    };
    Service.prototype.handleError = function (error) {
        var errorBody = JSON.parse(error._body);
        var errorMsg = errorBody.message;
        console.log('Error message: ', errorMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMsg);
    };
    ;
    Service.prototype.submitGetTime = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendBaseUrl + 'getServerTime'; //asset.service.request
        // const filter = `/${encodeURIComponent(id.inv_no)}/${id.DATE}/${id.inv_tax_seller}` //`?filter={"where": { "srId": "${id}" }}`;
        // const filter = ``
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.submitRandomNumber = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendBaseUrl + 'random'; //asset.service.request
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    Service.prototype.submitSumAB = function (model) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendBaseUrl + 'sumAB'; // transaction.submit.service.request
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, model, {
            headers: headers
        }).map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backendBaseUrl: 'http://localhost:9001/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/util/util.ts":
/*!**************************!*\
  !*** ./src/util/util.ts ***!
  \**************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.pad = function (num) {
        var s = num + "";
        while (s.length < 3)
            s = "0" + s;
        return s;
    };
    Util.todate = function () {
        var today = new Date();
        var dd = today.getDate().toString();
        var mm = (today.getMonth() + 1).toString(); //January is 0!
        var yyyy = today.getFullYear();
        if (Number(dd) < 10) {
            dd.toString();
            dd = '0' + dd;
        }
        if (Number(mm) < 10) {
            mm = '0' + mm;
        }
        var todayString = mm + '-' + dd + '-' + yyyy;
        return todayString;
    };
    return Util;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/best/Documents/ExampleMVC/nginx_blog/test-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map