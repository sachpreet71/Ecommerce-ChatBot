(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/nhd":
/*!****************************************!*\
  !*** ./src/app/predefinedmessage.json ***!
  \****************************************/
/*! exports provided: intro, help, greetings, hobbies, pizzas, thank, closing, offers, complaints, ok, Ema, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"intro\":[\"Hello 👋, I am Ema\",\"Hi 👋, I am Ema\",\"Hello 👋, My name is Ema\"],\"help\":[\"How may i assist you?\",\"How can i help you?\",\"What i can do for you?\"],\"greetings\":[\"I am good you little piece of love\",\"I am fine, what about you\",\"I am good\",\"I'm fine,thank you, what can I do for you 😀\"],\"hobbies\":[\"I love to talk with humans\",\"I like to make friends like you\"],\"pizzas\":[\"which type of pizza do you like?\",\"i can make a pizza for you\",\"i would love to make a pizza for you\",\"would you like cheese pizza?\"],\"thank\":[\"Most welcome\",\"Not an issue\",\"Its my pleasure\",\"Mention not\"],\"closing\":[\"Ok bye-bye\",\"As you wish, bye take-care\",\"Bye-bye, see you soon..\"],\"offers\":[\"All Users - Flat 35% OFF | Minimum Rs 200 Order\"],\"complaints\":[\"We are extremely sorry that you are having an issue or complaint with our services and regret the inconvenience. We will make every effort to provide a resolution. To get in touch you can email us on foodya_support@foodya.co.in\"],\"ok\":[\"Okay. Anything else I can help you with?\"],\"Ema\":[\"I'm your Foodya Assistant, and I can place orders for you\",\"I'm your Ema.If you need anything just ask,your wish is my command 🙏\"]}");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sachp\OneDrive\Documents\GitHub\ChatBot\AngularApp\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "BLn/":
/*!****************************************************!*\
  !*** ./src/app/chatwindow/chatwindow.component.ts ***!
  \****************************************************/
/*! exports provided: ChatwindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatwindowComponent", function() { return ChatwindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/users/users.service */ "WDL6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _titlebar_titlebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../titlebar/titlebar.component */ "aJiD");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/form.component */ "urH6");
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interaction/interaction.component */ "i9v1");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../searchbar/searchbar.component */ "jiot");








const _c0 = ["target"];
function ChatwindowComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatwindowComponent_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.clicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatwindowComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatwindowComponent_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatwindowComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-titlebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatwindowComponent_div_4_app_interaction_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-interaction");
} }
function ChatwindowComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatwindowComponent_div_4_app_interaction_3_Template, 1, 0, "app-interaction", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.submitted);
} }
function ChatwindowComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-searchbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatwindowComponent {
    constructor(userservice) {
        this.userservice = userservice;
        this.isClicked = false;
        this.submitted = false;
        this.exit = true;
        this.container = document.getElementById('box');
        this.passvalue = '';
        this.usermessage = '';
    }
    scrollToElement() {
        if (this.myScrollContainer) {
            this.myScrollContainer.nativeElement.scroll({
                top: this.myScrollContainer.nativeElement.scrollHeight,
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    ngAfterViewChecked() {
        this.userservice.message.subscribe((value) => {
            if (value[value.length - 1])
                this.scrollToElement();
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.isClicked = true;
        }, 2000);
        this.searchbar();
    }
    searchbar() {
        let a = this.userservice.getlocal();
        this.userservice.login.subscribe((value) => {
            this.submitted = value;
        });
        if (a)
            this.submitted = true;
        else
            this.submitted = false;
        this.userservice.exit.subscribe((value) => (this.exit = value));
    }
    clicked() {
        if (this.isClicked)
            this.isClicked = false;
        else
            this.isClicked = true;
    }
    // options = ['Track current Order', 'Feedbacks & Complaints', 'Popular Items'];
    selectedValue(i) {
        this.passvalue = i;
    }
    parentFunction(value) {
        this.usermessage = value;
    }
}
ChatwindowComponent.ɵfac = function ChatwindowComponent_Factory(t) { return new (t || ChatwindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"])); };
ChatwindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatwindowComponent, selectors: [["app-chatwindow"]], viewQuery: function ChatwindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, decls: 6, vars: 5, consts: [[1, "main-chat"], ["src", "../../assets/images/cross.png", "class", "cross", "alt", "cross", 3, "click", 4, "ngIf"], ["src", "../../assets/images/message.png", "alt", "message-logo", "class", "message", 3, "click", 4, "ngIf"], ["class", "header", 4, "ngIf"], ["class", "box", 4, "ngIf"], ["class", "searchclass", 4, "ngIf"], ["src", "../../assets/images/cross.png", "alt", "cross", 1, "cross", 3, "click"], ["src", "../../assets/images/message.png", "alt", "message-logo", 1, "message", 3, "click"], [1, "header"], [1, "box"], ["target", ""], [4, "ngIf"], [1, "searchclass"]], template: function ChatwindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatwindowComponent_img_1_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatwindowComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatwindowComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatwindowComponent_div_4_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatwindowComponent_div_5_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked && ctx.submitted && ctx.exit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _titlebar_titlebar_component__WEBPACK_IMPORTED_MODULE_3__["TitlebarComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_5__["InteractionComponent"], _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"]], styles: [".cross[_ngcontent-%COMP%], .message[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: -1rem;\r\n  right: -1rem;\r\n  width: 3.7rem;\r\n}\r\n.main-chat[_ngcontent-%COMP%] {\r\n  width: 23rem;\r\n  height: 35rem;\r\n\r\n  position: absolute;\r\n  right: 2rem;\r\n  top: 1.9rem;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  width: 23rem;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  \r\n  width: 23rem;\r\n  height: 24rem;\r\n  background-color: #b8c6db;\r\n  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);\r\n  overflow-y: scroll;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHdpbmRvdy9jaGF0d2luZG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0VBQWtFO0VBQ2xFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NoYXR3aW5kb3cvY2hhdHdpbmRvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyb3NzLFxyXG4ubWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTFyZW07XHJcbiAgcmlnaHQ6IC0xcmVtO1xyXG4gIHdpZHRoOiAzLjdyZW07XHJcbn1cclxuLm1haW4tY2hhdCB7XHJcbiAgd2lkdGg6IDIzcmVtO1xyXG4gIGhlaWdodDogMzVyZW07XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMnJlbTtcclxuICB0b3A6IDEuOXJlbTtcclxufVxyXG4uaGVhZGVyIHtcclxuICB3aWR0aDogMjNyZW07XHJcbn1cclxuLmJveCB7XHJcbiAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cclxuICB3aWR0aDogMjNyZW07XHJcbiAgaGVpZ2h0OiAyNHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhjNmRiO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNiOGM2ZGIgMCUsICNmNWY3ZmEgNzQlKTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatwindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatwindow',
                templateUrl: './chatwindow.component.html',
                styleUrls: ['./chatwindow.component.css'],
            }]
    }], function () { return [{ type: _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }]; }, { myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['target']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chatwindow_chatwindow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatwindow/chatwindow.component */ "BLn/");



class AppComponent {
    constructor() {
        this.title = 'Foodya';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "background"], ["src", "../assets/images/backgroundimg.png", "alt", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chatwindow");
    } }, directives: [_chatwindow_chatwindow_component__WEBPACK_IMPORTED_MODULE_1__["ChatwindowComponent"]], styles: [".background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG4vKiBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSAqL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "WDL6":
/*!************************************************!*\
  !*** ./src/app/service/users/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UsersService {
    constructor(http) {
        this.http = http;
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([
            {
                message: `Hi 👋,
       How can I help you today?`,
                messagetype: 'message',
                type: 'bot',
                time: new Date(),
            },
            {
                message: `startoptions`,
                messagetype: 'list',
                type: 'bot',
                time: new Date(),
            },
        ]);
        //  readonly baseURL = 'http://localhost:3000/users';
        this.baseURL = 'https://pizaa-chatbot.herokuapp.com/users';
        this.login = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.exit = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    //Post user details
    postItems(user) {
        return this.http.post(this.baseURL, user);
    }
    getOrderid(orderid) {
        return this.http.get(this.baseURL + '/' + 'orderid' + '/' + orderid);
    }
    savelocal(emailid, phonenumber, name) {
        localStorage.setItem('email', emailid);
        localStorage.setItem('phonenumber', phonenumber);
        localStorage.setItem('name', name);
    }
    //Getting data in local storage
    getlocal() {
        let email = localStorage.getItem('email');
        return email;
    }
    getUserData(email) {
        return this.http.get(this.baseURL + '/' + email);
    }
    storemessagetodatabase(messageobj) {
        let objFormat = {
            messages: messageobj[0],
        };
        console.log(objFormat);
        this.addinfo(objFormat).subscribe();
    }
    addmessage(messageObj) {
        this.storemessagetodatabase(messageObj);
        this.message.subscribe((value) => (this.allmsg = value));
        this.allmsg.push(messageObj[0]);
        this.message.next(this.allmsg);
        this.allmsg = [];
    }
    //Add IP and Ordered items
    addinfo(item) {
        let newurl = this.baseURL.concat('/' + localStorage.getItem('email'));
        return this.http.patch(newurl, item);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interaction/interaction.component */ "i9v1");
/* harmony import */ var _chatwindow_chatwindow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatwindow/chatwindow.component */ "BLn/");
/* harmony import */ var _titlebar_titlebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./titlebar/titlebar.component */ "aJiD");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "urH6");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "jiot");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_5__["InteractionComponent"],
        _chatwindow_chatwindow_component__WEBPACK_IMPORTED_MODULE_6__["ChatwindowComponent"],
        _titlebar_titlebar_component__WEBPACK_IMPORTED_MODULE_7__["TitlebarComponent"],
        _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
        _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_9__["SearchbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_5__["InteractionComponent"],
                    _chatwindow_chatwindow_component__WEBPACK_IMPORTED_MODULE_6__["ChatwindowComponent"],
                    _titlebar_titlebar_component__WEBPACK_IMPORTED_MODULE_7__["TitlebarComponent"],
                    _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                    _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_9__["SearchbarComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "aJiD":
/*!************************************************!*\
  !*** ./src/app/titlebar/titlebar.component.ts ***!
  \************************************************/
/*! exports provided: TitlebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlebarComponent", function() { return TitlebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TitlebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
TitlebarComponent.ɵfac = function TitlebarComponent_Factory(t) { return new (t || TitlebarComponent)(); };
TitlebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitlebarComponent, selectors: [["app-titlebar"]], decls: 6, vars: 0, consts: [["id", "main"], ["src", "../../assets/images/woman.png", "alt", ""]], template: function TitlebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ask EMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#main[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n\r\n  background: rgb(255, 153, 0);\r\n  padding: 0.5rem;\r\n  padding-left: 1.5rem;\r\n  border-top-left-radius: 16px;\r\n  border-top-right-radius: 16px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  width: 3rem;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 900;\r\n  padding-top: 0.7rem;\r\n  font-size: 1.5rem;\r\n  padding-left: 0.3rem;\r\n}\r\n#main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGViYXIvdGl0bGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhOztFQUViLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90aXRsZWJhci90aXRsZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDE1MywgMCk7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XHJcbn1cclxuaW1nIHtcclxuICB3aWR0aDogM3JlbTtcclxufVxyXG5wIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMC4zcmVtO1xyXG59XHJcbiNtYWluIGRpdiB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitlebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-titlebar',
                templateUrl: './titlebar.component.html',
                styleUrls: ['./titlebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i9v1":
/*!******************************************************!*\
  !*** ./src/app/interaction/interaction.component.ts ***!
  \******************************************************/
/*! exports provided: InteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionComponent", function() { return InteractionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _imageinfo_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imageinfo.json */ "lu6h");
var _imageinfo_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../imageinfo.json */ "lu6h", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_items_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/items/items.service */ "y95v");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/users/users.service */ "WDL6");
/* harmony import */ var _service_systeminfo_systeminfo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../service/systeminfo/systeminfo.service */ "jzEn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function InteractionComponent_ng_container_0_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx_r10.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.message, " ");
} }
function InteractionComponent_ng_container_0_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r11.imagepath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function InteractionComponent_ng_container_0_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx_r12.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.message, " ");
} }
function InteractionComponent_ng_container_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_div_1_div_1_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InteractionComponent_ng_container_0_div_1_div_1_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InteractionComponent_ng_container_0_div_1_div_1_div_3_Template, 2, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.changetype(i_r2) && i_r2.type == "bot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.changetype(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.changetype(i_r2) && i_r2.type == "user");
} }
function InteractionComponent_ng_container_0_div_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_ng_container_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const i_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r16.listclick(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r15.name);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_ng_container_2_div_1_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.startoptions);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_ng_container_3_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const i_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r20.listclick(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r19.name);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_ng_container_3_div_1_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.afteroffers);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_ng_container_4_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const i_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r24.listclick(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r23.name);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_ng_container_4_div_1_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.endoptions);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_ng_container_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const i_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r28.listclick(i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r27.name);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_ng_container_5_div_1_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.confirmation);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_ng_container_6_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const i_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r32.listclick(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r31.name);
} }
function InteractionComponent_ng_container_0_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_ng_container_6_div_1_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.types);
} }
function InteractionComponent_ng_container_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_div_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r34.current = ctx_r34.current - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_div_7_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r36.clickedProduct(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InteractionComponent_ng_container_0_div_1_div_7_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r38.current = ctx_r38.current + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r9.current == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.imgurl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.imgname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u20B9", ctx_r9.imgprice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r9.imglocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.imgstatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r9.disabled());
} }
function InteractionComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_div_1_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, InteractionComponent_ng_container_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InteractionComponent_ng_container_0_div_1_ng_container_3_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InteractionComponent_ng_container_0_div_1_ng_container_4_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InteractionComponent_ng_container_0_div_1_ng_container_5_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InteractionComponent_ng_container_0_div_1_ng_container_6_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InteractionComponent_ng_container_0_div_1_div_7_Template, 20, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2.messagetype != "list" && i_r2.message != "startoptions" && i_r2.message != "Veg" && i_r2.message != "Non-Veg");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2.message == "startoptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2.message == "afteroffers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2.message == "endoptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2.message == "confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r2.message == "Place an Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.changeImageType(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 9, i_r2.time, "E "), "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 12, i_r2.time, "shortTime"), "");
} }
function InteractionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, InteractionComponent_ng_container_0_div_1_Template, 12, 15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.filteritems);
} }
class InteractionComponent {
    constructor(itemsService, userservice, systeminfo) {
        this.itemsService = itemsService;
        this.userservice = userservice;
        this.systeminfo = systeminfo;
        this.usermessageinfo = [];
        this.botmessageinfo = [];
        this.Items = [];
        this.current = 0;
        this.locked = false;
        this.imagepath = '../../assets/images/bot.png';
        this.message = '';
        this.background = '';
        this.color = '';
        this.imgurl = '';
        this.rightarrow = 'assets/images/right-arrow.svg';
        this.startoptions = [
            {
                name: 'Place an Order',
            },
            {
                name: 'Track',
            },
            {
                name: 'Offers',
            },
        ];
        this.afteroffers = [
            {
                name: 'Place an Order',
            },
            {
                name: 'Track',
            },
        ];
        this.endoptions = [
            {
                name: 'Place a new Order',
            },
            {
                name: 'Track',
            },
            {
                name: 'Offers',
            },
            {
                name: 'Exit',
            },
        ];
        this.confirmation = [
            {
                name: 'Yes',
            },
            {
                name: 'No',
            },
        ];
        this.types = [
            {
                name: 'Veg',
            },
            {
                name: 'Non-Veg',
            },
        ];
    }
    botmessage(val, msgtype, type) {
        this.botmessageinfo.push({
            message: val,
            messagetype: msgtype,
            type: type,
            time: new Date(),
        });
    }
    listclick(val) {
        if (val.name == 'Place an Order' || val.name == 'Place a new Order') {
            this.botmessage('Place an Order', 'message', 'user');
        }
        else if (val.name == 'Veg') {
            this.botmessage('Veg', 'message', 'user');
        }
        else if (val.name == 'Non-Veg') {
            this.botmessage('Non-Veg', 'message', 'user');
        }
        else if (val.name == 'Track') {
            this.botmessage('Please enter your order id', 'message', 'bot');
        }
        else if (val.name == 'Offers') {
            this.botmessage('All Users - Flat 35% OFF | Minimum Rs 200 Order', 'message', 'bot');
            this.botmessage('afteroffers', 'list', 'bot');
        }
        else if (val.name == 'Exit') {
            this.botmessage('Are you sure you want to leave this conversation?', 'message', 'bot');
            this.botmessage('confirmation', 'list', 'bot');
            // this.exit();
        }
        else if (val.name == 'Yes') {
            this.botmessage('Yes', 'message', 'user');
            this.botmessage('Please don’t hesitate to use our live chat service again in future. We’re always here to help.  I hope to hear from you soon.', 'message', 'bot');
            this.exit();
        }
        else if (val.name == 'No') {
            this.botmessage('No', 'message', 'user');
            this.botmessage('startoptions', 'list', 'bot');
        }
        this.botmessageinfo.forEach((element) => {
            // console.log(element);
            this.userservice.addmessage([element]);
        });
        // this.userservice.addmessage(this.botmessageinfo);
        this.botmessageinfo = [];
    }
    //Checking whether generated value exists in db or not
    check(generatedvalue) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userservice.getOrderid(generatedvalue).subscribe((response) => {
                if (Object.keys(response).length == 0) {
                    return true;
                }
                else
                    return false;
            }, (error) => {
                console.log(error);
                return false;
            });
            return false;
        });
    }
    orderidgencontroller() {
        let finalvalue = '';
        while (true) {
            let generatedvalue = this.OrderIDGEN();
            if (this.check(generatedvalue)) {
                finalvalue = generatedvalue;
                break;
            }
        }
        return finalvalue;
    }
    changeImageType(i) {
        if (i.message == 'Veg' || i.message == 'Non-Veg') {
            i.message === 'Veg'
                ? (this.foodtype = _imageinfo_json__WEBPACK_IMPORTED_MODULE_1__["vegpizaa"])
                : (this.foodtype = _imageinfo_json__WEBPACK_IMPORTED_MODULE_1__["non-vegpizaa"]);
            this.imgurl = this.foodtype[this.current]['url'];
            this.imgname = this.foodtype[this.current]['name'];
            this.imgprice = this.foodtype[this.current]['price'];
            this.imgstatus = this.foodtype[this.current]['status'];
            this.imglocked = this.foodtype[this.current]['locked'];
            this.length = this.foodtype.length;
            return true;
        }
        return false;
    }
    disabled() {
        if (this.current == this.length - 1)
            return true;
    }
    alreadypurchasedstatus() {
        //Checking whether user purchased any goods or not,if yes then changing the status from "Buy" to "Purchased"
        this.userservice.getUserData(localStorage.getItem('email')).subscribe((response) => {
            if (response != null && response.orderedItems != undefined) {
                console.log(response.orderedItems);
                this.purchasedItems = response.orderedItems.map((val) => ({
                    name: val.name,
                    foodtype: val.foodtype,
                }));
                this.changePurchasedValue();
            }
        }, (error) => console.log(error));
    }
    ngOnInit() {
        //console.log(this.orderidgencontroller());
        //Get Users IP Address
        // this.systeminfo.getIPAddress().subscribe(
        //   (response) => this.userservice.addinfo(response).subscribe(),
        //   (error) => console.log(error)
        // );
        //Shortcut
        this.alreadypurchasedstatus();
        this.systeminfo
            .getIPAddress()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((response) => this.userservice.addinfo(response)))
            .subscribe();
        const sysInfo = this.systeminfo.deviceinformation();
        const newObjectFormat = {
            systeminfo: {
                browser: sysInfo.browser,
                browser_version: sysInfo.browser_version,
                os: sysInfo.os_version,
            },
        };
        this.userservice.addinfo(newObjectFormat).subscribe();
        this.userservice.message.subscribe((value) => {
            this.filteritems = value;
        });
        this.currentDate = new Date();
    }
    //Disabling purchased button and changing it "Buy" to "Purchase"
    changePurchasedValue() {
        Object.values(this.purchasedItems).forEach((val) => {
            let purchasedtype;
            val.foodtype === 'Veg'
                ? (purchasedtype = _imageinfo_json__WEBPACK_IMPORTED_MODULE_1__["vegpizaa"])
                : (purchasedtype = _imageinfo_json__WEBPACK_IMPORTED_MODULE_1__["non-vegpizaa"]);
            Object.values(purchasedtype).forEach((itemname) => {
                if (itemname.name == val.name) {
                    itemname.status = 'Purchased';
                    itemname.locked = true;
                }
            });
        });
    }
    exit() {
        this.userservice.exit.next(false);
    }
    //Changing type user and value in html
    changetype(val) {
        if (val.type == 'bot' && val.message == 'items') {
            return false;
        }
        else if (val.type == 'bot') {
            this.imagepath = '../../assets/images/woman.png';
            this.message = val.message;
            this.background = 'background: #558679';
            this.color = 'color: rgb(255, 255, 255)';
            return true;
        }
        else if (val.type == 'user') {
            this.imagepath = '../../assets/images/man.png';
            this.message = val.message;
            // this.background = 'background:#16697a';
            this.background = 'background:#D33F49';
            this.color = 'color: rgb(255, 255, 255)';
            //this.color = 'color:222831';
            return true;
        }
    }
    OrderIDGEN() {
        let generatedOrderId = 'OD';
        const validchars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < 5; i++) {
            const index = Math.floor(Math.random() * validchars.length);
            generatedOrderId += validchars[index];
        }
        return generatedOrderId;
    }
    //When users clicks the food item storing in db
    clickedProduct(i) {
        let id = this.orderidgencontroller();
        let obj = {
            orderedItems: {
                name: this.imgname,
                pic: this.imgurl,
                foodtype: i.message,
                price: this.imgprice,
                orderid: id,
            },
        };
        let text = `Hello ${localStorage.getItem('name')},Your order has been placed.Use this orderid to track your item ${id}`;
        this.botmessage(text, 'message', 'bot');
        this.botmessage('endoptions', 'list', 'bot');
        this.botmessageinfo.forEach((element) => {
            // console.log(element);
            this.userservice.addmessage([element]);
        });
        this.botmessageinfo = [];
        this.userservice.addinfo(obj).subscribe((response) => {
            console.log(response);
            this.foodtype[this.current]['status'] = 'Purchased';
            this.foodtype[this.current]['locked'] = true;
        }, (error) => console.log(error));
    }
}
InteractionComponent.ɵfac = function InteractionComponent_Factory(t) { return new (t || InteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_items_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_systeminfo_systeminfo_service__WEBPACK_IMPORTED_MODULE_6__["SysteminfoService"])); };
InteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InteractionComponent, selectors: [["app-interaction"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], ["class", "group", 4, "ngIf"], ["class", "carousel", 4, "ngIf"], [1, "group"], ["class", "bot message", 3, "style", 4, "ngIf"], ["class", "bot", 4, "ngIf"], ["class", "bot message usermsg", 3, "style", 4, "ngIf"], [1, "bot", "message"], [1, "bot"], ["alt", "pic", 1, "icon", 3, "src"], [1, "bot", "message", "usermsg"], ["class", "list", 3, "click", 4, "ngFor", "ngForOf"], [1, "list", 3, "click"], [1, "start-options"], [1, "afteroffers"], [1, "end-options"], ["class", "types", 3, "click", 4, "ngFor", "ngForOf"], [1, "types", 3, "click"], [1, "carousel"], [1, "left", "arrow"], [1, "arrowbtn", 3, "disabled", "click"], ["src", "../../assets/images/left-arrow.png", "alt", ""], [1, "food"], ["alt", "pic", 1, "foodpic", 3, "src"], [1, "name"], [1, "price"], [1, "buttonlist"], [1, "btn", 3, "disabled", "click"], [1, "right", "arrow"], ["src", "assets/images/right.svg", "alt", ""]], template: function InteractionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InteractionComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteritems.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".icon[_ngcontent-%COMP%] {\r\n  width: 3rem;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 0.7rem 1.4rem;\r\n  width: 100%;\r\n}\r\n.group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n  padding-bottom: 0.7rem;\r\n}\r\n.bot[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding-right: 0.5rem;\r\n}\r\n.message[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background: rgb(139, 139, 139);\r\n  text-align: start;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 15px;\r\n  font-size: 0.8rem;\r\n  font-weight: bold;\r\n  word-wrap: break-word;\r\n  line-height: 1.4rem;\r\n  letter-spacing: 0.07rem;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: x-small;\r\n  color: grey;\r\n  font-weight: bold;\r\n  padding-left: 0.7rem;\r\n  padding-top: 0.5rem;\r\n}\r\n.image-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n  align-items: center;\r\n}\r\n.images[_ngcontent-%COMP%] {\r\n  padding-left: 2rem;\r\n  padding-bottom: 2rem;\r\n}\r\n.images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 14rem;\r\n  height: 12rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: rgb(0, 0, 0);\r\n  font-weight: 900;\r\n}\r\n.usermsg[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n.arrow[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  width: 4rem;\r\n  background: none;\r\n  align-items: center;\r\n}\r\n.carousel[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.foodpic[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  border-radius: 50%;\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding-bottom: 0.5rem;\r\n}\r\n.food[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.price[_ngcontent-%COMP%] {\r\n  color: rgb(255, 103, 1);\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  background: rgb(94, 128, 0);\r\n  color: white;\r\n  font-weight: 900;\r\n  letter-spacing: 0.1rem;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 25px;\r\n}\r\n.btn[disabled=\"disabled\"][_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled {\r\n  background: rgba(243, 130, 25, 0.562);\r\n  cursor: auto;\r\n}\r\n.buttonlist[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.start-options[_ngcontent-%COMP%], .end-options[_ngcontent-%COMP%], .afteroffers[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0.3rem 2rem;\r\n  border-radius: 25px;\r\n  font-size: 1rem;\r\n  border: 1px solid black;\r\n}\r\n.start-options[_ngcontent-%COMP%]:hover, .end-options[_ngcontent-%COMP%]:hover, .afteroffers[_ngcontent-%COMP%]:hover {\r\n  background: brown;\r\n  color: rgb(255, 255, 255);\r\n  border: 1px solid rgb(243, 243, 243);\r\n}\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  outline-width: 0 !important;\r\n}\r\n.arrowbtn[_ngcontent-%COMP%]:disabled {\r\n  opacity: 50%;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  background: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1COztFQUVuQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBOzs7Ozs7Ozs7R0FTRztBQUNIOzs7Ozs7Ozs7Ozs7R0FZRztBQUNIO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxxQ0FBcUM7RUFDckMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7OztFQUdFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaW50ZXJhY3Rpb24vaW50ZXJhY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICB3aWR0aDogM3JlbTtcclxufVxyXG5idXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwLjdyZW0gMS40cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xyXG59XHJcbi5ib3Qge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAxMzksIDEzOSk7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wN3JlbTtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjdyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG4uaW1hZ2UtYm94IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLyogbWFyZ2luLWJvdHRvbTogMnJlbTsgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5pbWFnZXMge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG4uaW1hZ2VzIGltZyB7XHJcbiAgd2lkdGg6IDE0cmVtO1xyXG4gIGhlaWdodDogMTJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi8qIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufSAqL1xyXG4vKiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDEzMCwgMjUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5idXR0b25bZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXSxcclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgMTMwLCAyNSwgMC41NjIpO1xyXG4gIGN1cnNvcjogYXV0bztcclxufSAqL1xyXG5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG4udXNlcm1zZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYXJyb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDRyZW07XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXJvdXNlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmZvb2RwaWMge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuLmZvb2Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucHJpY2Uge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxMDMsIDEpO1xyXG59XHJcbi5idG4ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoOTQsIDEyOCwgMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5idG5bZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXSxcclxuLmJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDEzMCwgMjUsIDAuNTYyKTtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuLmJ1dHRvbmxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnN0YXJ0LW9wdGlvbnMsXHJcbi5lbmQtb3B0aW9ucyxcclxuLmFmdGVyb2ZmZXJzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjNyZW0gMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uc3RhcnQtb3B0aW9uczpob3ZlcixcclxuLmVuZC1vcHRpb25zOmhvdmVyLFxyXG4uYWZ0ZXJvZmZlcnM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGJyb3duO1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG4uYXJyb3didG46ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDUwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-interaction',
                templateUrl: './interaction.component.html',
                styleUrls: ['./interaction.component.css'],
            }]
    }], function () { return [{ type: _service_items_items_service__WEBPACK_IMPORTED_MODULE_4__["ItemsService"] }, { type: _service_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }, { type: _service_systeminfo_systeminfo_service__WEBPACK_IMPORTED_MODULE_6__["SysteminfoService"] }]; }, null); })();


/***/ }),

/***/ "jiot":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service/users/users.service */ "WDL6");
/* harmony import */ var _service_botpredefinedmessages_botpredefinedmessages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/botpredefinedmessages/botpredefinedmessages.service */ "t9f6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SearchbarComponent {
    // @Output() parentFunction = new EventEmitter<String>();
    // @Output() parentFunction: EventEmitter<any> = new EventEmitter();
    constructor(userservice, messageplace) {
        this.userservice = userservice;
        this.messageplace = messageplace;
        this.searchvalue = '';
        this.i = 0;
        this.botvalue = '';
        this.placeholder = 'Start a conversation';
        this.usermessageinfo = [];
        this.botmessageinfo = [];
    }
    handleSubmit(e, myForm) {
        e.preventDefault();
        // if (e.keyCode === 13) {
        this.usermessageinfo.push({
            message: this.searchvalue,
            messagetype: 'message',
            type: 'user',
            time: new Date(),
        });
        // console.log(this.usermessageinfo);
        this.placeholder = '';
        this.userservice.addmessage(this.usermessageinfo);
        if (this.searchvalue != 'startoptions') {
            this.botmessage();
            myForm.reset();
            this.usermessageinfo = [];
        }
    }
    ngOnInit() {
        this.userservice.message.subscribe((response) => {
            this.lastmsg = response[response.length - 2];
        });
    }
    botmessage() {
        if (this.lastmsg.message.includes('Please enter your order id')) {
            let str = this.searchvalue.slice(0, 2);
            if (this.searchvalue.length == 7 && 'OD' == str) {
                this.userservice.getOrderid(this.searchvalue).subscribe((response) => {
                    if (response.length == 0) {
                        this.botvalue = 'Invalid Order Id';
                    }
                    else {
                        this.botvalue = 'You order is currently in transit';
                        // console.log('Success');
                    }
                    this.savemsg();
                    this.botvalue = 'startoptions';
                    this.savemsg();
                }, (error) => console.log(error));
            }
            else {
                this.botvalue = 'Invalid Order Id';
                this.savemsg();
                this.botvalue = 'startoptions';
                this.savemsg();
            }
        }
        else {
            this.botvalue = this.messageplace.messages(this.searchvalue);
            this.savemsg();
        }
    }
    savemsg() {
        if (this.botvalue != '') {
            this.botmessageinfo.push({
                message: this.botvalue,
                messagetype: 'message',
                type: 'bot',
                time: new Date(),
            });
            this.userservice.addmessage(this.botmessageinfo);
            this.botmessageinfo = [];
        }
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_botpredefinedmessages_botpredefinedmessages_service__WEBPACK_IMPORTED_MODULE_2__["BotpredefinedmessagesService"])); };
SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["app-searchbar"]], decls: 4, vars: 2, consts: [[1, "searchbar"], [3, "ngSubmit"], ["myForm", "ngForm"], ["type", "text", "name", "searchvalue", 3, "placeholder", "ngModel", "ngModelChange"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchbarComponent_Template_form_ngSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.handleSubmit($event, _r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchvalue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("ngModel", ctx.searchvalue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["input[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  outline-width: 0 !important;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-top: 0.0001px solid rgb(150, 150, 150);\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  padding: 1rem;\r\n  letter-spacing: 0.05rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0MsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoYmFyL3NlYXJjaGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQ6Zm9jdXMsXHJcbmlucHV0LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDAuMDAwMXB4IHNvbGlkIHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-searchbar',
                templateUrl: './searchbar.component.html',
                styleUrls: ['./searchbar.component.css'],
            }]
    }], function () { return [{ type: _service_users_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _service_botpredefinedmessages_botpredefinedmessages_service__WEBPACK_IMPORTED_MODULE_2__["BotpredefinedmessagesService"] }]; }, null); })();


/***/ }),

/***/ "jzEn":
/*!**********************************************************!*\
  !*** ./src/app/service/systeminfo/systeminfo.service.ts ***!
  \**********************************************************/
/*! exports provided: SysteminfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysteminfoService", function() { return SysteminfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");




class SysteminfoService {
    constructor(http, deviceService) {
        this.http = http;
        this.deviceService = deviceService;
        this.deviceInfo = null;
    }
    getIPAddress() {
        return this.http.get('https://api.ipify.org/?format=json');
    }
    deviceinformation() {
        return this.deviceService.getDeviceInfo();
    }
}
SysteminfoService.ɵfac = function SysteminfoService_Factory(t) { return new (t || SysteminfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"])); };
SysteminfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SysteminfoService, factory: SysteminfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SysteminfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"] }]; }, null); })();


/***/ }),

/***/ "lu6h":
/*!********************************!*\
  !*** ./src/app/imageinfo.json ***!
  \********************************/
/*! exports provided: vegpizaa, non-vegpizaa, startoptions,  types, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"vegpizaa\":[{\"url\":\"https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80\",\"name\":\"Margherita\",\"status\":\"Buy Now\",\"price\":450,\"locked\":false},{\"url\":\"https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\",\"name\":\"Peppy Paneer\",\"status\":\"Buy Now\",\"price\":250,\"locked\":false},{\"url\":\"https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"name\":\"Veg Extravaganza\",\"status\":\"Buy Now\",\"price\":350,\"locked\":false}],\"non-vegpizaa\":[{\"url\":\"https://images.unsplash.com/photo-1559160582-eab6966b680f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80\",\"name\":\"Jerked Chicken Pizza\",\"status\":\"Buy Now\",\"price\":650,\"locked\":false},{\"url\":\"https://images.unsplash.com/photo-1599130143407-2a6ff8a196c9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80\",\"name\":\"Pepperoni Pizza\",\"status\":\"Buy Now\",\"price\":550,\"locked\":false},{\"url\":\"https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\",\"name\":\"Classic Chicken Pizza\",\"status\":\"Buy Now\",\"price\":550,\"locked\":false}],\"startoptions\":[{\"name\":\"Place an Order\"},{\"name\":\"Track\"},{\"offers\":\"Offers\"}],\" types\":[{\"name\":\"Veg\"},{\"name\":\"Non-Veg\"}]}");

/***/ }),

/***/ "t9f6":
/*!********************************************************************************!*\
  !*** ./src/app/service/botpredefinedmessages/botpredefinedmessages.service.ts ***!
  \********************************************************************************/
/*! exports provided: BotpredefinedmessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotpredefinedmessagesService", function() { return BotpredefinedmessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../predefinedmessage.json */ "/nhd");
var _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../predefinedmessage.json */ "/nhd", 1);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../users/users.service */ "WDL6");




class BotpredefinedmessagesService {
    constructor(userservice) {
        this.userservice = userservice;
    }
    messages(value) {
        value = value.toLowerCase();
        console.log(value);
        value = value.replace(/"|'|-/gi, '');
        if (value.includes('hi') ||
            value.includes('hello') ||
            value.includes('hey') ||
            value.includes('whatsup')) {
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.intro[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.intro.length)];
        }
        else if (value.includes('status') || value.includes('track')) {
            return 'startoptions';
        }
        else if (value.includes('thank')) {
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.thank[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.thank.length)];
        }
        else if (value.includes('bye') ||
            value.includes('good night') ||
            value.includes('by')) {
            this.userservice.exit.next(false);
            return 'Please don’t hesitate to use our live chat service again in future. We’re always here to help.  I hope to hear from you soon.';
        }
        else if (value.includes('who'))
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.Ema[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.Ema.length)];
        else if (value.includes('how are you') ||
            value.includes('how are u') ||
            value.includes('how r u'))
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.greetings[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.greetings.length)];
        else if (value.includes('offer'))
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.offers[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.offers.length)];
        else if (value.includes('complaint') || value.includes('issue'))
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.complaints[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.complaints.length)];
        else if (value.includes('ok') ||
            value.includes('fine') ||
            value.includes('got it'))
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.ok[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.ok.length)];
        else if (value.includes('hobbies')) {
            return _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.hobbies[Math.floor(Math.random() * _predefinedmessage_json__WEBPACK_IMPORTED_MODULE_1__.hobbies.length)];
        }
        else if (value.includes('items') ||
            value.includes('order piza') ||
            value.includes('popular pizza') ||
            value.includes('popular product') ||
            value.includes('order item') ||
            value.includes('oder') ||
            value.includes('food item') ||
            value.includes('place order') ||
            value.includes('order pizaa') ||
            value.includes('order pizza') ||
            value.includes('order')) {
            return 'Place an Order';
        }
        else if (value.includes('nonveg')) {
            return 'Non-Veg';
        }
        else if (value.includes('veg')) {
            return 'Veg';
        }
        else {
            return 'Can you please rephrase the question?';
        }
        // return this.temp;
    }
}
BotpredefinedmessagesService.ɵfac = function BotpredefinedmessagesService_Factory(t) { return new (t || BotpredefinedmessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"])); };
BotpredefinedmessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BotpredefinedmessagesService, factory: BotpredefinedmessagesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BotpredefinedmessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "urH6":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/users/users.service */ "WDL6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FormComponent_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_0_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please fill in your contact information to send this message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_div_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormComponent_div_0_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormComponent_div_0_span_11_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormComponent_div_0_span_14_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormComponent_div_0_span_17_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.signupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.signupForm.get("userData.name").valid && ctx_r0.signupForm.get("userData.name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.signupForm.get("userData.email").valid && ctx_r0.signupForm.get("userData.email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.signupForm.get("userData.phonenumber").valid && ctx_r0.signupForm.get("userData.phonenumber").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.signupForm.get("userData.address").valid && ctx_r0.signupForm.get("userData.address").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.signupForm.invalid);
} }
class FormComponent {
    constructor(userservice) {
        this.userservice = userservice;
        this.submitted = true;
    }
    //:NgForm
    onSubmit() {
        this.obj = this.signupForm.controls.userData.value;
        this.userservice.getUserData(this.obj.email).subscribe((response) => {
            if (response == null) {
                //Post data when its not present in database
                this.userservice.postItems(this.obj).subscribe((response) => {
                    this.userservice.savelocal(response.email, response.phonenumber, response.name);
                }, (error) => {
                    console.log(error);
                });
            }
            else {
                this.userservice.savelocal(this.obj.email, this.obj.phonenumber, this.obj.name);
            }
            this.userservice.login.next(true);
            this.submitted = false;
        }, (error) => console.log(error));
    }
    ngOnInit() {
        let a = this.userservice.getlocal();
        if (a)
            this.submitted = false;
        else
            this.submitted = true;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userData: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]+'),
                ]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
                phonenumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{10}'),
                ]),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                ]),
            }),
        });
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 1, vars: 1, consts: [["class", "box-container", 4, "ngIf"], [1, "box-container"], [1, "form"], [3, "formGroup", "ngSubmit"], ["formGroupName", "userData"], [1, "form-group"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Enter your full name", 1, "form-control"], ["class", "help-block", 4, "ngIf"], ["type", "text", "formControlName", "email", "id", "email", "placeholder", "Enter your Email id", 1, "form-control"], ["type", "text", "id", "phonenumber", "formControlName", "phonenumber", "placeholder", "Enter your phone number", 1, "form-control"], ["type", "text", "id", "address", "formControlName", "address", "placeholder", "Enter your full address", 1, "form-control"], [1, "button"], ["type", "submit", 1, "btn", 3, "disabled"], [1, "help-block"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormComponent_div_0_Template, 21, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".form[_ngcontent-%COMP%] {\r\n  width: 17rem;\r\n  height: 17.5rem;\r\n  margin: auto;\r\n  padding: 1rem;\r\n  margin-top: 1rem;\r\n  box-shadow: 0 0 10px rgb(192, 32, 255);\r\n  background: #ffdda967;\r\n  border-radius: 15px;\r\n}\r\nbutton[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  outline-width: 0 !important;\r\n  border: none;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: rgba(230, 21, 21, 0.856);\r\n  color: white;\r\n  font-weight: 900;\r\n  border: none;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  padding: 0.5rem 2rem;\r\n  border-radius: 25px;\r\n}\r\n.btn[disabled=\"disabled\"][_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:disabled {\r\n  background-color: rgba(230, 21, 21, 0.541);\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 1rem;\r\n}\r\n.box-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding-top: 2rem;\r\n}\r\ninput.ng-invalid.ng-dirty[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #ff0303;\r\n}\r\ninput.ng-valid[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #17f30f !important;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  border-bottom: 0.5px solid #5050502f;\r\n  height: 2rem;\r\n  padding-bottom: 0rem;\r\n}\r\ninput[_ngcontent-%COMP%]:focus, input.form-control[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  outline-width: 0 !important;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  padding: 0 2.5rem;\r\n  text-align: center;\r\n  color: gray;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n  color: grey;\r\n  font-size: x-small;\r\n  padding-bottom: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IFwifmJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiOyAqL1xyXG4uZm9ybSB7XHJcbiAgd2lkdGg6IDE3cmVtO1xyXG4gIGhlaWdodDogMTcuNXJlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYigxOTIsIDMyLCAyNTUpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmRkYTk2NztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDIxLCAyMSwgMC44NTYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4uYnRuW2Rpc2FibGVkPVwiZGlzYWJsZWRcIl0sXHJcbi5idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMSwgMjEsIDAuNTQxKTtcclxufVxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcbi5ib3gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuaW5wdXQubmctaW52YWxpZC5uZy1kaXJ0eSxcclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjAzMDM7XHJcbn1cclxuXHJcbmlucHV0Lm5nLXZhbGlkIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxN2YzMGYgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM1MDUwNTAyZjtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDByZW07XHJcbn1cclxuaW5wdXQ6Zm9jdXMsXHJcbmlucHV0LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZzogMCAyLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbnNwYW4ge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.css'],
            }]
    }], function () { return [{ type: _service_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "y95v":
/*!************************************************!*\
  !*** ./src/app/service/items/items.service.ts ***!
  \************************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ItemsService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:3000/items';
    }
    getItems() {
        return this.http.get(this.baseURL);
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map