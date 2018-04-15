webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "swiper {\r\n\tbackground: #000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ":host {\r\n  top: 0;\r\n  left: 0;\r\n  width: inherit;\r\n  height: inherit;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  transition: opacity 200ms cubic-bezier(0.645, 0.045, 0.355, 1);\r\n  z-index: 10000;\r\n  display: block;\r\n  overflow: hidden;\r\n  position: relative; }\r\n\r\n:host .swiper-counter {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 8px;\r\n  z-index: 100;\r\n  border-radius: 13px;\r\n  background-color: rgba(23, 37, 68, 0.3);\r\n  font-size: 11px;\r\n  letter-spacing: 0.4px;\r\n  color: #ffffff;\r\n  padding: 5px 7px; }\r\n:host .swiper-wrapper.swiper-landscape .swiper-image-wrap img {\r\n  height: 100%; }\r\n:host .swiper-wrapper {\r\n  transition: none;\r\n  width: inherit;\r\n  height: inherit;\r\n  display: block; }\r\n  :host .swiper-wrapper .swiper-image-wrap.swiper-prev-image {\r\n    -webkit-transform: translate3d(calc(-100% - 8px), 0, 0);\r\n            transform: translate3d(calc(-100% - 8px), 0, 0); }\r\n  :host .swiper-wrapper .swiper-image-wrap.swiper-next-image {\r\n    -webkit-transform: translate3d(calc(100% + 8px), 0, 0);\r\n            transform: translate3d(calc(100% + 8px), 0, 0); }\r\n  :host .swiper-wrapper .swiper-image-wrap {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center; }\r\n    :host .swiper-wrapper .swiper-image-wrap img {\r\n      max-width: 100%;\r\n      max-height: 100%;\r\n      width: auto;\r\n      height: auto;\r\n      position: relative; }\r\n    :host .swiper-wrapper .swiper-image-wrap img.swiper-hide {\r\n      display: none; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "<swiper height=\"100%\" [images]=\"myImages\"></swiper> "

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper-counter\">{{index+1}} / {{images.length}}</div>\r\n<div \r\n\tclass=\"swiper-wrapper\" \r\n\tpinch \r\n\t[isLast]=\"isLast\" \r\n\t[isFirst]=\"isFirst\" \r\n\t(events)=\"handlePinchEvents($event)\"\r\n\t#wrapper>\r\n\t<div class=\"swiper-image-wrap swiper-prev-image\">\r\n\t\t<img \r\n\t\t\t*ngIf=\"prevImagePath\"\r\n\t\t\t[src]=\"prevImagePath\" />\r\n\t</div>\r\n\r\n\t<div class=\"swiper-image-wrap swiper-curr-image\">\r\n\t\t<img\r\n\t\t\t*ngIf=\"currImagePath\"\r\n\t\t\t[src]=\"currImagePath\" />\r\n\t</div>\r\n\t\r\n\t<div class=\"swiper-image-wrap swiper-next-image\">\r\n\t\t<img \r\n\t\t\t*ngIf=\"nextImagePath\"\r\n\t\t\t[src]=\"nextImagePath\" />\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.myImages = [
            {
                path: '/assets/img/yi-sung-tsai-04--vertical.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-01.jpg',
            },
            {
                path: '/assets/img/yi-sung-tsai-02.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-03.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-04.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-05.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-06.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-07.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-08.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-09.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-10.jpg'
            },
            {
                path: '/assets/img/yi-sung-tsai-11.jpg'
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(139),
        styles: [__webpack_require__(137)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swiper_swiper_module__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__swiper_swiper_module__["a" /* SwiperModule */]
        ],
        exports: [],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinchDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PinchDirective = (function () {
    function PinchDirective(elementRef) {
        this.elementRef = elementRef;
        this.i = 0;
        this.scale = 1;
        this.initialScale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.initialMoveX = 0;
        this.initialMoveY = 0;
        this.isNextImageLoaded = true;
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.elem = this.elementRef.nativeElement;
    }
    PinchDirective.prototype.touchstartHandler = function (event) {
        this.elem.style.transformOrigin = '0 0';
    };
    PinchDirective.prototype.touchmoveHandler = function (event) {
        var touches = event.touches;
        if (touches.length === 1 && this.scale === 1 && !this.eventType || this.eventType == 'swipe' || this.eventType == 'horizontal-swipe') {
            //event.preventDefault();
            this.i++;
            if (!this.isNextImageLoaded) {
                return;
            }
            if (!this.eventType) {
                this.startX = event.touches[0].pageX;
                this.startY = event.touches[0].pageY;
            }
            if (this.i < 4) {
                this.eventType = 'swipe';
                //event.preventDefault();
                return;
            }
            if (this.eventType != 'scroll' && this.eventType != 'horizontal-swipe') {
                var movementX = Math.abs(event.touches[0].pageX - this.startX);
                var movementY = Math.abs(event.touches[0].pageY - this.startY);
                if ((movementY * 3) > movementX) {
                    this.eventType = 'scroll';
                }
            }
            if (this.eventType === 'scroll') {
                return;
            }
            event.preventDefault();
            this.eventType = 'horizontal-swipe';
            this.moveX = this.initialMoveX + (event.touches[0].pageX - this.startX);
            this.moveY = 0;
            this.transformElem(0);
        }
    };
    PinchDirective.prototype.touchendHandler = function (event) {
        this.i = 0;
        var touches = event.touches;
        var img = this.elem.getElementsByTagName("img")[0];
        if (!this.isNextImageLoaded) {
            return;
        }
        if (this.scale < 1) {
            this.scale = 1;
        }
        if (this.moveY > 0) {
            this.moveY = 0;
        }
        if (this.moveX > 50) {
            this.slide('prev');
        }
        else if (this.moveX < -50) {
            this.slide('next');
        }
        else {
            this.moveX = 0;
        }
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
        this.transformElem(200);
        this.eventType = 'touchend';
        if (touches.length == 0) {
            this.eventType = '';
        }
    };
    PinchDirective.prototype.slide = function (event) {
        var _this = this;
        this.onSlide(event);
        if (event === 'prev') {
            this.moveX = window.innerWidth + 8;
            if (this.isFirst) {
                this.moveX = 0;
            }
        }
        if (event === 'next') {
            this.moveX = -window.innerWidth - 8;
            if (this.isLast) {
                this.moveX = 0;
            }
        }
        this.isNextImageLoaded = false;
        setTimeout(function () {
            _this.moveX = 0;
            _this.initialMoveX = 0;
            _this.isNextImageLoaded = true;
        }, 200);
    };
    PinchDirective.prototype.onSlide = function (evenType) {
        this.events.emit(evenType);
    };
    PinchDirective.prototype.transformElem = function (duration) {
        if (duration === void 0) { duration = 50; }
        var matrixVal = 'matrix(' + Number(this.scale) + ',' + 0 + ',' + 0 + ',' + Number(this.scale) + ',' + Number(this.moveX) + ',' + Number(this.moveY) + ')';
        this.elem.style.transition = 'all ' + duration + 'ms';
        this.elem.style.transform = matrixVal;
        this.elem.style.webkitTransform = matrixVal;
    };
    return PinchDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], PinchDirective.prototype, "isLast", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], PinchDirective.prototype, "isFirst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Output */])(),
    __metadata("design:type", Object)
], PinchDirective.prototype, "events", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* HostListener */])('touchstart', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PinchDirective.prototype, "touchstartHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* HostListener */])('touchmove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PinchDirective.prototype, "touchmoveHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* HostListener */])('touchend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PinchDirective.prototype, "touchendHandler", null);
PinchDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */])({
        selector: '[pinch]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object])
], PinchDirective);

var _a;
//# sourceMappingURL=pinch.directive.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwiperComponent = (function () {
    /*
        @HostListener('window:resize', ['$event'])
        onWindowResize(event: any) {
            this.landscapeMode = this.isLandscape;
            this.ref.detectChanges();
        }
    */
    function SwiperComponent(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.images = [];
        this.config = {};
        this.currImage = {
            show: true,
            loaded: false,
            index: 0
        };
        this.prevImage = {
            loaded: false
        };
        this.nextImage = {
            loaded: false
        };
    }
    Object.defineProperty(SwiperComponent.prototype, "index", {
        get: function () {
            return this.currImage.index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "currImagePath", {
        get: function () {
            var image = this.images[this.index];
            if (image) {
                return image.path;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "prevImagePath", {
        get: function () {
            var image = this.images[this.prevIndex];
            if (image) {
                return image.path;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "nextImagePath", {
        get: function () {
            var image = this.images[this.nextIndex];
            if (image) {
                return image.path;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isFirst", {
        get: function () {
            return this.index === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isLast", {
        get: function () {
            return this.index === this.latestImageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "latestImageIndex", {
        get: function () {
            return this.images.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwiperComponent.prototype, "isLandscape", {
        get: function () {
            return window.innerWidth > window.innerHeight;
        },
        enumerable: true,
        configurable: true
    });
    SwiperComponent.prototype.ngOnInit = function () {
        this.prevIndex = this.currImage.index - 1;
        this.nextIndex = this.currImage.index + 1;
        this.hostHeight = this.containerHeight;
    };
    SwiperComponent.prototype.slide = function (event) {
        var _this = this;
        if (event === 'next') {
            if (this.isLast) {
                if (!this.config.loop) {
                    return;
                }
                else {
                    setTimeout(function () {
                        _this.currImage.index = 0;
                    }, 200);
                }
            }
            else {
                setTimeout(function () {
                    _this.currImage.index++;
                }, 200);
            }
            setTimeout(function () {
                _this.afterSlide('next');
            }, 300);
        }
        if (event === 'prev') {
            if (this.isFirst) {
                if (!this.config.loop) {
                    return;
                }
                else {
                    setTimeout(function () {
                        _this.currImage.index = _this.latestImageIndex;
                    }, 200);
                }
            }
            else {
                setTimeout(function () {
                    _this.currImage.index--;
                }, 200);
            }
            setTimeout(function () {
                _this.afterSlide('prev');
            }, 300);
        }
    };
    SwiperComponent.prototype.afterSlide = function (eventType) {
        this.currImage.show = true;
        if (this.index === this.latestImageIndex && this.config.loop) {
            this.nextIndex = 0;
        }
        else {
            this.nextIndex = this.index + 1;
        }
        if (this.index === 0 && this.config.loop) {
            this.prevIndex = this.latestImageIndex;
        }
        else {
            this.prevIndex = this.index - 1;
        }
        if (eventType === 'prev') {
            if (!this.prevImage.loaded) {
                this.currImage.loaded = false;
                this.prevImage.loaded = false;
            }
            if (!this.currImage.loaded) {
                this.nextImage.loaded = false;
            }
        }
        if (eventType === 'next') {
            if (!this.nextImage.loaded) {
                this.currImage.loaded = false;
                this.nextImage.loaded = false;
            }
            if (!this.currImage.loaded) {
                this.prevImage.loaded = false;
            }
        }
        this.defaultWrapperPosition();
        this.ref.detectChanges();
    };
    SwiperComponent.prototype.onImageLoaded = function (elem) {
        this[elem].loaded = true;
        this.ref.detectChanges();
    };
    SwiperComponent.prototype.handlePinchEvents = function ($event) {
        if ($event === 'prev') {
            this.slide('prev');
        }
        if ($event === 'next') {
            this.slide('next');
        }
    };
    SwiperComponent.prototype.defaultWrapperPosition = function () {
        var elem = this.wrapperEl.nativeElement;
        elem.style.transition = 'all 0ms';
        elem.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        elem.style.webkitTransform = 'matrix(1, 0, 0, 1, 0, 0)';
    };
    return SwiperComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('images'),
    __metadata("design:type", Object)
], SwiperComponent.prototype, "images", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('config'),
    __metadata("design:type", Object)
], SwiperComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('height'),
    __metadata("design:type", String)
], SwiperComponent.prototype, "containerHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ViewChild */])('wrapper'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], SwiperComponent.prototype, "wrapperEl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* HostBinding */])('style.height'),
    __metadata("design:type", String)
], SwiperComponent.prototype, "hostHeight", void 0);
SwiperComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'swiper',
        template: __webpack_require__(140),
        styles: [__webpack_require__(138)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectorRef */]) === "function" && _c || Object])
], SwiperComponent);

var _a, _b, _c;
//# sourceMappingURL=swiper.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swiper_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pinch_directive__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SwiperModule = (function () {
    function SwiperModule() {
    }
    return SwiperModule;
}());
SwiperModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__swiper_component__["a" /* SwiperComponent */],
            __WEBPACK_IMPORTED_MODULE_3__pinch_directive__["a" /* PinchDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__swiper_component__["a" /* SwiperComponent */]
        ],
        providers: [],
        bootstrap: [],
        entryComponents: []
    })
], SwiperModule);

//# sourceMappingURL=swiper.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[165]);
//# sourceMappingURL=main.bundle.js.map