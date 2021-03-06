webpackJsonp([0],{

/***/ 171:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__school_school__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let TabsPage = class TabsPage {
    constructor(vibration, superTabsCtrl, platform, keyboard) {
        this.vibration = vibration;
        this.superTabsCtrl = superTabsCtrl;
        this.platform = platform;
        this.keyboard = keyboard;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__school_school__["a" /* SchoolPage */];
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabs */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabs */])
], TabsPage.prototype, "superTabs", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/tabs/tabs.html"*/'<super-tabs tabsPlacement=\'bottom\' (ionChange)="vibrate()" class="hide-on-keyboard-open">\n  <super-tab (click)="vibrate()" [root]="tab1Root" title="Accueil" icon="home"></super-tab>\n  <super-tab (click)="vibrate()" [root]="tab2Root" title="L\'Exposition" icon="navigate"></super-tab>\n  <super-tab (click)="vibrate()" [root]="tab3Root" title="Bio-résidence" icon="leaf"></super-tab>\n</super-tabs>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/tabs/tabs.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["b" /* SuperTabsController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artist_artist__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AboutPage = class AboutPage {
    constructor(nav, barcode, http) {
        this.nav = nav;
        this.barcode = barcode;
        this.http = http;
        this.nav = nav;
    }
    goToOeuvres() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    }
    goToArtists() {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__artist_artist__["a" /* ArtistPage */]);
    }
};
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/about/about.html"*/'<ion-header hidden>\n  <ion-navbar>\n    <ion-title>\n      <div>Exposition Virtuelle</div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="card-background-page">\n  <header>\n    <h1 class="playfair" style="color:black!important">L\'éxposition virtuelle</h1>\n  </header>\n    <ion-card (click)="goToArtists()" block>\n      <img class="darken small" src="assets/imgs/addormire.jpg">\n      <div class="card-title">Les artistes</div>\n      <div class="card-subtitle">Un accès direct aux différents artistes</div>\n    </ion-card>\n    <ion-card class="card-background-page" (click)="goToOeuvres()" block>\n      <img class="darken small" src="assets/imgs/Lens20090228.jpg">\n      <div class="card-title">Les oeuvres</div>\n      <div class="card-subtitle">Un accès direct aux différentes oeuvres</div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/about/about.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ContactPage = class ContactPage {
    constructor(nav, elmRef, vibration, http, _data, loading) {
        this.nav = nav;
        this.elmRef = elmRef;
        this.vibration = vibration;
        this.http = http;
        this._data = _data;
        this.loading = loading;
        this.oeuvres = [];
        this.isLoaded = false;
        this.searchText = '';
        this.actualOeuvres = [];
        this.defaultImage = './assets/imgs/placeholder-compressor.png';
        this.offset = 100;
        this.nav = nav;
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        let loader = this.loading.create({
            content: 'Récupération des oeuvres',
        });
        loader.present();
        let that = this;
        loader.present().then(() => {
            this._data.oeuvres.subscribe((data) => {
                that.oeuvres.push(data);
                if (this.oeuvres === that.oeuvres && loader) {
                    loader.dismiss();
                }
            });
        });
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    goToDetail(oeuvre) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            oeuvre: oeuvre
        });
    }
    noneSelected() {
        return this.oeuvres.filter(oeuvre => oeuvre.isSelected).length === 0;
    }
    onKey(e) {
        if (e.keyCode == 13) {
            let activeElement = document.activeElement;
            activeElement && activeElement.blur && activeElement.blur();
        }
    }
};
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-searchbar (window:keydown)="onKey($event)" [animated]="true" [(ngModel)]="terms" placeholder="Oeuvre/Artiste"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page test" #container >\n  <ion-grid>\n    <div *ngIf="oeuvres !==\'\'">\n      <ion-card  [@fadeInOut] (click)="goToDetail(oeuvre); vibrate();" *ngFor="let oeuvre of oeuvres | search : terms" class="samesize">\n        <img class="samesize" [scrollTarget]="container._scrollContent.nativeElement" [lazyLoad]="oeuvre.image" [defaultImage]="defaultImage">\n        <div class="card-title">{{oeuvre.title}}</div>\n        <div class="card-subtitle">{{oeuvre.author}}</div>\n      </ion-card>\n    </div>\n    <div *ngIf="(oeuvres | search: terms).length === 0" class="emptyState">\n      <ion-card [@fadeInOut]>\n        <ion-card-header>\n          <ion-row>\n            <ion-icon class="larger" name="sad"></ion-icon>\n          </ion-row>\n          <ion-row>\n            Oops !\n          </ion-row>\n        </ion-card-header>\n        <ion-card-content>\n          Aucune oeuvre ne correspond à cette recherche.\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/contact/contact.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-in'))
            ])
        ],
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detailOeuvre_detailOeuvre__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ArtistPage = class ArtistPage {
    constructor(nav, http, elmRef, _data, loading, vibration) {
        this.nav = nav;
        this.http = http;
        this.elmRef = elmRef;
        this._data = _data;
        this.loading = loading;
        this.vibration = vibration;
        this.oeuvres = [];
        this.isLoaded = false;
        this.actualOeuvres = [];
        this.currentCount = 0;
        this.defaultImage = './assets/imgs/placeholder-compressor.png';
        this.offset = 100;
        this.nav = nav;
    }
    ionViewDidLoad() {
        let loader = this.loading.create({
            content: 'Récupération des artistes',
        });
        loader.present();
        let that = this;
        loader.present().then(() => {
            this._data.oeuvres.subscribe((data) => {
                that.oeuvres.push(data);
                if (this.oeuvres === that.oeuvres && loader) {
                    loader.dismiss();
                }
            });
        });
    }
    noneSelected() {
        return this.oeuvres.filter(oeuvre => oeuvre.isSelected).length === 0;
    }
    onKey(e) {
        if (e.keyCode == 13) {
            let activeElement = document.activeElement;
            activeElement && activeElement.blur && activeElement.blur();
        }
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    goToDetail(oeuvre) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            oeuvre: oeuvre
        });
    }
    gotToDetailOeuvre(oeuvre) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__detailOeuvre_detailOeuvre__["a" /* DetailOeuvrePage */], {
            oeuvre: oeuvre
        });
    }
};
ArtistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-artist',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/artist/artist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar (window:keydown)="onKey($event)" [animated]="true" [(ngModel)]="terms" placeholder="Trouvez votre artiste"></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="test" #container >\n  <ion-list>\n    <ion-item [@fadeInOut] *ngFor="let oeuvre of oeuvres | search : terms">\n      <ion-thumbnail item-start>\n        <img (click)="goToDetail(oeuvre);" [scrollTarget]="container._scrollContent.nativeElement" [lazyLoad]="oeuvre.image" [defaultImage]="defaultImage" />\n      </ion-thumbnail>\n      <h2 class="nomArtist" (click)="gotToDetailOeuvre(oeuvre);">{{oeuvre.author}}</h2>\n      <p class="clickable">{{oeuvre.title}}</p>\n      <button style="font-size:15px" ion-button class="red" clear item-end (click)="gotToDetailOeuvre(oeuvre);">+</button>\n    </ion-item>\n  </ion-list>\n  <div *ngIf="(oeuvres | search: terms).length === 0" class="emptyState">\n    <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-icon class="larger" name="sad"></ion-icon>\n        </ion-row>\n        <ion-row>\n          Oops !\n        </ion-row>\n      </ion-card-header>\n      <ion-card-content>\n        Vous êtes sur que cet artiste fait parti de l\'exposition ?\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/artist/artist.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fadeInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-in'))
            ])
        ]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]])
], ArtistPage);

//# sourceMappingURL=artist.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailOeuvrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DetailOeuvrePage = class DetailOeuvrePage {
    constructor(nav, navParams, iab, vibration, socialSharing) {
        this.nav = nav;
        this.navParams = navParams;
        this.iab = iab;
        this.vibration = vibration;
        this.socialSharing = socialSharing;
        this.sharingOptions = {
            message: '@fondationfrances',
            url: this.url,
            subject: 'Exposition du moment',
        };
        this.navParams = navParams;
        this.title = this.navParams.get('oeuvre').title;
        this.description = this.navParams.get('oeuvre').description;
        this.image = this.navParams.get('oeuvre').image;
        this.author = this.navParams.get('oeuvre').author;
        this.authorBio = this.navParams.get('oeuvre').authorBio;
        this.url = this.navParams.get('oeuvre').url;
        this.sound = this.navParams.get('oeuvre').sound;
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    playAudio() {
        if (this.soundMenu) {
            this.soundMenu = false;
        }
        else {
            this.soundMenu = true;
        }
    }
    twShare() {
        this.socialSharing.shareViaTwitter("Parlez de l'exposition @FFrancesArt", null, this.url).then(() => {
            console.log("shareViaTwitter: Success");
        }).catch(() => {
            console.error("shareViaTwitter: failed");
        });
    }
    fbShare() {
        this.socialSharing.shareViaFacebook("Parlez de l'exposition @fondationfrances", null, this.url).then(() => {
            console.log("shareViaFacebook: Success");
        }).catch(() => {
            console.error("shareViaFacebook: failed");
        });
    }
    Share() {
        this.socialSharing.shareWithOptions(this.sharingOptions).then(() => {
            console.log("shareWithOptions: Success");
        }).catch(() => {
            console.error("shareWithOptions: failed");
        });
    }
};
DetailOeuvrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detailOeuvre',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/detailOeuvre/detailOeuvre.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="cards-bg">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title class="oeuvreshow">\n        {{author}}\n      </ion-card-title>\n      <p class="oeuvreshowunder">{{authorBio}}</p>\n    </ion-card-content>\n    <img src={{image}}/>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small (click)="playAudio(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'headset\'></ion-icon>\n          Ecouter le guide\n        </button>\n      </ion-col>\n      <ion-col>\n        <a button ion-button clear small href="{{url}}" onclick="window.open(this.href, \'_blank\', \'location=yes\', \'zoom=no\');return false;" (click)="vibrate();" color="danger" icon-start>\n          <ion-icon name=\'book\'></ion-icon>\n          En savoir plus\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div *ngIf="soundMenu==true">\n        <audio controls>\n          <source src="{{sound}}" type="audio/mpeg">\n          Your browser does not support the audio element.\n        </audio>\n      </div>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small (click)="fbShare(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'logo-facebook\'></ion-icon>\n          facebook\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small (click)="twShare(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'logo-twitter\'></ion-icon>\n          twitter\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small (click)="Share(); vibrate();" color="danger" icon-start>\n          <ion-icon name=\'share-alt\'></ion-icon>\n          plus\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/detailOeuvre/detailOeuvre.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
], DetailOeuvrePage);

//# sourceMappingURL=detailOeuvre.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let SchoolPage = class SchoolPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ngOnInit() {
    }
    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 3) {
            this.slides.stopAutoplay();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], SchoolPage.prototype, "slides", void 0);
SchoolPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-school',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/school/school.html"*/'<ion-header hidden>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="no-scroll myview">\n  <header>\n    <h2 class="classyTitle">Résidence bio-inspirée</h2>\n  </header>\n  <ion-slides pager #slides class="mainslide" autoplay="5000" loop="true" speed="500" pager="true" (ionSlideDidChange)="slideChanged()">\n    <ion-slide>\n      <img src="assets/imgs/antvisuel2-compressor.jpg">\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/imgs/antvisualcan-2-compressor.jpg">\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/imgs/antvisuel.jpg">\n    </ion-slide>\n  </ion-slides>\n  <h3 class="schoolDesc">Mathieu Corticchiato et Lucas Dauvergne sont les deux artistes lauréats de l\'appel à projet pour cette résidence bio-inspirée. Leur oeuvre, intitulée CAN - Conception Assistée par la Nature, propose une immersion in vivo au coeur d\'une organisation très précise, celle des Formicidae Oecophylla, dites «fourmis tisserandes». </h3>\n  <h3 class="schoolDesc">Elles seront orientées par les artistes pour tisser des sculptures-nids avec leur propre soie, un véritable processus de coopération pour une finalité artistique. Elles sont installées dans leur vivarium, au sein même de la fondation et intégrées au récit des oeuvres environnantes.</h3>\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/school/school.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], SchoolPage);

//# sourceMappingURL=school.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HomePage = class HomePage {
    constructor(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/home/home.html"*/'<ion-content padding class="homeBack">\n  <ion-fab top right #fab1>\n    <button ion-fab mini color="dark"><ion-icon name="heart"></ion-icon></button>\n    <ion-fab-list #fabList>\n      <div *ngIf="fabList.classList.contains(\'fab-list-active\')" class="backdrop" (click)="fab1.close();"></div>\n      <a button ion-fab href="https://fr-fr.facebook.com/fondationfrances/">\n        <ion-icon name="logo-facebook"></ion-icon>\n        <div class="label">Facebook</div>\n      </a>\n      <a button ion-fab href="https://twitter.com/FFrancesArt">\n        <ion-icon name="logo-twitter"></ion-icon>\n        <div class="label">Twitter</div>\n      </a>\n      <a button ion-fab href="tel:0688360209" clear>\n        <ion-icon name="call"></ion-icon>\n        <div class="label">Besoin d\'info ?</div>\n      </a>\n    </ion-fab-list>\n  </ion-fab>\n  <img class="banner-mobile" src="./assets/imgs/Salagrama.jpg">\n  <img class="banner" src="./assets/imgs/Eggbranch.jpg">\n  <div class="caption-wrap">\n    <div class="caption">\n      <h1>LA FABRIQUE DE L\'ESPRIT</h1>\n      <h2>Du regard à l\'expérience</h2>\n      <p>DU 23 FÉVRIER AU 24 AOÛT 2018</p>\n    </div>\n  </div>\n  <img class="logo" src="./assets/imgs/FDE-Unesco.png">\n  <div class="wrapping-title">\n    <h1> A propos ..</h1>\n    <h2> Nos projets d\'avenirs et nos offres culturels actuelles</h2>\n    <p class="undertext">Depuis sa création, La Fabrique de l\'Esprit® développe des contenus pédagogiques, élabore des programmes éducatifs culturels, à l’appui d’œuvres contemporaines, et des œuvres de la collection Francès. L’ensemble de ces programmes répond à des enjeux éducatifs, artistiques et culturels.</p>\n    <p class="undertext">En 2017, elle devient membre du mouvement des clubs français pour l’UNESCO. L’accréditation est émise par le Commission Nationale Française pour l’UNESCO. Un prolongement évident tant les missions accomplies répondent aux mêmes enjeux sur le plan de l’éducation, des échanges internationaux et du partage de connaissances pour conserver un patrimoine et défendre des valeurs de paix et de collaborations.</p>\n  </div>\n  <button ion-button full color="danger" class="calltofde btncall" onclick="window.open(\'http://lafabriquedelespritlesamis.fr/\', \'_blank\', \'location=yes\', \'zoom=no\');return false;">Voir le site de la FDE</button>\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/home/home.html"*/,
        providers: [[__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(333);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_school_school__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_plans_plans__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_artist_artist__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_detailOeuvre_detailOeuvre__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_onesignal__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_header_color__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic2_super_tabs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__filter_pipe__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_keyboard__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng_lazyload_image__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng_lazyload_image__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_school_school__["a" /* SchoolPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_plans_plans__["a" /* PlansPage */],
            __WEBPACK_IMPORTED_MODULE_26__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_artist_artist__["a" /* ArtistPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_detailOeuvre_detailOeuvre__["a" /* DetailOeuvrePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24_ionic2_super_tabs__["c" /* SuperTabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_24_ionic2_super_tabs__["c" /* SuperTabsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_28_ng_lazyload_image__["LazyLoadImageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_school_school__["a" /* SchoolPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_artist_artist__["a" /* ArtistPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_plans_plans__["a" /* PlansPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_detailOeuvre_detailOeuvre__["a" /* DetailOeuvrePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_header_color__["a" /* HeaderColor */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_data_data__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








const config = {
    apiKey: "AIzaSyCg-j3__45KtdCGiYg04r9GcUmg5KpVrNA",
    authDomain: "dothingsonionic.firebaseapp.com",
    databaseURL: "https://dothingsonionic.firebaseio.com",
    projectId: "dothingsonionic",
    storageBucket: "dothingsonionic.appspot.com",
    messagingSenderId: "337865225097"
};
let MyApp = class MyApp {
    constructor(platform, statusBar, _OneSignal, splashScreen) {
        this._OneSignal = _OneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might  need.
            splashScreen.hide();
            statusBar.hide();
            this._OneSignal.startInit('b532d545-0594-4d4c-9f34-cc6e3daf1056', '337865225097');
            this._OneSignal.inFocusDisplaying(this._OneSignal.OSInFocusDisplayOption.Notification);
            this._OneSignal.setSubscription(true);
            this._OneSignal.handleNotificationReceived().subscribe(() => {
                // handle received here how you wish.
            });
            this._OneSignal.handleNotificationOpened().subscribe(() => {
                // handle opened here how you wish.
            });
            this._OneSignal.endInit();
        });
        __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_data_data__["a" /* DataProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let PlansPage = class PlansPage {
    constructor(nav, navParams, vibration, http) {
        this.nav = nav;
        this.navParams = navParams;
        this.vibration = vibration;
        this.http = http;
        this.oeuvres = [];
        this.groups = [];
        this.nav = nav;
        //   for(let i = 0; i < 4; i++){
        //   this.groups[i]={
        //     active: false,
        //     id: i,
        //     items: []
        //   }
        //   for (var j=0; j<3; j++) {
        //     this.groups[i].items.push(i + '-' + j);
        //   }
        // }
    }
    // toggleGroup(group){
    //   group.active = !group.active
    //   console.log(group)
    // }
    ngOnInit() {
        this.http.get('./assets/oeuvres.json').subscribe(data => {
            this.oeuvres = data['oeuvres'];
        });
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    goToDetail(oeuvre) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], {
            oeuvre: oeuvre
        });
    }
};
PlansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-plans',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/plans/plans.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>plans</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="./assets/imgs/floor-plan-graphic-example.gif" alt="two dots test" width="313" height="285" usemap="#dots" />\n    <map name="dots" id="dots">\n          <area alt="" title="" (click)="goToDetail(oeuvres[0]); vibrate()" shape="circle" coords="86,75,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[1]); vibrate()" shape="circle" coords="51,229,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[2]); vibrate()" shape="circle" coords="156,230,50" />\n          <area alt="" title="" (click)="goToDetail(oeuvres[3]); vibrate()" shape="circle" coords="266,180,50" />\n    </map>\n    <!-- Accordion menu yet unused.\n    <ion-item-group *ngFor="let group of groups" >\n      <ion-item-divider color="light" (click)="toggleGroup(group)">\n        Etage {{group.id}}\n        <ion-icon item-left name="add"></ion-icon>\n      </ion-item-divider>\n      <ion-item *ngFor="let item of group.items" [@expand]="group.active">{{item}}</ion-item>\n    </ion-item-group>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/plans/plans.html"*/,
        styles: [
            `
    .item-block{
      min-height: 0;
      transition: 0.09s all linear;
    }
    `
        ],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('expand', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('true', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '45px' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('false', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ height: '0' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0s')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* <=> *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-in-out'))
            ])
        ],
        providers: [[__WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */]]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], PlansPage);

//# sourceMappingURL=plans.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterPipe = class FilterPipe {
    transform(items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(item => Object.keys(item).some(k => item[k] != null &&
            item[k].toString().toLowerCase()
                .includes(terms.toLowerCase())));
    }
};
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'search',
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let DetailPage = class DetailPage {
    constructor(nav, navParams, iab, vibration, socialSharing) {
        this.nav = nav;
        this.navParams = navParams;
        this.iab = iab;
        this.vibration = vibration;
        this.socialSharing = socialSharing;
        this.sharingOptions = {
            message: '@fondationfrances',
            url: this.url,
            subject: 'Exposition du moment',
        };
        this.navParams = navParams;
        this.title = this.navParams.get('oeuvre').title;
        this.description = this.navParams.get('oeuvre').description;
        this.image = this.navParams.get('oeuvre').image;
        this.author = this.navParams.get('oeuvre').author;
        this.url = this.navParams.get('oeuvre').url;
        this.sound = this.navParams.get('oeuvre').sound;
    }
    vibrate() {
        this.vibration.vibrate([30]);
    }
    playAudio() {
        if (this.soundMenu) {
            this.soundMenu = false;
        }
        else {
            this.soundMenu = true;
        }
    }
    twShare() {
        this.socialSharing.shareViaTwitter("Parlez de l'exposition @FFrancesArt", null, this.url).then(() => {
            console.log("shareViaTwitter: Success");
        }).catch(() => {
            console.error("shareViaTwitter: failed");
        });
    }
    fbShare() {
        this.socialSharing.shareViaFacebook("Parlez de l'exposition @fondationfrances", null, this.url).then(() => {
            console.log("shareViaFacebook: Success");
        }).catch(() => {
            console.error("shareViaFacebook: failed");
        });
    }
    Share() {
        this.socialSharing.shareWithOptions(this.sharingOptions).then(() => {
            console.log("shareWithOptions: Success");
        }).catch(() => {
            console.error("shareWithOptions: failed");
        });
    }
};
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{author}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="cards-bg">\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title class="oeuvreshow">\n        {{title}}\n      </ion-card-title>\n      <p class="oeuvreshowunder">{{description}}</p>\n    </ion-card-content>\n    <img src={{image}}/>\n    <div class="wrap-share">\n      <ion-row no-padding>\n        <ion-col>\n          <button ion-button clear small (click)="playAudio(); vibrate();" color="danger" icon-start>\n            <ion-icon name=\'headset\'></ion-icon>\n            Ecouter le guide\n          </button>\n        </ion-col>\n        <ion-col>\n          <a button ion-button clear small href="{{url}}" onclick="window.open(this.href, \'_blank\', \'location=yes\', \'zoom=no\');return false;" (click)="vibrate();" color="danger" icon-start>\n            <ion-icon name=\'book\'></ion-icon>\n            En savoir plus\n          </a>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <div *ngIf="soundMenu==true">\n          <audio controls>\n            <source src="{{sound}}" type="audio/mpeg">\n            Your browser does not support the audio element.\n          </audio>\n        </div>\n      </ion-row>\n      <ion-row no-padding>\n        <ion-col>\n          <button ion-button clear small (click)="fbShare(); vibrate();" color="danger" icon-start>\n            <ion-icon name=\'logo-facebook\'></ion-icon>\n            facebook\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button clear small (click)="twShare(); vibrate();" color="danger" icon-start>\n            <ion-icon name=\'logo-twitter\'></ion-icon>\n            twitter\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button clear small (click)="Share(); vibrate();" color="danger" icon-start>\n            <ion-icon name=\'share-alt\'></ion-icon>\n            plus\n          </button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/arroi/Desktop/Projects/Ionic_FDE/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DataProvider = class DataProvider {
    constructor() {
        this._db = firebase.database().ref('/');
        this._oeuvresRef = firebase.database().ref('oeuvres');
        this._oeuvresRef.on('child_added', this.handleData, this);
        this._oeuvres$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"]();
    }
    get oeuvres() {
        return this._oeuvres$;
    }
    handleData(snap) {
        try {
            // Tell our observer we have new data
            this._oeuvres$.next(snap.val());
        }
        catch (error) {
            console.log('catching', error);
        }
    }
};
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ })

},[320]);
//# sourceMappingURL=main.js.map