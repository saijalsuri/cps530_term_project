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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"install\" align=\"center\">\n    <h1>NodeJS </h1>\n    <img src=\"https://raw.githubusercontent.com/nodesource/docker-node/master/brand/nodejs.png\" alt=\"Smiley face\" align=\"center\">\n    <div class=\"nodejs\">\n        <h3>Installation Steps</h3>\n        <p>1. Download the Windows installer from <a href=\"https://nodejs.org/en/\">Nodes.js</a>website.</p>\n        <p>2. Run the installer (the .msi file you downloaded in the previous step.)</p>\n        <p>3. Follow the prompts in the installer.</p>\n        <img src=\"http://www.w3big.com/nodejs/install-node-msi-version-on-windows-step2.png\" alt=\"Nodejs Install\">\n        <p>4. Restart your computer. You won't be able to run Node.js until you restart your computer.</p>\n        <p>5. Open your CMD on you computer. To check your node version run code </p>\n        <div style=\"background-color:rgb(49, 49, 49); color:aliceblue; padding:10px; height:50px; width:500px\">\n            <p><code>npm -v</code></p>\n        </div>\n        <br>\n        <hr>\n    </div>\n\n    <h1>Express </h1>\n    <img src=\"https://uploads.toptal.io/blog/category/logo/25/express_js.png\" alt=\"Smiley face\" align=\"center\">\n    <div class=\"express\">\n        <p>Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.</p>\n        <div style=\"background-color:rgb(49, 49, 49); color:aliceblue; padding:10px; height:50px; width:500px\">\n        <p><code>mkdir myapp</code></p>\n        </div>\n\n        <div style=\"background-color:rgb(49, 49, 49); color:aliceblue; padding:10px; height:50px; width:500px\">\n        <p><code>cd myapp</code></p>\n        </div>\n\n        <p>Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.</p>\n        <div style=\"background-color:rgb(49, 49, 49); color:aliceblue; padding:10px; height:50px; width:500px\">\n        <p><code>npm init</code></p>\n        </div>\n\n        <p>This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:</p>\n        <div style=\"background-color:rgb(49, 49, 49); color:aliceblue; padding:10px; height:50px; width:500px\">\n        <p><code>entry point: (index.js)</code></p>\n        </div>\n\n        <p>Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.</p>\n        Now install Express in the myapp directory and save it in the dependencies list. For example:\n        <div style=\"background-color:rgb(49, 49, 49); color:aliceblue; padding:10px; height:50px; width:500px\">\n        <p><code>npm install express --save</code></p>\n        </div>\n\n        <p>To install Express temporarily and not add it to the dependencies list:</p>\n        <div style=\"background-color:rgb(49, 49, 49); color:aliceblue; padding:10px; height:50px; width:500px\">  \n        <p><code>npm install express --no-save</code></p>\n        </div>\n        <br>\n        <hr>\n    </div>\n\n    <h1>AngularJS </h1>\n    <img src=\"https://angular.io/assets/images/logos/angular/angular.png\" alt=\"Smiley face\" align=\"center\">\n    <div class=\"angularjs\">\n        <h3>Prerequisites:</h3>\n        <p>Before you begin, make sure your development enviorment includes Node.JS and npm package manager.</p>\n\n        <h3>Install the Angular CLI</h3>\n        <p>You use the Angular CLI to create projects, generate applications and library code, and perform a variety of ongoing development task such as testing, bundling , and development.</p>\n        <p> Install the Angular CLI globablly.</p>\n        <p>To install the CLI using npm, open a terminal/console window and enter the following command:</p>\n        <br>\n        <code>npm install -g @angular/cli</code>\n        <br>\n        <br>\n        <hr>\n    </div>\n\n    <h1>MongoDB </h1>\n    <img src=\"https://cacm.acm.org/system/assets/0002/7119/042117_Theodo_MongoDB.large.jpg?1492791427&1492791427\" alt=\"Smiley face\" align=\"center\">\n    <div class=\"mongodb\">\n        <h3>Step 1: Install MongoDB</h3>\n        <p>Download the current stable release of <a href=\"https://www.mongodb.com/download-center\">MongoDB</a> and install using the complete setup type and all the default options.</p>\n\n        <h3>Step 2: Create the MongoDB data directory</h3>\n        <p>Create and empty folder at: \"C:\\data\\db\".</p>\n        <p>MongoDB requires a directory for storing all of it's data, the default directory is \"C:\\data\\db\", you can use a different directory if you prefer by specifying the \"--dbpath\" parameter when starting the MongoDB server (below).</p>\n        <h3>Step 3: Start MongoDB Server</h3>\n        <p>Start the MongoDB server by running \"mongod.exe\" from the command line, \"mongod.exe\" is located in \"C:\\Program Files\\MongoDB\\Server\\[MONGODB VERSION]\\bin\", for example for version 3.2 the following command will start MongoDB:</p>\n        <code>C:\\Program Files\\MongoDB\\Server\\3.2\\bin\\mongod</code>\n        <br>\n        <hr>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _contribution_contribution_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contribution/contribution.component */ "./src/app/contribution/contribution.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _install_install_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./install/install.component */ "./src/app/install/install.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");









var routes = [
    { path: 'install', component: _install_install_component__WEBPACK_IMPORTED_MODULE_6__["InstallComponent"] },
    { path: 'example', component: _example_example_component__WEBPACK_IMPORTED_MODULE_5__["ExampleComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"] },
    { path: 'contribution', component: _contribution_contribution_component__WEBPACK_IMPORTED_MODULE_3__["ContributionComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'tutorial', component: _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_8__["TutorialComponent"] },
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<section>\n  <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mean';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _install_install_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./install/install.component */ "./src/app/install/install.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _contribution_contribution_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contribution/contribution.component */ "./src/app/contribution/contribution.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tutorial/tutorial.component */ "./src/app/tutorial/tutorial.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                _install_install_component__WEBPACK_IMPORTED_MODULE_6__["InstallComponent"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceComponent"],
                _contribution_contribution_component__WEBPACK_IMPORTED_MODULE_9__["ContributionComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_11__["TutorialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contribution/contribution.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contribution/contribution.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contributors and there Responsibilities</h1>\n<div>\n    <h3>Frontend: AngularJS</h3>\n    <ul>\n        <li>Michael Sasota</li>\n        <li>Jack Chen</li>\n        <li>Allen Li</li>\n    </ul>\n    \n    <h3>Backend: MongoDB and express</h3>\n    <ul>\n        <li>Saijal Suri</li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/contribution/contribution.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contribution/contribution.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyaWJ1dGlvbi9jb250cmlidXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contribution/contribution.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contribution/contribution.component.ts ***!
  \********************************************************/
/*! exports provided: ContributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionComponent", function() { return ContributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContributionComponent = /** @class */ (function () {
    function ContributionComponent() {
    }
    ContributionComponent.prototype.ngOnInit = function () {
    };
    ContributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contribution',
            template: __webpack_require__(/*! ./contribution.component.html */ "./src/app/contribution/contribution.component.html"),
            styles: [__webpack_require__(/*! ./contribution.component.scss */ "./src/app/contribution/contribution.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContributionComponent);
    return ContributionComponent;
}());



/***/ }),

/***/ "./src/app/example/example.component.html":
/*!************************************************!*\
  !*** ./src/app/example/example.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  example works!\n</p>\n"

/***/ }),

/***/ "./src/app/example/example.component.scss":
/*!************************************************!*\
  !*** ./src/app/example/example.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
    }
    ExampleComponent.prototype.ngOnInit = function () {
    };
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.scss */ "./src/app/example/example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Conclusion</h1>\n<div style=\"width: 80%; margin: 20px auto;\">\n    <h2>Angular.js</h2>\n    <mark class=\"rating\">Rating: 4 / 5</mark>\n    <br>\n    <br>\n    <table class=\"table-rating\">\n        <tr>\n            <th>PROS</th>\n            <th>CONS</th>\n        </tr>\n        <tr>\n            <td>+ Easy to install</td>\n            <td>- Hard to learn for first timers</td>\n        </tr>\n        <tr>\n            <td>+ Javascript coder friendly</td>\n            <td>- Hard to navigate through</td>\n        </tr>\n        <tr>\n            <td>+ Lots of tutorials available</td>\n        </tr>\n        <tr>\n            <td>+ Realtime preview</td>\n        </tr>\n    </table>\n    <p>Angular 7 was a really nice framework to work with. It had simple installation process which didnt take too long to install and get right into making a simple web application. However it does have the problem of having quite a few directories to navigate but in the end it was doable. Compared to HTML/CSS/Javascript/PHP the learning curve would be a little steep for people who has little to no experience with HTML/CSS/Javascript/PHP but because Angular.js is widely used there are a ton of helpful tutorials that can help you achieve what you want in the web application. In the end in my opinion I would keep using the Angular framework as the experience was quite and experience that was hard a first but rewarding once everything worked.</p>\n    \n    <h2>Node.js</h2>\n    <mark class=\"rating\">Rating: ? / 5</mark>\n    <br>\n    <br>\n    <table class=\"table-rating\">\n        <tr>\n            <th>PROS</th>\n            <th>CONS</th>\n        </tr>\n        <tr>\n            <td>+ Positive Point</td>\n            <td>- Negative Point</td>\n        </tr>\n    </table>\n    <p>Conclusion</p>\n    \n    <h2>express</h2>\n    <mark class=\"rating\">Rating: ? / 5</mark>\n    <br>\n    <br>\n    <table class=\"table-rating\">\n        <tr>\n            <th>PROS</th>\n            <th>CONS</th>\n        </tr>\n        <tr>\n            <td>+ Positive Point</td>\n            <td>- Negative Point</td>\n        </tr>\n    </table>\n    <p>Conclusion</p>\n    \n    <h2>MongoDB</h2>\n    <mark class=\"rating\">Rating: ? / 5</mark>\n    <br>\n    <br>\n    <table class=\"table-rating\">\n        <tr>\n            <th>PROS</th>\n            <th>CONS</th>\n        </tr>\n        <tr>\n            <td>+ Positive Point</td>\n            <td>- Negative Point</td>\n        </tr>\n    </table>\n    <p>Conclusion</p>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.scss":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/experience/experience.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/install/install.component.html":
/*!************************************************!*\
  !*** ./src/app/install/install.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"install\">\n    <h1>NodeJS</h1>\n    <div class=\"nodejs\">\n        <h3>Installation Steps</h3>\n        <p>1. Download the Windows installer from <a href=\"https://nodejs.org/en/\">Nodes.js</a>website.</p>\n        <p>2. Run the installer (the .msi file you downloaded in the previous step.)</p>\n        <p>3. Follow the prompts in the installer.</p>\n        <p>4. Restart your computer. You won't be able to run Node.js until you restart your computer.</p>\n        <br>\n        <hr>\n    </div>\n\n    <h1>Express</h1>\n    <div class=\"express\">\n        <p>Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.</p>\n        <p><code>mkdir myapp</code></p>\n        <p><code>cd myapp</code></p>\n        <p>Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.</p>\n        <p><code>npm init</code></p>\n        <p>This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:</p>\n        <p><code>entry point: (index.js)</code></p>\n        <p>Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.</p>\n        Now install Express in the myapp directory and save it in the dependencies list. For example:\n        <p><code>npm install express --save</code></p>\n        <p>To install Express temporarily and not add it to the dependencies list:</p>\n        <p><code>npm install express --no-save</code></p>\n        <br>\n        <hr>\n    </div>\n\n    <h1>AngularJS</h1>\n    <div class=\"angularjs\">\n        <h3>Prerequisites:</h3>\n        <p>Before you begin, make sure your development enviorment includes Node.JS and npm package manager.</p>\n\n        <h3>Install the Angular CLI</h3>\n        <p>You use the Angular CLI to create projects, generate applications and library code, and perform a variety of ongoing development task such as testing, bundling , and development.</p>\n        <p> Install the Angular CLI globablly.</p>\n        <p>To install the CLI using npm, open a terminal/console window and enter the following command:</p>\n        <br>\n        <code>npm install -g @angular/cli</code>\n        <br>\n        <br>\n        <hr>\n    </div>\n\n    <h1>MongoDB</h1>\n    <div class=\"mongodb\">\n        <h3>Install MongoDB</h3>\n        <p>Download the current stable release of <a href=\"https://www.mongodb.com/download-center\">MongoDB</a> and install using the complete setup type and all the default options.</p>\n\n        <h3>Create the MongoDB data directory</h3>\n        <p>Create and empty folder at: \"C:\\data\\db\".</p>\n        <p>MongoDB requires a directory for storing all of it's data, the default directory is \"C:\\data\\db\", you can use a different directory if you prefer by specifying the \"--dbpath\" parameter when starting the MongoDB server (below).</p>\n        <h3>Start MongoDB Server</h3>\n        <p>Start the MongoDB server by running \"mongod.exe\" from the command line, \"mongod.exe\" is located in \"C:\\Program Files\\MongoDB\\Server\\[MONGODB VERSION]\\bin\", for example for version 3.2 the following command will start MongoDB:</p>\n        <code>C:\\Program Files\\MongoDB\\Server\\3.2\\bin\\mongod</code>\n        <br>\n        <hr>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/install/install.component.scss":
/*!************************************************!*\
  !*** ./src/app/install/install.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGwvaW5zdGFsbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/install/install.component.ts":
/*!**********************************************!*\
  !*** ./src/app/install/install.component.ts ***!
  \**********************************************/
/*! exports provided: InstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallComponent", function() { return InstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InstallComponent = /** @class */ (function () {
    function InstallComponent() {
    }
    InstallComponent.prototype.ngOnInit = function () {
    };
    InstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-install',
            template: __webpack_require__(/*! ./install.component.html */ "./src/app/install/install.component.html"),
            styles: [__webpack_require__(/*! ./install.component.scss */ "./src/app/install/install.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstallComponent);
    return InstallComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/about\">{{ appTitle }}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"/about\">About</a></li>\n        <li><a routerLink=\"/install\">Install</a></li>\n        <li><a routerLink=\"/tutorial\">Tutorial</a></li>\n        <li><a routerLink=\"/example\">Example</a></li>\n        <li><a routerLink=\"/experience\">Experience</a></li>\n        <li><a routerLink=\"/contribution\">Contribution</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #1D354E; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #374862; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxTYWlqYWxcXFJ5ZXJzb24gRmFsbCAyMDE4XFxDUFMgNTMwIC0gV2ViIFN5c3RlbXMgRGV2ZWxvcG1lbnRcXGNwczUzMG1lYW5zdGFja2FwcFxcZnJvbnRlbmQvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CLEVBNEJ0QjtFQTdCRDtJQUlRLGtCQUFpQixFQUNwQjtFQUxMO0lBUVEsb0JBQW1CLEVBb0J0QjtFQTVCTDtNQVdZLHNCQUFxQjtNQUNyQixVQUFTO01BQUUsV0FBVSxFQWV4QjtFQTNCVDtRQWVnQixZQUFXLEVBV2Q7RUExQmI7VUFrQm9CLGVBQWM7VUFDZCwwQkFBeUI7VUFDekIsZ0JBQWUsRUFLbEI7RUF6QmpCO1lBdUJ3QixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxRDM1NEU7XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcclxuICAgIFxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzNzQ4NjI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = 'MEAN';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.component.html":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tutorial works!\n</p>\n"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.scss":
/*!**************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.component.ts":
/*!************************************************!*\
  !*** ./src/app/tutorial/tutorial.component.ts ***!
  \************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.scss */ "./src/app/tutorial/tutorial.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Saijal\Ryerson Fall 2018\CPS 530 - Web Systems Development\cps530meanstackapp\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map