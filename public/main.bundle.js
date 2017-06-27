webpackJsonp([1,4],{

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Volumes/Storage/Web/FileUploadingApp/angular-src/src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(618),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Volumes/Storage/Web/FileUploadingApp/angular-src/src/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_file_uploader_file_uploader_component__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileDropDirective"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_6__components_file_uploader_file_uploader_component__["a" /* FileUploaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Volumes/Storage/Web/FileUploadingApp/angular-src/src/app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: 'http://35.189.85.67:8080/upload' });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log(response);
        };
    };
    FileUploaderComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploaderComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    FileUploaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-file-uploader',
            template: __webpack_require__(619),
            styles: [__webpack_require__(617)]
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
//# sourceMappingURL=/Volumes/Storage/Web/FileUploadingApp/angular-src/src/file-uploader.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Volumes/Storage/Web/FileUploadingApp/angular-src/src/environment.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = ".my-drop-zone {\n  border: dotted 3px lightgray;\n  text-align: center;\n}\n\n.nv-file-over {\n  border: dotted 3px red;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.inputfile+label {\n  font-size: 1.25em;\n  font-weight: 700;\n  color: white;\n  background-color: red;\n  display: inline-block;\n  padding: 0.625rem 1.25rem;\n}\n\n.inputfile:focus+label,\n.inputfile+label:hover {\n  background-color: #4b0f31;\n}\n\n.inputfile+label {\n  cursor: pointer;\n  /* \"hand\" cursor */\n}\n\n.box {\n  background-color: #dfc8ca;\n  padding: 6.25rem 1.25rem;\n  text-align: center;\n}\n\n.drag {\n  color: palevioletred;\n  font-size: 1.75em;\n}\n\n\n/* Default class applied to drop zones on over */\n\nhtml,\nbody {\n  height: 100%;\n}\n"

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<app-file-uploader></app-file-uploader>\n"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href>Angular2 File Upload</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-3\">\n\n      <h3>Select files</h3>\n\n      <div class=\"box well my-drop-zone\" ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\"\n        [uploader]=\"uploader\">\n        <input id=\"file\" class=\"inputfile\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n        <label for=\"file\">Choose a file</label>\n        <br>\n        <span class=\"drag\">Or Drag File Here</span>\n      </div>\n    </div>\n\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n\n      <h3>Upload queue</h3>\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th width=\"50%\">Name</th>\n            <th>Size</th>\n            <th>Progress</th>\n            <th>Status</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of uploader.queue\">\n            <td><strong>{{ item?.file?.name }}</strong></td>\n            <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n            <td *ngIf=\"uploader.isHTML5\">\n              <div class=\"progress\" style=\"margin-bottom: 0;\">\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n              </div>\n            </td>\n            <td class=\"text-center\">\n              <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n              <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n              <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n            </td>\n            <td nowrap>\n              <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n              <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n              <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div>\n        <div>\n          Queue progress:\n          <div class=\"progress\" style=\"\">\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n          </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n        <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n        <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[632]);
//# sourceMappingURL=main.bundle.map